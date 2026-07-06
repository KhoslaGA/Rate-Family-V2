/** /mortgages/news/rate-decision-2026 — TermRates rate-news article (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesRateNews from '@/components/termrates/TermRatesRateNews';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'What the June rate cut does to your renewal | TermRates.ca',
    description:
      'The Bank of Canada cut its policy rate 25 basis points. Here is what the move means for variable-rate holders and anyone renewing a mortgage in 2026 — in real payment terms.',
    alternates: { canonical: '/mortgages/news/rate-decision-2026' },
  };
}

export default function RateDecisionPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesRateNews />;
}
