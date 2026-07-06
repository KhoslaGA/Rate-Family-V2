import { NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity/writeClient';
import { notifyWaitlistSignup } from '@/lib/notify';

export const runtime = 'nodejs';

const ALLOWED_SOURCES = new Set([
  'home_hero',
  'home_bottom_cta',
  'coming_soon',
  'other',
]);
const ALLOWED_SCOPES = new Set([
  'waitlist',
  'waitlist_insurance',
  'waitlist_full',
]);

const CURRENT_CONSENT_TEXT =
  'I am joining the TopRates.ca waitlist. Webhub4u Inc. will email me when the platform launches and may send launch updates about Canadian insurance reform and the platform itself. I can unsubscribe at any time.';

/** Default retention: 24 months from signup (PIPEDA principle 5). */
const RETENTION_MONTHS = 24;

function isValidEmail(email: string): boolean {
  if (typeof email !== 'string' || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function addMonths(d: Date, months: number): Date {
  const r = new Date(d);
  r.setMonth(r.getMonth() + months);
  return r;
}

export async function POST(request: Request) {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json(
      { ok: false, error: 'Waitlist storage not configured' },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { email, source, scope } = (body ?? {}) as {
    email?: string;
    source?: string;
    scope?: string;
  };

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: 'Valid email required' },
      { status: 400 },
    );
  }

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedSource = ALLOWED_SOURCES.has(source ?? '') ? source : 'other';
  const normalizedScope = ALLOWED_SCOPES.has(scope ?? '') ? scope : 'waitlist';

  // Capture IP for consent record (PIPEDA + CASL audit trail).
  const forwardedFor = request.headers.get('x-forwarded-for');
  const ipAddress = forwardedFor?.split(',')[0]?.trim() ?? 'unknown';

  const submittedAt = new Date();
  const retentionUntil = addMonths(submittedAt, RETENTION_MONTHS);

  const referer = request.headers.get('referer') ?? undefined;

  try {
    await writeClient.create({
      _type: 'waitlistEntry',
      email: normalizedEmail,
      source: normalizedSource,
      consentText: CURRENT_CONSENT_TEXT,
      consentScope: normalizedScope,
      consentMethod: 'express_opt_in',
      ipAddress,
      userAgent: request.headers.get('user-agent') ?? undefined,
      referer,
      submittedAt: submittedAt.toISOString(),
      retentionUntil: retentionUntil.toISOString(),
    });
  } catch (err) {
    console.error('Waitlist create failed', err);
    return NextResponse.json(
      { ok: false, error: 'Failed to save entry' },
      { status: 500 },
    );
  }

  // Fire-and-forget notification email. Failures are logged but do not
  // affect the user-facing response — the entry is already persisted.
  await notifyWaitlistSignup({
    email: normalizedEmail,
    source: normalizedSource ?? 'other',
    scope: normalizedScope ?? 'waitlist',
    submittedAt: submittedAt.toISOString(),
    ipAddress,
    referer,
  });

  return NextResponse.json({ ok: true });
}
