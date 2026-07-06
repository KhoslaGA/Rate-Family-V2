import { LANDING_PAGES, type LandingData } from '@/data/landingPages';

export function resolveCityFromFsa(fsa: string): LandingData | null {
  const target = fsa.toUpperCase();
  return (
    LANDING_PAGES.find(
      (p) => p.type === 'city' && p.fsas?.includes(target),
    ) ?? null
  );
}
