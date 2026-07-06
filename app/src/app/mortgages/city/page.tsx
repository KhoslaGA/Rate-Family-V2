/** /mortgages/city — TermRates Toronto/GTA local market page (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesCity from '@/components/termrates/TermRatesCity';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Toronto mortgage rates & local market data | TermRates.ca',
    description:
      'Compare mortgage rates for Toronto and the GTA, with local benchmark prices, minimum down payment, land transfer tax and the income you would need. Data-backed, updated regularly.',
    alternates: { canonical: '/mortgages/city' },
  };
}

export default function CityPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesCity />;
}
