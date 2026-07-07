import { Injectable } from '@nestjs/common';
import {
  CarrierAdapter,
  LifeQuoteRequest,
  LifeQuoteResponse,
  AutoQuoteRequest,
  AutoQuoteResponse,
  HealthQuoteRequest,
  HealthQuoteResponse,
  MortgageQuoteRequest,
  MortgageQuoteResponse,
  MortgageLenderRow,
  CarrierQuote,
  CarrierDecline,
  AutoCarrierRow,
  HealthCarrierRow,
  seededHash,
  seededUnit,
} from '@ratefamily/contracts';

/**
 * The MockCarrierAdapter. Implements CarrierAdapter with deterministic
 * seeded math — the exact same values the frontend engine produces, so
 * results are stable whether the quote is computed in the browser or here.
 *
 * This is the seam: a real CompuLifeAdapter / ApolloAdapter implements the
 * same interface post-gates. The quotes module depends on CarrierAdapter,
 * never on this class directly, so the swap touches one provider binding.
 */

const LIFE_CARRIERS: [string, number][] = [
  ['Canada Life', 1.0], ['Sun Life', 1.03], ['Manulife', 1.02], ['iA Financial', 0.97],
  ['Empire Life', 0.99], ['RBC Insurance', 1.05], ['BMO Insurance', 1.04], ['Desjardins', 0.98],
  ['Equitable Life', 0.96], ['Foresters', 1.01], ['Assumption Life', 0.95], ['Wawanesa Life', 1.02],
  ['Beneva', 0.99], ['ivari', 0.97], ['Humania', 0.94], ['UV Insurance', 0.96],
  ['Serenia Life', 1.0], ['La Capitale', 0.98], ['SSQ', 1.01], ['Co-operators', 1.03], ['Primerica', 1.06],
];
const LIFE_CONSERVATIVE = new Set(['RBC Insurance', 'Co-operators', 'Primerica']);
const LIFE_HIGHLIGHTS = ['Convertible to permanent', 'No medical up to $500k', 'CI rider available', 'Renewable to age 85', 'Bundles with disability cover', 'Preferred rates possible'];

const AUTO_CARRIERS = ['Aviva', 'Intact', 'Definity', 'Travelers', 'CAA', 'Wawanesa', 'Pembridge', 'Co-operators'];
const AUTO_CONSERVATIVE = new Set(['Aviva', 'Travelers', 'Co-operators']);

const HEALTH_CARRIERS = ['GMS', 'Manulife', '21st Century', 'Ingle', 'TuGo', 'Destination'];
const HEALTH_PREX_EXCLUDE = new Set(['Manulife', 'TuGo', 'Destination']);

/** Mortgage lender panel: deterministic per-lender spread off a base rate.
 * Explicit placeholder data — never treat as real lender pricing. */
const MORTGAGE_LENDERS: { lender: string; channel: MortgageLenderRow['channel']; off: number }[] = [
  { lender: 'Nesto', channel: 'Digital', off: 0.0 },
  { lender: 'MCAP', channel: 'Broker', off: 0.1 },
  { lender: 'First National', channel: 'Broker', off: 0.13 },
  { lender: 'TD Bank', channel: 'Big Six', off: 0.7 },
  { lender: 'RBC', channel: 'Big Six', off: 0.75 },
  { lender: 'CIBC', channel: 'Big Six', off: 0.72 },
];
// base rate per (term-rateType), illustrative
const MORTGAGE_BASE: Record<string, number> = {
  '3-fixed': 4.24, '5-fixed': 4.09, '10-fixed': 5.29,
  '3-variable': 5.2, '5-variable': 4.95, '10-variable': 6.1,
};

@Injectable()
export class MockCarrierAdapter implements CarrierAdapter {
  async quoteLife(req: LifeQuoteRequest): Promise<LifeQuoteResponse> {
    const t = req.term === 'perm' ? 60 : Number(req.term);
    let base = 0.55 + Math.pow(Math.max(req.age - 25, 0), 1.55) * 0.0016 + t * 0.006;
    if (req.term === 'perm') base *= 5.2;
    if (req.smoker) base *= 2.35;
    if (req.female) base *= 0.86;

    const product = req.term === 'perm' ? 'Whole life' : `Term ${req.term}`;
    const offers: CarrierQuote[] = [];
    const declines: CarrierDecline[] = [];

    for (const [carrier, factor] of LIFE_CARRIERS) {
      if (LIFE_CONSERVATIVE.has(carrier)) {
        if (req.smoker && req.age >= 60) {
          declines.push({ carrier, declined: true, reason: `${carrier} doesn’t offer this product for smokers over 60 without individual review. A licensed advisor can look at close alternatives.` });
          continue;
        }
        if (req.term === 'perm' && req.coverage >= 2_000_000) {
          declines.push({ carrier, declined: true, reason: `${carrier} refers permanent coverage at this amount to manual underwriting rather than quoting it automatically.` });
          continue;
        }
      }
      const seed = `life:${carrier}:${req.age}:${req.term}:${req.coverage}:${req.smoker}:${req.female}`;
      const jitter = 0.985 + seededUnit(seed) * 0.03;
      const monthly = Math.round(Math.max(9, (base * (req.coverage / 1000) * factor * jitter) / 12) * 100) / 100;
      const h1 = LIFE_HIGHLIGHTS[seededHash(seed + ':h1') % LIFE_HIGHLIGHTS.length];
      let h2 = LIFE_HIGHLIGHTS[seededHash(seed + ':h2') % LIFE_HIGHLIGHTS.length];
      if (h2 === h1) h2 = LIFE_HIGHLIGHTS[(seededHash(seed + ':h2') + 1) % LIFE_HIGHLIGHTS.length];
      offers.push({ carrier, product, monthly, declined: false, highlights: [h1, h2] });
    }

    offers.sort((a, b) => a.monthly - b.monthly);
    return {
      mock: true,
      rates_indicative_only: true,
      vertical: 'life',
      quotes: [...offers, ...declines],
      best: offers[0] ?? null,
      summary: { coverage: req.coverage, age: req.age, term: req.term, count: offers.length },
    };
  }

