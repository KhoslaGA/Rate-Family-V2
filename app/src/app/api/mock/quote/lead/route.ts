import { NextRequest, NextResponse } from 'next/server';
import { normalizePhone } from '@/lib/phone';
import { leadReference } from '@/lib/quoter/engine';

export const runtime = 'nodejs';

/**
 * POST /api/mock/quote/lead — mock twin of /api/life-referral.
 *
 * VALIDATION IS A 1:1 MIRROR of the real route (name/email/province/
 * consented required; phone optional unless preferredContact==='phone';
 * same error messages, same status codes). The quoter's contact-handoff
 * step is written against THIS contract, so pointing it at the real route
 * later is a one-line URL change — the request body doesn't move.
 *
 * Differences from the real route, by design:
 *   - writes nothing (no Sanity, no Resend, no KLC email)
 *   - returns `mock: true` + a deterministic reference number
 */

const ALLOWED_PREFERRED_CONTACT = new Set(['email', 'phone']);
const ALLOWED_CONTACT_TIMES = new Set([
  'weekday_mornings',
  'weekday_afternoons',
  'weekday_evenings',
  'weekends',
]);

function isValidEmail(email: string): boolean {
  if (typeof email !== 'string' || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim().toLowerCase();
  const province = String(body.province ?? '').trim();
  const consented = body.consented === true;

  if (!name || name.length < 2) {
    return NextResponse.json({ ok: false, error: 'Name required' }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Valid email required' }, { status: 400 });
  }
  if (!province) {
    return NextResponse.json({ ok: false, error: 'Province required' }, { status: 400 });
  }
  if (!consented) {
    return NextResponse.json({ ok: false, error: 'Consent is required to submit' }, { status: 400 });
  }

  const rawPhone = String(body.phone ?? '');
  const normalizedPhone = rawPhone ? normalizePhone(rawPhone) : null;
  if (rawPhone && !normalizedPhone) {
    return NextResponse.json(
      { ok: false, error: 'Please enter a valid 10-digit phone number' },
      { status: 400 },
    );
  }

  const preferredContactRaw = String(body.preferredContact ?? 'email');
  if (!ALLOWED_PREFERRED_CONTACT.has(preferredContactRaw)) {
    return NextResponse.json({ ok: false, error: 'Invalid preferred contact' }, { status: 400 });
  }
  if (preferredContactRaw === 'phone' && !normalizedPhone) {
    return NextResponse.json(
      { ok: false, error: 'Phone number is required if you prefer phone contact' },
      { status: 400 },
    );
  }

  // optional best-time enum — same values the real route accepts
  const contactTimeRaw = String(body.contactTime ?? '');
  if (contactTimeRaw && !ALLOWED_CONTACT_TIMES.has(contactTimeRaw)) {
    return NextResponse.json({ ok: false, error: 'Invalid contact time' }, { status: 400 });
  }

  // deterministic reference so screenshots and repeat tests match
  const reference = leadReference([name, email, String(body.carrier ?? ''), String(body.monthly ?? '')]);

  return NextResponse.json({
    ok: true,
    mock: true,
    reference,
    received: {
      name,
      email,
      province,
      phone: normalizedPhone,
      preferredContact: preferredContactRaw,
      contactTime: contactTimeRaw || null,
      quoteContext: {
        carrier: body.carrier ?? null,
        product: body.product ?? null,
        monthly: body.monthly ?? null,
        coverage: body.coverage ?? null,
      },
    },
  });
}
