/**
 * Feature flags for TopRates.ca compliance-final.
 *
 * The /life/ lead form is NOT behind a feature flag — KLC Group Canada Inc.
 * holds active LLQP licensing today, so life insurance referral activity
 * (lead capture + KLC handoff) is live from day one of this branch.
 *
 * The P&C quote engine IS behind a feature flag — KLC Group does not yet
 * hold RIBO registration, so P&C quoting / selling is not permitted on
 * production. The flag exists so a P&C quote-engine track can be developed
 * on a long-running feature branch without ever leaking to production.
 */

export const FEATURES = {
  /**
   * P&C quote engine — auto / home / business / travel rate comparison +
   * brokerage flow. Production: must remain false until KLC Group Canada
   * Inc. completes RIBO registration. Preview / staging: may be true for
   * internal testing only.
   */
  PC_QUOTE_ENGINE:
    process.env.NEXT_PUBLIC_FEATURE_PC_QUOTE_ENGINE === 'true',
} as const;

// Build-time guard: production deploys must never enable the P&C quote
// engine. Throws at module load so `next build` fails loudly rather than
// shipping an inadvertently-enabled flag.
if (
  process.env.VERCEL_ENV === 'production' &&
  process.env.NEXT_PUBLIC_FEATURE_PC_QUOTE_ENGINE === 'true'
) {
  throw new Error(
    '[compliance] NEXT_PUBLIC_FEATURE_PC_QUOTE_ENGINE must not be true on production. ' +
      'P&C quote engine is gated until KLC Group Canada Inc. is RIBO-registered.',
  );
}
