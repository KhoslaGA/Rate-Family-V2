/**
 * /rates — TermRates full mortgage rate table (steel). /rates is a TermRates-owned
 * namespace (site/config → termrates.owns), so it renders on the TermRates host and
 * notFound()s elsewhere. Self-canonical on the TermRates host. Illustrative rates.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesRateTable from '@/components/termrates/TermRatesRateTable';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Canadian mortgage rate table — fixed & variable, all terms | TermRates.ca',
    description:
      'The full Canadian mortgage rate table. Filter by term, fixed or variable, insured or uninsured, and purpose. Sortable, updated on business days, no email wall.',
    alternates: { canonical: '/rates' },
  };
}

export default function RatesPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesRateTable />;
}
