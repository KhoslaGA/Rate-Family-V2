/** /mortgages/guides — TermRates guides & rate-news hub (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesGuidesHub from '@/components/termrates/TermRatesGuidesHub';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Mortgage guides & rate news | TermRates.ca',
    description:
      'Plain-English mortgage guides, rate-decision analysis and data reports — reviewed by licensed professionals and sourced to the Bank of Canada and lender filings.',
    alternates: { canonical: '/mortgages/guides' },
  };
}

export default function GuidesPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesGuidesHub />;
}
