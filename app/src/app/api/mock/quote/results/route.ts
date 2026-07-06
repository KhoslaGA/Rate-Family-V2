import { NextRequest, NextResponse } from 'next/server';
import { quoteLife, LifeQuoteInput, LifeTerm } from '@/lib/quoter/engine';

export const runtime = 'nodejs';

/**
 * POST /api/mock/quote/results — the mock rating endpoint the quoter skins
 * fetch from. Deterministic (seeded engine), scenario-switchable, and every
 * payload carries `mock: true` + `rates_indicative_only: true` so a mock
 * response rendering anywhere it shouldn't is detectable.
 *
 * Scenarios (X-Mock-Scenario header or ?scenario=):
 *   happy-path (default) · empty · error-500 · slow-3s · timeout
 *
 * Swap-to-live contract: the real CompuLife-backed route serves the same
 * request/response shapes at a different URL — the skin changes ONE fetch
 * URL, nothing else. (QUOTER-CONTRACT.md)
 */

const VALID_TERMS = new Set(['10', '20', '30', 'perm']);

function scenarioOf(req: NextRequest): string {
  return (
    req.headers.get('x-mock-scenario') ??
    req.nextUrl.searchParams.get('scenario') ??
    'happy-path'
  );
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function POST(req: NextRequest) {
  const scenario = scenarioOf(req);

  if (scenario === 'timeout') {
    // hold the connection past any sane client timeout
    await sleep(120_000);
  }
  if (scenario === 'error-500') {
    return NextResponse.json(
      { ok: false, mock: true, error: 'MOCK_INJECTED_500', message: 'Scenario-forced rating error.' },
      { status: 500 },
    );
  }
  if (scenario === 'slow-3s') await sleep(3000);

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, mock: true, error: 'Invalid JSON' }, { status: 400 });
  }

  const coverage = Number(body.coverage);
  const age = Number(body.age);
  const female = body.female === true;
  const smoker = body.smoker === true;
  const term = String(body.term ?? '');

  if (!Number.isFinite(coverage) || coverage < 25_000 || coverage > 10_000_000) {
    return NextResponse.json({ ok: false, mock: true, error: 'coverage must be 25,000–10,000,000' }, { status: 400 });
  }
  if (!Number.isFinite(age) || age < 18 || age > 80) {
    return NextResponse.json({ ok: false, mock: true, error: 'age must be 18–80' }, { status: 400 });
  }
  if (!VALID_TERMS.has(term)) {
    return NextResponse.json({ ok: false, mock: true, error: 'term must be 10 | 20 | 30 | perm' }, { status: 400 });
  }

  const input: LifeQuoteInput = { coverage, age, female, smoker, term: term as LifeTerm };

  // realistic panel latency so the skin's skeleton/racing states are honest
  await sleep(700);

  if (scenario === 'empty') {
    return NextResponse.json({
      ok: true,
      mock: true,
      rates_indicative_only: true,
      scenario,
      quotes: [],
      best: null,
      summary: { coverage, age, term, count: 0 },
    });
  }

  const results = quoteLife(input);
  return NextResponse.json({
    ok: true,
    mock: true,
    rates_indicative_only: true,
    scenario,
    ...results,
  });
}
