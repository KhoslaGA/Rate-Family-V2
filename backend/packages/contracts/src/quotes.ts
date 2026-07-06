/**
 * Quote contracts. The life shapes match QUOTER-CONTRACT.md and the
 * frontend engine exactly, so the LifeRate quoter can point at the real
 * /v1/quotes/life route with a URL change and nothing else. Auto/home/
 * health extend the same skeleton.
 *
 * Everything here is served by the MockCarrierAdapter today. The adapter
 * interface (never these types) is what swaps to CompuLife / APOLLO / APRIL
 * after the licensing gates — the frontend never sees the difference.
 */

export type Vertical = 'life' | 'auto' | 'home' | 'health';

export type LifeTerm = '10' | '20' | '30' | 'perm';
export type ProvinceCode =
  | 'ON' | 'QC' | 'BC' | 'AB' | 'MB' | 'SK' | 'NS' | 'NB' | 'NL' | 'PE';

/* ── LIFE ──────────────────────────────────────────────────────────────── */
export interface LifeQuoteRequest {
  coverage: number;
  age: number;
  female: boolean;
  smoker: boolean;
  term: LifeTerm;
  prov?: ProvinceCode;
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
export type QuoteRow = CarrierQuote | CarrierDecline;

export interface LifeQuoteResponse {
  mock: true;
  rates_indicative_only: true;
  vertical: 'life';
  quotes: QuoteRow[];                 // offers asc, declines appended
  best: CarrierQuote | null;
  summary: { coverage: number; age: number; term: LifeTerm; count: number };
}

/* ── AUTO ──────────────────────────────────────────────────────────────── */
export interface AutoQuoteRequest {
  postalFsa: string;
  driverAge: number;
  atFaultClaims: number;
  vehicleYear: number;
  prov?: ProvinceCode;
}
export interface AutoCarrierRow {
  carrier: string;
  declined: boolean;
  monthly?: number;
  annual?: number;
  reason?: string;
  highlights?: string[];
}
export interface AutoQuoteResponse {
  mock: true;
  rates_indicative_only: true;
  vertical: 'auto';
  quotes: AutoCarrierRow[];
  panelStatus: 'full' | 'partial' | 'no_markets';
}

/* ── HEALTH / travel / super visa ──────────────────────────────────────── */
export interface HealthQuoteRequest {
  branch: 'health_dental' | 'travel' | 'super_visa';
  applicantAge: number;
  coverageAmount?: number;
  preExisting?: boolean;
}
export interface HealthCarrierRow {
  carrier: string;
  eligible: boolean;
  premium?: number;
  ineligibleReason?: string;
  highlights?: string[];
}
export interface HealthQuoteResponse {
  mock: true;
  rates_indicative_only: true;
  vertical: 'health';
  quotes: HealthCarrierRow[];
}

/**
 * Adapter seam. MockCarrierAdapter implements this now; a real carrier
 * adapter implements the same interface later. The API depends on the
 * interface, never on a concrete adapter.
 */
export interface CarrierAdapter {
  quoteLife(req: LifeQuoteRequest): Promise<LifeQuoteResponse>;
  quoteAuto(req: AutoQuoteRequest): Promise<AutoQuoteResponse>;
  quoteHealth(req: HealthQuoteRequest): Promise<HealthQuoteResponse>;
}
