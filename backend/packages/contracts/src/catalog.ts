/**
 * Catalog (credit-card) contracts. Both the API and the frontend import
 * these — a card figure that renders in the UI is exactly this shape, and
 * every offer carries its own verification provenance (Bill C-59: no figure
 * without a source + date).
 */

export type TenantSlug = 'toprates' | 'liferate' | 'termrates' | 'healthrate';

export type CardCategory =
  | 'cashback'
  | 'travel'
  | 'balance_transfer'
  | 'no_fee'
  | 'newcomer'
  | 'student'
  | 'business'
  | 'secured';

export type AffiliateNetwork = 'fintel' | 'cj' | 'direct' | 'none';

/** One append-only offer version. Never mutated in place — a new row
 * supersedes the prior one, so the history is auditable. */
export interface CardOffer {
  offerId: string;
  cardId: string;
  annualFee: number;
  rewardsRateHeadline: string;   // e.g. "4% on gas & groceries"
  welcomeOffer: string;          // e.g. "$200 after $2,000 in 3 months"
  purchaseAprPct: number;
  balanceTransferAprPct: number | null;
  verifiedAt: string;            // ISO — the date this figure was confirmed
  sourceUrl: string;             // provenance; DEV-FIXTURE:// for seed data
  needsVerification: boolean;    // freshness differ flips this; humans clear it
}

export interface Card {
  cardId: string;
  issuerSlug: string;
  issuerName: string;
  name: string;
  category: CardCategory;
  network: AffiliateNetwork;
  imageUrl: string | null;
  starRating: number;            // 0–5, editorial
  ourPickFor: string | null;     // "Our pick for cashback" — needs methodology link
  currentOffer: CardOffer;
}

export interface CardListQuery {
  category?: CardCategory;
  issuer?: string;
  network?: AffiliateNetwork;
  limit?: number;
}

export interface CardListResponse {
  mock: true;                    // V2 rule: everything is mock, and says so
  tenant: TenantSlug;
  count: number;
  cards: Card[];
}

/** Compare a small set of cards side by side. */
export interface CompareResponse {
  mock: true;
  cards: Card[];
  rows: { key: string; label: string; values: (string | number | null)[] }[];
}

/** Award + methodology (Bill C-59 substantiation as a hard FK). */
export interface Award {
  awardId: string;
  cardId: string;
  label: string;                 // "Best cashback card 2026"
  methodologyVersionId: string;  // REQUIRED — no award without methodology
  methodologyUrl: string;
  awardedAt: string;
}
