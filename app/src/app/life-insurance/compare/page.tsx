/**
 * /life-insurance/compare — LifeRate bespoke premium comparison table (template #20).
 * LifeRate-only: renders the bespoke table on the LifeRate host, notFound() elsewhere.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import CompareTable from '@/components/liferate/CompareTable';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'liferate') return {};
  return {
    title: 'Term vs whole life: premium comparison table | LifeRate.ca',
    description:
      'Compare illustrative term and whole-life premiums side by side by age and coverage. See the trade-off in real numbers, then get your own quote. Comparison only, not an offer.',
    alternates: { canonical: '/life-insurance/compare' },
  };
}

export default function ComparePage() {
  if (headers().get('x-site') !== 'liferate') notFound();
  return <CompareTable />;
}
