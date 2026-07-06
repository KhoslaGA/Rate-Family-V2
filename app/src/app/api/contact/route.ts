import { NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity/writeClient';
import { notifyContactInquiry } from '@/lib/notify';

export const runtime = 'nodejs';

const ALLOWED_PRODUCTS = new Set([
  'life-insurance',
  'critical-illness',
  'disability',
  'travel-insurance',
  'auto-insurance',
  'home-insurance',
  'business-insurance',
  'mortgages',
  'credit-cards',
  'investing',
  'general',
]);

const KLC_LIVE_PRODUCTS = new Set([
  'life-insurance',
  'critical-illness',
  'disability',
  'travel-insurance',
]);

const FUTURE_PC_PRODUCTS = new Set([
  'auto-insurance',
  'home-insurance',
  'business-insurance',
]);

const RETENTION_DAYS_UNCONVERTED = 90;

function isValidEmail(email: string): boolean {
  if (typeof email !== 'string' || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function addDays(d: Date, days: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + days);
  return r;
}

function routeFor(product: string): string {
  if (KLC_LIVE_PRODUCTS.has(product)) return 'KLC Group Canada Inc.';
  if (FUTURE_PC_PRODUCTS.has(product)) return 'Future P&C list (KLC RIBO 2027)';
  if (product === 'mortgages') return 'MBLAA referral partner';
  return 'Editorial response';
}

export async function POST(request: Request) {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json(
      { ok: false, error: 'Storage not configured' },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { product, name, email, phone, postalCode, message, consent, consentText } =
    (body ?? {}) as {
      product?: string;
      name?: string;
      email?: string;
      phone?: string;
      postalCode?: string;
      message?: string;
      consent?: boolean;
      consentText?: string;
    };

  if (!consent) {
    return NextResponse.json({ ok: false, error: 'Consent required' }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: 'Valid email required' },
      { status: 400 },
    );
  }
  if (!name || !name.trim()) {
    return NextResponse.json({ ok: false, error: 'Name required' }, { status: 400 });
  }
  if (!product || !ALLOWED_PRODUCTS.has(product)) {
    return NextResponse.json({ ok: false, error: 'Invalid product' }, { status: 400 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  const submittedAt = new Date();
  const retentionUntil = addDays(submittedAt, RETENTION_DAYS_UNCONVERTED);

  const trimmedName = name.trim();
  const normalizedEmail = email.trim().toLowerCase();
  const trimmedPhone = phone?.trim() ?? '';
  const normalizedPostalCode = postalCode?.trim().toUpperCase() ?? '';
  const trimmedMessage = message?.trim() ?? '';
  const routedTo = routeFor(product);

  try {
    await writeClient.create({
      _type: 'contactInquiry',
      product,
      name: trimmedName,
      email: normalizedEmail,
      phone: trimmedPhone,
      postalCode: normalizedPostalCode,
      message: trimmedMessage,
      consent: true,
      consentText: consentText ?? '',
      routedTo,
      ipAddress: ip,
      userAgent: request.headers.get('user-agent') ?? undefined,
      submittedAt: submittedAt.toISOString(),
      retentionUntil: retentionUntil.toISOString(),
      status: 'new',
    });
  } catch (err) {
    console.error('Contact inquiry failed', err);
    return NextResponse.json(
      { ok: false, error: 'Failed to submit' },
      { status: 500 },
    );
  }

  // Fire-and-forget notification email. Failures are logged but do not
  // affect the user-facing response — the inquiry is already persisted.
  await notifyContactInquiry({
    product,
    name: trimmedName,
    email: normalizedEmail,
    phone: trimmedPhone,
    postalCode: normalizedPostalCode,
    message: trimmedMessage,
    routedTo,
    submittedAt: submittedAt.toISOString(),
    ipAddress: ip,
  });

  return NextResponse.json({ ok: true });
}
