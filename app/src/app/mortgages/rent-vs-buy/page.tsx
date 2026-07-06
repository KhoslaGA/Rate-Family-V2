/** /mortgages/rent-vs-buy — TermRates rent vs buy calculator (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesRentVsBuy from '@/components/termrates/TermRatesRentVsBuy';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Rent vs buy calculator | TermRates.ca',
    description:
      'Compare the net cost of buying — payments, carrying costs and equity — against renting over the years you plan to stay, and see which comes out ahead.',
    alternates: { canonical: '/mortgages/rent-vs-buy' },
  };
}

export default function RentVsBuyPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesRentVsBuy />;
}
