/**
 * Headless life quoter engine (QUOTER-CONTRACT.md).
 *
 * Deterministic: same input → same output, always. Seeded FNV-1a hashing,
 * never Math.random — mirrors the @ratefamily/mocks discipline so CI and
 * design review are reproducible. NUMBERS ARE ILLUSTRATIVE; the real
 * CompuLife adapter replaces `quoteLife` behind the same shapes.
 *
 * Consumed by:
 *   - /api/mock/quote/results (the mock API the skins fetch from)
 *   - any server component that wants rates without an HTTP hop
 */

export type LifeTerm = '10' | '20' | '30' | 'perm';
export type ProvinceCode =
  | 'ON' | 'QC' | 'BC' | 'AB' | 'MB' | 'SK' | 'NS' | 'NB' | 'NL' | 'PE';

export interface LifeQuoteInput {
  coverage: number;      // face amount, dollars
  age: number;           // 18–80
  female: boolean;
  smoker: boolean;
  term: LifeTerm;
  prov?: ProvinceCode;   // reserved for provincial spreads; ON default
}

export interface CarrierQuote {
  carrier: string;
  product: string;
  monthly: number;
  declined: false;
  highlights: string[];
}

export interface CarrierDecline {
  carrier: string;
  declined: true;
  reason: string;
}

export type LifeQuoteRow = CarrierQuote | CarrierDecline;

export interface LifeQuoteResults {
  quotes: LifeQuoteRow[];       // offers sorted asc by monthly; declines appended
  best: CarrierQuote | null;    // null when everything declined / empty
  summary: { coverage: number; age: number; term: LifeTerm; count: number };
}

/* ── deterministic seeding (FNV-1a) — no Math.random anywhere ──────────── */
function seededHash(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}
function seededUnit(input: string): number {
  return seededHash(input) / 0xffffffff;
}

/* ── carrier panel (illustrative — fictional spread factors) ───────────── */
const CARRIERS: [string, number][] = [
  ['Canada Life', 1.0], ['Sun Life', 1.03], ['Manulife', 1.02], ['iA Financial', 0.97],
  ['Empire Life', 0.99], ['RBC Insurance', 1.05], ['BMO Insurance', 1.04], ['Desjardins', 0.98],
  ['Equitable Life', 0.96], ['Foresters', 1.01], ['Assumption Life', 0.95], ['Wawanesa Life', 1.02],
  ['Beneva', 0.99], ['ivari', 0.97], ['Humania', 0.94], ['UV Insurance', 0.96],
  ['Serenia Life', 1.0], ['La Capitale', 0.98], ['SSQ', 1.01], ['Co-operators', 1.03], ['Primerica', 1.06],
];

/** Carriers with tighter appetite — decline the edges of the box so the
 * skin's decline rendering has something honest to render. Explicit list,
 * placeholder data — never treat as real carrier appetite. */
const CONSERVATIVE = new Set(['RBC Insurance', 'Co-operators', 'Primerica']);

const HIGHLIGHT_POOL = [
  'Convertible to permanent',
  'No medical up to $500k',
  'CI rider available',
  'Renewable to age 85',
  'Bundles with disability cover',
  'Preferred rates possible',
];

function baseRatePer1000(age: number, term: LifeTerm, smoker: boolean, female: boolean): number {
  const t = term === 'perm' ? 60 : Number(term);
  let r = 0.55 + Math.pow(Math.max(age - 25, 0), 1.55) * 0.0016 + t * 0.006;
  if (term === 'perm') r *= 5.2;
  if (smoker) r *= 2.35;
  if (female) r *= 0.86;
  return r;
}

function declineReason(input: LifeQuoteInput, carrier: string): string | null {
  // edges of the illustrative box: very high age + smoker, or perm at max coverage
  if (CONSERVATIVE.has(carrier)) {
    if (input.smoker && input.age >= 60) {
      return `${carrier} doesn’t offer this product for smokers over 60 without individual review. A licensed advisor can look at close alternatives.`;
    }
    if (input.term === 'perm' && input.coverage >= 2_000_000) {
      return `${carrier} refers permanent coverage at this amount to manual underwriting rather than quoting it automatically.`;
    }
  }
  return null;
}

export function quoteLife(input: LifeQuoteInput): LifeQuoteResults {
  const base = baseRatePer1000(input.age, input.term, input.smoker, input.female);
  const productLabel = input.term === 'perm' ? 'Whole life' : `Term ${input.term}`;

  const offers: CarrierQuote[] = [];
  const declines: CarrierDecline[] = [];

  for (const [carrier, factor] of CARRIERS) {
    const reason = declineReason(input, carrier);
    if (reason) {
      declines.push({ carrier, declined: true, reason });
      continue;
    }
    const seed = `life:${carrier}:${input.age}:${input.term}:${input.coverage}:${input.smoker}:${input.female}`;
    const jitter = 0.985 + seededUnit(seed) * 0.03; // ±1.5% deterministic spread
    const annual = base * (input.coverage / 1000) * factor * jitter;
    const monthly = Math.round(Math.max(9, annual / 12) * 100) / 100;

    // two deterministic highlights per carrier
    const h1 = HIGHLIGHT_POOL[seededHash(seed + ':h1') % HIGHLIGHT_POOL.length];
    let h2 = HIGHLIGHT_POOL[seededHash(seed + ':h2') % HIGHLIGHT_POOL.length];
    if (h2 === h1) h2 = HIGHLIGHT_POOL[(seededHash(seed + ':h2') + 1) % HIGHLIGHT_POOL.length];

    offers.push({ carrier, product: productLabel, monthly, declined: false, highlights: [h1, h2] });
  }

  offers.sort((a, b) => a.monthly - b.monthly);

  return {
    quotes: [...offers, ...declines],
    best: offers[0] ?? null,
    summary: { coverage: input.coverage, age: input.age, term: input.term, count: offers.length },
  };
}

/** Deterministic human-shareable reference for a lead / handoff request. */
export function leadReference(seedParts: string[]): string {
  const n = seededHash(seedParts.join('|')) % 1_000_000;
  return 'LR-' + String(n).padStart(6, '0');
}
