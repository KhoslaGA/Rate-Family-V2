import type { Metadata } from 'next';
import { headers } from 'next/headers';
import V2LandingPage from '@/components/landing/V2LandingPage';
import LifeRateHome from '@/components/liferate/LifeRateHome';
import TermRatesHome from '@/components/termrates/TermRatesHome';
import HealthRateHome from '@/components/healthrate/HealthRateHome';
import { SITE_CONFIG } from '@/site/config';

// TopRates (the hub) keeps its live homepage metadata verbatim so its SEO is
// untouched. Spokes derive title/description from SITE_CONFIG, resolved against
// the per-host metadataBase set in the root layout.
const topRatesHomeMetadata: Metadata = {
  title: 'Compare insurance, mortgages and credit cards',
  description:
    'Independent Canadian insurance education. Plain-English guides on auto, home, life, business, travel, and mortgage. Talk to a LLQP-licensed advisor at KLC Group Canada Inc. for life insurance. Operated by Webhub4u Inc.',
  alternates: { canonical: '/' },
};

export function generateMetadata(): Metadata {
  const s = headers().get('x-site');
  if (s === 'liferate') {
    return {
      title: SITE_CONFIG.liferate.title,
      description: SITE_CONFIG.liferate.description,
      alternates: { canonical: '/' },
    };
  }
  if (s === 'termrates') {
    return {
      title: SITE_CONFIG.termrates.title,
      description: SITE_CONFIG.termrates.description,
      alternates: { canonical: '/' },
    };
  }
  if (s === 'healthrate') {
    return {
      title: SITE_CONFIG.healthrate.title,
      description: SITE_CONFIG.healthrate.description,
      alternates: { canonical: '/' },
    };
  }
  // Any non-spoke host (including toprates) keeps the hub metadata verbatim.
  return topRatesHomeMetadata;
}

export default function Page() {
  const s = headers().get('x-site');
  if (s === 'liferate') return <LifeRateHome />;
  if (s === 'termrates') return <TermRatesHome />;
  if (s === 'healthrate') return <HealthRateHome />;
  return <V2LandingPage />;
}
