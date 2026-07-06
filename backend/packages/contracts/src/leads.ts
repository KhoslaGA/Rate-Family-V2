import { Vertical } from './quotes';

/**
 * Leads. The wording shown to the user IS the wording stored — CASL
 * evidence is the consent string itself, captured verbatim on the record.
 */
export interface LeadRequest {
  vertical: Vertical | 'cards';
  name: string;
  email: string;
  province: string;
  phone?: string;
  preferredContact?: 'email' | 'phone';
  contactTime?:
    | 'weekday_mornings'
    | 'weekday_afternoons'
    | 'weekday_evenings'
    | 'weekends';
  consented: boolean;
  consentText: string;            // stored verbatim
  quoteContext?: Record<string, unknown>;
}

export interface LeadResponse {
  mock: true;
  ok: boolean;
  reference: string;              // LR-######, deterministic
  error?: string;
}

/** Impression batching — card lists post what was seen, for EPC math. */
export interface ImpressionBatch {
  tenant: string;
  cardIds: string[];
  at: string;
}

/** Redirector attribution: /go/:cardId logs a click, returns the affiliate
 * URL (or an unmonetized fallback). The subid IS the click id — the
 * postback reconciliation key. */
export interface RedirectResult {
  cardId: string;
  clickId: string;                // = subid
  targetUrl: string;
  monetizable: boolean;
}

/** Match engine — a short quiz maps answers to a ranked card set. */
export interface MatchRequest {
  spendCategories: string[];
  annualSpend: number;
  wantsNoFee: boolean;
  newcomer: boolean;
}
export interface MatchResponse {
  mock: true;
  rankedCardIds: string[];
  rationale: string;
}
