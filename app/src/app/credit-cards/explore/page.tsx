/**
 * /credit-cards/explore — the live card-comparison surface bound to the
 * backend /v1/cards (mock data, V2). TopRates hub host only; self-canonical.
 *
 * This is separate from /credit-cards (the compliance-scrubbed educational
 * page) so the existing SEO page is untouched — this route is where the
 * real card catalog renders once the domain components are wired.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import CardExplorer from '@/components/credit-cards/CardExplorer';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'toprates') return {};
  return {
    title: 'Compare Canadian credit cards | TopRates.ca',
    description:
      'Compare Canadian credit cards by cash back, travel, no-fee, newcomer, and more. Figures shown with the date we verified them.',
    alternates: { canonical: '/credit-cards/explore' },
  };
}

export default function ExplorePage() {
  if (headers().get('x-site') !== 'toprates') notFound();
  return (
    <main style={{ maxWidth: 1160, margin: '0 auto', padding: '40px 24px 72px' }}>
      <header style={{ marginBottom: 26 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#B45309', marginBottom: 10 }}>
          Credit cards · Canada
        </div>
        <h1 style={{ fontSize: 34, margin: '0 0 8px', letterSpacing: '-0.02em' }}>Compare credit cards</h1>
        <p style={{ margin: 0, color: '#5C5C66', fontSize: 16, lineHeight: 1.6, maxWidth: 620 }}>
          Every figure is shown with the date we verified it. Filter by how you actually spend, and switch to a table when you want everything side by side.
        </p>
      </header>

      <div style={{ marginBottom: 20 }}>
        <DisclaimerBlock vertical="cards" />
      </div>

      <CardExplorer />
    </main>
  );
}
