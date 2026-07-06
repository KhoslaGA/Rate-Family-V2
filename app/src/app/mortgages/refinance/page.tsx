/** /mortgages/refinance — TermRates refinance & HELOC landing (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesRefinance from '@/components/termrates/TermRatesRefinance';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Refinance & HELOC rates in Canada | TermRates.ca',
    description:
      'Compare mortgage refinance rates and home-equity lines of credit across Canadian lenders. See the break-even on a refinance and the trade-offs of a HELOC, plainly.',
    alternates: { canonical: '/mortgages/refinance' },
  };
}

export default function RefinancePage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesRefinance />;
}
