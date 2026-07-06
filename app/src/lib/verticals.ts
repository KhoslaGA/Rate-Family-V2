import type { Vertical as DisclaimerVertical } from '@/components/disclaimers/DisclaimerBlock';

/**
 * Site-wide vertical taxonomy for routing, layouts, disclaimers, and bylines.
 *
 * The DisclaimerBlock component owns the canonical 4-vertical type
 * (life / pc / mortgage / cards). This file extends that with 'general' for
 * pages that don't belong to a single vertical (homepage, about, glossary,
 * etc.) and provides path-based detection.
 *
 * Phase 1 (May 8 launch): only /life-insurance is active-selling. Even
 * /health-insurance and /travel-insurance — which technically fall under
 * KLC Group's LLQP / accident & sickness scope — stay editorial in Phase 1
 * while KLC Group validates initial volume on /life-insurance only. Phase 2
 * expands isActiveCommercePath() to those two pages.
 */
export type Vertical = DisclaimerVertical | 'general';

/**
 * Determine the active vertical from a URL pathname.
 *
 * Supports both the current URL structure (/life-insurance, /auto-insurance,
 * etc.) and the future /learn/life/, /learn/auto/ structure (Phase 2) so a
 * later migration is a no-op for callers of this helper.
 */
export function getVerticalFromPath(pathname: string): Vertical {
  // Life vertical — KLC Group LLQP-licensed referral, active in Phase 1
  if (pathname.startsWith('/learn/life')) return 'life';
  if (pathname.startsWith('/life-insurance')) return 'life';

  // P&C vertical — RIBO-regulated, KLC Group RIBO registration pending.
  // /health-insurance and /travel-insurance live here in Phase 1 even
  // though A&S falls under LLQP — they stay editorial until Phase 2.
  if (pathname.startsWith('/learn/auto')) return 'pc';
  if (pathname.startsWith('/auto-insurance')) return 'pc';
  if (pathname.startsWith('/learn/home')) return 'pc';
  if (pathname.startsWith('/home-insurance')) return 'pc';
  if (pathname.startsWith('/learn/business')) return 'pc';
  if (pathname.startsWith('/business-insurance')) return 'pc';
  if (pathname.startsWith('/learn/travel')) return 'pc';
  if (pathname.startsWith('/travel-insurance')) return 'pc';
  if (pathname.startsWith('/health-insurance')) return 'pc';

  // Mortgage vertical — MBLAA-regulated, no licensing today
  if (pathname.startsWith('/learn/mortgage')) return 'mortgage';
  if (pathname.startsWith('/mortgages')) return 'mortgage';

  // Cards vertical — affiliate disclosure, no insurance scope
  if (pathname.startsWith('/credit-cards')) return 'cards';

  return 'general';
}

/**
 * Returns true if active selling / regulated activity is permitted on this
 * path. Used to decide whether to render the LifeLeadForm, the active-
 * brokerage variant of the disclaimer block, the /life/ eyebrow, etc.
 *
 * Phase 1 (May 8 launch): true ONLY for /life-insurance and the future
 * /learn/life/* sub-pillar paths. Phase 2 expands to /health-insurance and
 * /travel-insurance once KLC Group validates initial volume.
 */
export function isActiveCommercePath(pathname: string): boolean {
  if (pathname.startsWith('/life-insurance')) return true;
  if (pathname.startsWith('/learn/life')) return true;
  return false;
}