  async quoteAuto(req: AutoQuoteRequest): Promise<AutoQuoteResponse> {
    const highRisk = req.atFaultClaims >= 2 || req.driverAge < 21;
    const rows: AutoCarrierRow[] = AUTO_CARRIERS.map((carrier) => {
      if (highRisk && AUTO_CONSERVATIVE.has(carrier)) {
        return { carrier, declined: true, reason: 'Risk profile exceeds this carrier’s automatic appetite. A licensed broker can place it manually.' };
      }
      const seed = `auto:${carrier}:${req.postalFsa}:${req.driverAge}:${req.vehicleYear}:${req.atFaultClaims}`;
      let annual = 1100 + (seededHash(seed) % 700);
      if (req.driverAge < 25) annual *= 1.5;
      annual *= 1 + req.atFaultClaims * 0.35;
      const monthly = Math.round((annual / 12) * 100) / 100;
      return { carrier, declined: false, annual: Math.round(annual), monthly, highlights: ['Winter-tire discount available', 'Accident forgiveness optional'] };
    });
    const quoted = rows.filter((r) => !r.declined).length;
    const panelStatus = quoted === 0 ? 'no_markets' : quoted === AUTO_CARRIERS.length ? 'full' : 'partial';
    return { mock: true, rates_indicative_only: true, vertical: 'auto', quotes: rows, panelStatus };
  }

  async quoteHealth(req: HealthQuoteRequest): Promise<HealthQuoteResponse> {
    const rows: HealthCarrierRow[] = HEALTH_CARRIERS.map((carrier) => {
      if (req.branch === 'super_visa' && req.preExisting && HEALTH_PREX_EXCLUDE.has(carrier)) {
        return { carrier, eligible: false, ineligibleReason: 'Pre-existing condition does not meet this carrier’s stability requirement.' };
      }
      const seed = `health:${carrier}:${req.branch}:${req.applicantAge}:${req.coverageAmount ?? 0}`;
      const premium = Math.round((120 + (seededHash(seed) % 260) + Math.max(req.applicantAge - 60, 0) * 12));
      return { carrier, eligible: true, premium, highlights: ['$100k emergency medical', 'Direct hospital billing'] };
    });
    return { mock: true, rates_indicative_only: true, vertical: 'health', quotes: rows };
  }

  async quoteMortgage(req: MortgageQuoteRequest): Promise<MortgageQuoteResponse> {
    const price = Math.max(req.propertyPrice, 0);
    const down = Math.max(req.downPayment, 0);
    const loan = Math.max(price - down, 0);
    const ltv = price > 0 ? Math.round((loan / price) * 100) : 0;
    const insured = ltv > 80;

    // CMHC-style premium tiers (illustrative): higher LTV → higher premium
    const premiumRate = !insured ? 0 : ltv >= 95 ? 0.04 : ltv >= 90 ? 0.031 : 0.028;
    const insurancePremium = Math.round(loan * premiumRate);
    const principal = loan + insurancePremium;

    const base = MORTGAGE_BASE[`${req.term}-${req.rateType}`] ?? 5.0;
    // B-20 stress test: qualify at the greater of contract+2% or 5.25%
    const stressTestRatePct = Math.max(base + 2, 5.25);

    const amortMonths = Math.max(req.amortizationYears, 5) * 12;

    const rows: MortgageLenderRow[] = MORTGAGE_LENDERS.map(({ lender, channel, off }) => {
      // deterministic micro-jitter per lender/term so panels aren't identical
      const seed = `mortgage:${lender}:${req.term}:${req.rateType}:${loan}`;
      const jitter = (seededHash(seed) % 7) / 100; // 0–0.06
      const ratePct = Math.round((base + off + jitter) * 100) / 100;
      const monthlyPayment = amortizedPayment(principal, ratePct, amortMonths);
      return { lender, channel, ratePct, monthlyPayment };
    });

    rows.sort((a, b) => a.ratePct - b.ratePct);

    return {
      mock: true,
      rates_indicative_only: true,
      vertical: 'mortgage',
      loanAmount: loan,
      ltvPct: ltv,
      insured,
      insurancePremium,
      principal,
      stressTestRatePct: Math.round(stressTestRatePct * 100) / 100,
      quotes: rows,
      best: rows[0] ?? null,
    };
  }
}

/** Standard amortized monthly payment. Canadian fixed mortgages compound
 * semi-annually, but for an illustrative mock we use simple monthly
 * compounding — clearly labelled indicative, not a real amortization. */
function amortizedPayment(principal: number, annualRatePct: number, months: number): number {
  const r = annualRatePct / 100 / 12;
  if (r === 0) return Math.round(principal / months);
  const pmt = (principal * r) / (1 - Math.pow(1 + r, -months));
  return Math.round(pmt);
}
