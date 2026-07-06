import { calculateAnnualRewardsValue } from "./rewards-valuations";

/**
 * TopRates.ca Scoring & Recommendation Engine
 * Computes net monetary value and standard 1.0 - 5.0 scores for Canadian credit cards.
 */

// Average monthly spending profile for standard Canadian households (CAD)
export const DEFAULT_CANADIAN_SPEND_PROFILE = {
  Grocery: 500,    // $500/mo
  Gas: 200,        // $200/mo
  Dining: 250,     // $250/mo
  Transit: 150,    // $150/mo (rideshare, public transit, parking)
  Travel: 200,     // $200/mo (flights, hotels, bookings)
  Recurring: 200,  // $200/mo (subscriptions, internet, utilities)
  Other: 500       // $500/mo (retail, custom retail, miscellaneous)
};

export interface SpendProfile {
  Grocery: number;
  Gas: number;
  Dining: number;
  Transit: number;
  Travel: number;
  Recurring: number;
  Other: number;
}

export interface CardScoringInput {
  annualFee: number;
  firstYearFeeWaived: boolean;
  welcomeBonusValue: number;
  interestPurchase: number;
  minIncomePersonal?: number | null;
  recommendedCreditScore: string;
  rewards: Array<{
    category: string;
    rate: number;
    rewardType: string;
    programName: string | null;
  }>;
  insurance: Array<{
    insuranceType: string;
    dollarValue: number;
  }>;
  perks: Array<{
    perkName: string;
  }>;
}

/**
 * Calculates the total net value of a credit card over a year.
 * Net Value = Annual Rewards Value + Welcome Bonus (if first year) + Insurance Value - Net Annual Fee
 */
export function calculateNetCardValue(
  card: CardScoringInput,
  spendProfile: SpendProfile = DEFAULT_CANADIAN_SPEND_PROFILE,
  isFirstYear: boolean = false
): number {
  // 1. Calculate Rewards Earned
  let totalAnnualRewards = 0;
  
  // Create a quick map of categories defined in the card rewards
  const rewardsMap = new Map<string, typeof card.rewards[0]>();
  for (const r of card.rewards) {
    rewardsMap.set(r.category, r);
  }

  // Calculate rewards for each spend category
  const categories = Object.keys(spendProfile) as Array<keyof SpendProfile>;
  
  for (const cat of categories) {
    const monthlySpend = spendProfile[cat];
    const rewardInfo = rewardsMap.get(cat) || rewardsMap.get("Other"); // fallback to Other multiplier

    if (rewardInfo) {
      const annualRewardsVal = calculateAnnualRewardsValue(
        rewardInfo.programName,
        rewardInfo.rewardType,
        rewardInfo.rate,
        monthlySpend
      );
      totalAnnualRewards += annualRewardsVal;
    }
  }

  // 2. Welcome Bonus (only if first year)
  const welcomeValue = isFirstYear ? card.welcomeBonusValue : 0;

  // 3. Insurance Package Value (conservative 15% of total estimated value as actual utility, capped at $150)
  const totalInsuranceEstValue = card.insurance.reduce((sum, ins) => sum + ins.dollarValue, 0);
  const insuranceUtilityValue = Math.min(totalInsuranceEstValue * 0.15, 150);

  // 4. Net Annual Fee
  const netFee = (isFirstYear && card.firstYearFeeWaived) ? 0 : card.annualFee;

  // 5. Total Net Value
  const totalNetValue = totalAnnualRewards + welcomeValue + insuranceUtilityValue - netFee;

  return Math.round(totalNetValue * 100) / 100;
}

/**
 * Computes a standardized TopRates Score between 1.0 and 5.0
 * Methodology:
 * - Net Value Score (40%): How much value does this card return compared to the best card ($800/yr returns = 5.0)?
 * - Fee & Interest Score (20%): Lower fees and rates score higher.
 * - Insurance Score (20%): Number and strength of insurance coverages.
 * - Perks Score (15%): Premium features (lounge access, no FX fees, etc.).
 * - Accessibility Score (5%): Credit score / income requirement ease.
 */
export function calculateTopRatesScore(
  card: CardScoringInput,
  spendProfile: SpendProfile = DEFAULT_CANADIAN_SPEND_PROFILE
): number {
  // 1. Net Value (Ongoing) - Normalized between 1.0 and 5.0
  // Excellent ongoing value = $800+ (5.0 score), poor value = $0 or negative (1.0 score)
  const ongoingNetValue = calculateNetCardValue(card, spendProfile, false);
  let valueScore = 1.0;
  if (ongoingNetValue > 0) {
    valueScore = 1.0 + Math.min((ongoingNetValue / 800) * 4.0, 4.0);
  }

  // 2. Fees & Interest Score
  // Annual fee under $50 = 5.0, $50-$120 = 4.5, $120-$160 = 4.0, $160-$500 = 3.0, $500+ = 2.0
  let feeScore = 5.0;
  if (card.annualFee > 0) {
    if (card.annualFee <= 120) {
      feeScore = 4.5;
    } else if (card.annualFee <= 160) {
      feeScore = 4.0;
    } else if (card.annualFee <= 499) {
      feeScore = 3.0;
    } else {
      feeScore = 2.0;
    }
  }
  // Penalize interest rates > 20%
  if (card.interestPurchase > 20) {
    feeScore -= 0.5;
  }

  // 3. Insurance Coverage Score
  // No insurance = 1.0, basic (1-2 kinds) = 3.0, robust (3-4 kinds) = 4.5, premium (5+) = 5.0
  const coverageCount = card.insurance.length;
  let insuranceScore = 1.0;
  if (coverageCount > 0) {
    insuranceScore = 2.0 + Math.min(coverageCount * 0.6, 3.0);
  }

  // 4. Perks Score
  const perkCount = card.perks.length;
  let perksScore = 1.0;
  if (perkCount > 0) {
    perksScore = 2.0 + Math.min(perkCount * 1.5, 3.0);
  }

  // 5. Accessibility Score
  let accessScore = 5.0;
  if (card.minIncomePersonal && card.minIncomePersonal > 0) {
    if (card.minIncomePersonal >= 80000) {
      accessScore = 2.0; // harder to get
    } else if (card.minIncomePersonal >= 60000) {
      accessScore = 3.0;
    } else if (card.minIncomePersonal >= 12000) {
      accessScore = 4.0;
    }
  }
  if (card.recommendedCreditScore.toLowerCase() === "excellent") {
    accessScore -= 0.5;
  }

  // Weighted sum
  const rawScore = 
    (valueScore * 0.40) +
    (feeScore * 0.20) +
    (insuranceScore * 0.20) +
    (perksScore * 0.15) +
    (accessScore * 0.05);

  // Round to 1 decimal place, clamp between 1.0 and 5.0
  const finalScore = Math.max(1.0, Math.min(Math.round(rawScore * 10) / 10, 5.0));

  return finalScore;
}
