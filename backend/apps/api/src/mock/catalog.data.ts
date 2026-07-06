import { Card, CardCategory, AffiliateNetwork } from '@ratefamily/contracts';

/**
 * Mock catalog: 12 DEV-FIXTURE cards. Deterministic, hand-authored figures.
 *
 * Every offer's sourceUrl is a `DEV-FIXTURE://` URI — this is deliberate:
 * fixture data can NEVER be mistaken for a verified real offer, because the
 * production verification pipeline only trusts https:// sources with a real
 * verifiedAt. A fixture rendering in production is detectable by its scheme.
 */

interface Seed {
  cardId: string;
  issuerSlug: string;
  issuerName: string;
  name: string;
  category: CardCategory;
  network: AffiliateNetwork;
  starRating: number;
  ourPickFor: string | null;
  annualFee: number;
  rewardsRateHeadline: string;
  welcomeOffer: string;
  purchaseAprPct: number;
  balanceTransferAprPct: number | null;
}

const SEEDS: Seed[] = [
  { cardId: 'scotia-momentum-visa-infinite', issuerSlug: 'scotiabank', issuerName: 'Scotiabank', name: 'Momentum Visa Infinite', category: 'cashback', network: 'fintel', starRating: 4.6, ourPickFor: 'everyday cashback', annualFee: 120, rewardsRateHeadline: '4% on groceries & recurring bills', welcomeOffer: '10% cashback for 3 months (up to $2,000 spend)', purchaseAprPct: 20.99, balanceTransferAprPct: 22.99 },
  { cardId: 'amex-cobalt', issuerSlug: 'amex', issuerName: 'American Express', name: 'Cobalt Card', category: 'travel', network: 'cj', starRating: 4.7, ourPickFor: 'dining & travel points', annualFee: 155.88, rewardsRateHeadline: '5x points on eats & drinks', welcomeOffer: 'Up to 15,000 points in the first year', purchaseAprPct: 21.99, balanceTransferAprPct: null },
  { cardId: 'td-cashback-visa-infinite', issuerSlug: 'td', issuerName: 'TD', name: 'Cash Back Visa Infinite', category: 'cashback', network: 'fintel', starRating: 4.3, ourPickFor: null, annualFee: 139, rewardsRateHeadline: '3% on gas, groceries & recurring bills', welcomeOffer: '10% cashback for 3 months', purchaseAprPct: 20.99, balanceTransferAprPct: 22.99 },
  { cardId: 'mbna-true-line', issuerSlug: 'mbna', issuerName: 'MBNA', name: 'True Line Mastercard', category: 'balance_transfer', network: 'fintel', starRating: 4.1, ourPickFor: 'balance transfers', annualFee: 0, rewardsRateHeadline: 'No rewards — low interest', welcomeOffer: '0% on balance transfers for 12 months', purchaseAprPct: 12.99, balanceTransferAprPct: 0 },
  { cardId: 'tangerine-money-back', issuerSlug: 'tangerine', issuerName: 'Tangerine', name: 'Money-Back Credit Card', category: 'no_fee', network: 'direct', starRating: 4.4, ourPickFor: 'no annual fee cashback', annualFee: 0, rewardsRateHeadline: '2% in up to 3 categories you pick', welcomeOffer: 'Extra 10% back for 2 months', purchaseAprPct: 19.95, balanceTransferAprPct: 19.95 },
  { cardId: 'rbc-avion-visa-infinite', issuerSlug: 'rbc', issuerName: 'RBC', name: 'Avion Visa Infinite', category: 'travel', network: 'fintel', starRating: 4.2, ourPickFor: null, annualFee: 120, rewardsRateHeadline: '1.25 Avion points per $1', welcomeOffer: '35,000 welcome points', purchaseAprPct: 20.99, balanceTransferAprPct: 22.99 },
  { cardId: 'cibc-aventura-newcomer', issuerSlug: 'cibc', issuerName: 'CIBC', name: 'Aventura for Newcomers', category: 'newcomer', network: 'fintel', starRating: 4.5, ourPickFor: 'newcomers to Canada', annualFee: 0, rewardsRateHeadline: 'No credit history required', welcomeOffer: 'First-year fee waived on premium tier', purchaseAprPct: 20.99, balanceTransferAprPct: 22.99 },
  { cardId: 'bmo-cashback-world-elite', issuerSlug: 'bmo', issuerName: 'BMO', name: 'CashBack World Elite', category: 'cashback', network: 'cj', starRating: 4.3, ourPickFor: null, annualFee: 120, rewardsRateHeadline: '5% on groceries (first 3 months)', welcomeOffer: '10% on first $2,000 spend', purchaseAprPct: 20.99, balanceTransferAprPct: 22.99 },
  { cardId: 'neo-secured', issuerSlug: 'neo', issuerName: 'Neo Financial', name: 'Secured Mastercard', category: 'secured', network: 'direct', starRating: 4.0, ourPickFor: 'building credit', annualFee: 0, rewardsRateHeadline: 'Average 5% cashback at partners', welcomeOffer: 'No security-deposit minimum', purchaseAprPct: 19.99, balanceTransferAprPct: null },
  { cardId: 'scotia-scene-visa', issuerSlug: 'scotiabank', issuerName: 'Scotiabank', name: 'SCENE+ Visa', category: 'student', network: 'fintel', starRating: 4.1, ourPickFor: 'students', annualFee: 0, rewardsRateHeadline: '2 SCENE+ points per $1 at Sobeys', welcomeOffer: '5,000 bonus points', purchaseAprPct: 20.99, balanceTransferAprPct: 22.99 },
  { cardId: 'amex-business-edge', issuerSlug: 'amex', issuerName: 'American Express', name: 'Business Edge', category: 'business', network: 'cj', starRating: 4.2, ourPickFor: 'small business', annualFee: 99, rewardsRateHeadline: '3x points on office & rideshare', welcomeOffer: 'Up to 47,000 points', purchaseAprPct: 21.99, balanceTransferAprPct: null },
  { cardId: 'triangle-mastercard', issuerSlug: 'canadiantire', issuerName: 'Canadian Tire', name: 'Triangle Mastercard', category: 'no_fee', network: 'direct', starRating: 3.9, ourPickFor: null, annualFee: 0, rewardsRateHeadline: '4% CT Money at Canadian Tire', welcomeOffer: 'Bonus CT Money on first purchase', purchaseAprPct: 21.99, balanceTransferAprPct: 22.99 },
];

/** Build the full Card objects with append-only-style current offers. */
export function mockCards(): Card[] {
  return SEEDS.map((s) => ({
    cardId: s.cardId,
    issuerSlug: s.issuerSlug,
    issuerName: s.issuerName,
    name: s.name,
    category: s.category,
    network: s.network,
    imageUrl: null,
    starRating: s.starRating,
    ourPickFor: s.ourPickFor,
    currentOffer: {
      offerId: `offer_${s.cardId}_v1`,
      cardId: s.cardId,
      annualFee: s.annualFee,
      rewardsRateHeadline: s.rewardsRateHeadline,
      welcomeOffer: s.welcomeOffer,
      purchaseAprPct: s.purchaseAprPct,
      balanceTransferAprPct: s.balanceTransferAprPct,
      verifiedAt: '2026-06-15T00:00:00.000Z',
      sourceUrl: `DEV-FIXTURE://catalog/${s.cardId}`,
      needsVerification: false,
    },
  }));
}
