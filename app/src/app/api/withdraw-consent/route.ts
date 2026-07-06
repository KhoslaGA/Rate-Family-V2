import { NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity/writeClient';

export const runtime = 'nodejs';

/**
 * /api/withdraw-consent — soft-delete lifeReferral records by email.
 *
 * Sets withdrawnAt timestamp on all unwithdrawn records matching the
 * supplied email. Does NOT delete the records — CASL / PIPEDA require
 * proof-of-consent and proof-of-withdrawal retention. Phase 2 will add
 * token-based confirmation; Phase 1 is email-only (errs in the user's
 * favor, which is the right side to err on).
 */
export async function POST(request: Request) {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json(
      { ok: false, error: 'Not configured' },
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

  const email = String(body.email ?? '').trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Valid email required' },
      { status: 400 },
    );
  }

  try {
    const records = await writeClient.fetch<Array<{ _id: string }>>(
      `*[_type == "lifeReferral" && email == $email && !defined(withdrawnAt)]`,
      { email },
    );

    const now = new Date().toISOString();
    await Promise.all(
      records.map((r) =>
        writeClient.patch(r._id).set({ withdrawnAt: now }).commit(),
      ),
    );

    return NextResponse.json({ ok: true, recordsUpdated: records.length });
  } catch (err) {
    console.error('[withdraw-consent] failed', err);
    return NextResponse.json(
      { ok: false, error: 'Failed to withdraw' },
      { status: 500 },
    );
  }
}
