/** /mortgages/stress-test — TermRates mortgage stress-test calculator (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesStressTest from '@/components/termrates/TermRatesStressTest';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Mortgage stress test calculator (GDS / TDS) | TermRates.ca',
    description:
      'Check whether a mortgage passes the Canadian stress test at the qualifying rate, with your GDS and TDS debt ratios against income and other debts.',
    alternates: { canonical: '/mortgages/stress-test' },
  };
}

export default function StressTestPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesStressTest />;
}
