/**
 * TopRates.ca Canadian Credit Card Rewards Valuation Engine
 * Defines standard point valuations in CAD dollars (per point/mile)
 * based on industry standard averages for the Canadian market in 2026.
 */

export const PROGRAM_VALUATIONS: Record<string, number> = {
  // Cash Back has a fixed 1:1 value (1.0% = $0.01)
  "Cashback": 1.00,
  
  // American Express Membership Rewards (MR) - highly flexible, transfer partners
  "Amex MR": 0.02, // 2.0¢ per point (conservative travel redemption/transfer)
  
  // Air Canada Aeroplan - premier airline program
  "Aeroplan": 0.02, // 2.0¢ per point
  
  // Scotiabank Scene+ - versatile groceries, travel, dining
  "Scene+": 0.01, // 1.0¢ per point (fixed value)
  
  // BMO Rewards - travel program
  "BMO Rewards": 0.0067, // 0.67¢ per point (150 points = $1 CAD)
  
  // RBC Avion - flexible travel point
  "RBC Avion": 0.015, // 1.5¢ per point
  
  // CIBC Aventura - travel program
  "Aventura": 0.01, // 1.0¢ per point
  
  // MBNA Rewards - flexible points
  "MBNA Rewards": 0.01, // 1.0¢ per point
  
  // PC Optimum (President's Choice) - Loblaws grocery points
  "PC Optimum": 0.0001, // 0.1¢ per point (10,000 points = $10 CAD)
  
  // Rogers Bank Cashback (standard is 1.5%, but Rogers customers get a 50% bonus on Rogers bills)
  "Rogers": 1.00, // cashback is direct cash
  
  // Canadian Tire Triangle Rewards (CT Money)
  "Triangle": 1.00, // CT money is direct CAD dollars
  
  // Default fallback for any other program
  "Default": 0.01 // 1.0¢ per point
};

/**
 * Returns the estimated monetary value in CAD of a rewards multiplier rate
 * given a monthly spend and a rewards program name.
 * 
 * Example:
 * Amex Cobalt dining rate is 5.0 (5x Amex MR points).
 * If spending $500 monthly on Dining:
 * Annual points = 5x * $500 * 12 = 30,000 points.
 * Annual value = 30,000 * $0.02 = $600.00 CAD.
 */
export function calculateAnnualRewardsValue(
  programName: string | null,
  rewardType: string,
  multiplierRate: number,
  monthlySpend: number
): number {
  const annualSpend = monthlySpend * 12;
  
  // Standard Cash Back is simple percentage
  if (rewardType.toLowerCase() === "cashback") {
    // If rate is e.g. 5% (stored as 5.0), then cashback = annualSpend * (multiplierRate / 100)
    return annualSpend * (multiplierRate / 100);
  }

  // Points/Miles based rewards
  const programKey = programName || "Default";
  const valPerPoint = PROGRAM_VALUATIONS[programKey] ?? PROGRAM_VALUATIONS["Default"];

  // PC Optimum stores rates as points per dollar (e.g. 30 points per $1 Loblaws spend)
  if (programKey === "PC Optimum") {
    // 30 points/$1 * $1000 spend = 30,000 points. Value = 30,000 * 0.0001 = $3.00
    return annualSpend * multiplierRate * valPerPoint;
  }

  // Standard points card (e.g. 5x points per $1)
  // Annual Points = Spend * Multiplier. Value = Points * valPerPoint.
  return annualSpend * multiplierRate * valPerPoint;
}
