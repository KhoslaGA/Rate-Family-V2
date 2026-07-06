import { NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity/writeClient';
import { sendKlcHandoff } from '@/lib/email/klcHandoff';
import { normalizePhone } from '@/lib/phone';

export const runtime = 'nodejs';

/**
 * /api/life-referral — life insurance lead capture + KLC Group handoff.
 *
 * Flow:
 *   1. Validate the submission (CASL consent, required fields, enum values,
 *      phone normalization, preferred-contact rule).
 *   2. Write a `lifeReferral` document to Sanity with full consent metadata.
 *   3. Forward minimum-necessary information to KLC Group Canada Inc. via
 *      Resend. Sanity write succeeded means the lead is preserved even if
 *      the email step fails — manual follow-up possible.
 *   4. Patch the Sanity record with `forwardedToKlcAt` once KLC handoff
 *      succeeds.
 *
 * Returns 200 OK on success. The Sanity record is the source of truth:
 * if the user sees a success state, the record exists.
 */

const CONSENT_TEXT = `I consent to KLC Group Canada Inc. (an FSRA-licensed Ontario life insurance advisory firm) and Webhub4u Inc. (operator of TopRates.ca) contacting me about the insurance products I've expressed interest in. I understand I can withdraw consent at any time. See the privacy policy for details.`;

const ALLOWED_COVERAGE = new Set([
  'term_life',
  'whole_universal_life',
  'no_medical',
  'super_visa',
  'critical_illness',
  'disability_income',
  'long_term_care',
  'segregated_funds',
  'annuities',
  'group_retirement',
  'not_sure',
]);

const ALLOWED_AGE_RANGES = new Set([
  '18-29',
  '30-44',
  '45-59',
  '60-69',
  '70+',
]);

const ALLOWED_CONTACT_TIMES = new Set([
  'weekday_mornings',
  'weekday_afternoons',
  'weekday_evenings',
  'weekends',
]);

const ALLOWED_PREFERRED_CONTACT = new Set(['email', 'phone']);

function isValidEmail(email: string): boolean {
  if (typeof email !== 'string' || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json(
      { ok: false, error: 'Referral system not configured' },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON' },
      { status: 400 },
    );
  }

  // Required identity fields
  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim().toLowerCase();
  const province = String(body.province ?? '').trim();
  const consented = body.consented === true;

  if (!name || name.length < 2) {
    return NextResponse.json(
      { ok: false, error: 'Name required' },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: 'Valid email required' },
      { status: 400 },
    );
  }
  if (!province) {
    return NextResponse.json(
      { ok: false, error: 'Province required' },
      { status: 400 },
    );
  }
  if (!consented) {
    return NextResponse.json(
      { ok: false, error: 'Consent is required to submit' },
      { status: 400 },
    );
  }

  // Phone — optional; if provided, must normalize
  const rawPhone = String(body.phone ?? '');
  const normalizedPhone = rawPhone ? normalizePhone(rawPhone) : null;
  if (rawPhone && !normalizedPhone) {
    return NextResponse.json(
      { ok: false, error: 'Please enter a valid 10-digit phone number' },
      { status: 400 },
    );
  }

  // Preferred contact — defaults to email
  const preferredContactRaw = String(body.preferredContact ?? 'email');
  if (!ALLOWED_PREFERRED_CONTACT.has(preferredContactRaw)) {
    return NextResponse.json(
      { ok: false, error: 'Invalid preferred contact' },
      { status: 400 },
    );
  }
  const preferredContact = preferredContactRaw as 'email' | 'phone';

  // If preferred contact is phone, phone is required
  if (preferredContact === 'phone' && !normalizedPhone) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Phone number is required if you prefer phone contact',
      },
      { status: 400 },
    );
  }

  // Optional enum fields
  const ageRange = String(body.ageRange ?? '');
  const coverageInterest = String(body.coverageInterest ?? '');
  if (ageRange && !ALLOWED_AGE_RANGES.has(ageRange)) {
    return NextResponse.json(
      { ok: false, error: 'Invalid age range' },
      { status: 400 },
    );
  }
  if (coverageInterest && !ALLOWED_COVERAGE.has(coverageInterest)) {
    return NextResponse.json(
      { ok: false, error: 'Invalid coverage interest' },
      { status: 400 },
    );
  }

  // contactTimes — array of allowed strings
  const rawContactTimes = Array.isArray(body.contactTimes)
    ? (body.contactTimes as unknown[]).map(String)
    : [];
  const contactTimes = rawContactTimes.filter((t) =>
    ALLOWED_CONTACT_TIMES.has(t),
  );

  // Submission metadata
  const ipAddress =
    request.headers
      .get('x-forwarded-for')
      ?.split(',')[0]
      ?.trim() ?? 'unknown';
  const userAgent = request.headers.get('user-agent') ?? '';
  const referer = request.headers.get('referer') ?? '';

  const submittedAt = new Date();
  const retentionUntil = new Date(submittedAt);
  retentionUntil.setMonth(retentionUntil.getMonth() + 24);

  const message = String(body.message ?? '').trim();

  // Step 1: Sanity write
  let docId: string;
  try {
    const doc = await writeClient.create({
      _type: 'lifeReferral',
      name,
      email,
      phone: normalizedPhone ?? undefined,
      preferredContact,
      province,
      ageRange: ageRange || undefined,
      coverageInterest: coverageInterest || 'not_sure',
      contactTimes,
      message: message || undefined,
      source: String(body.source ?? 'unknown'),
      subPillar: String(body.subPillar ?? 'general'),
      referer,
      consentText: CONSENT_TEXT,
      consentTimestamp: submittedAt.toISOString(),
      ipAddress,
      userAgent,
      retentionUntil: retentionUntil.toISOString(),
    });
    docId = doc._id;
  } catch (err) {
    console.error('[life-referral] Sanity write failed', err);
    return NextResponse.json(
      { ok: false, error: 'Failed to submit referral' },
      { status: 500 },
    );
  }

  // Step 2: KLC Group handoff (failure does NOT roll back the Sanity record;
  // the lead is preserved and can be manually forwarded if email fails).
  try {
    await sendKlcHandoff({
      referralId: docId,
      name,
      email,
      phone: normalizedPhone ?? undefined,
      preferredContact,
      province,
      ageRange: ageRange || 'unspecified',
      coverageInterest: coverageInterest || 'not_sure',
      contactTimes,
      message,
    });

    // Step 3: Mark forwarded
    await writeClient
      .patch(docId)
      .set({ forwardedToKlcAt: new Date().toISOString() })
      .commit();
  } catch (err) {
    console.error(
      `[life-referral] KLC handoff failed for ${docId} — lead preserved in Sanity for manual follow-up`,
      err,
    );
    // Still return ok to user — the lead is captured.
  }

  return NextResponse.json({ ok: true });
}
