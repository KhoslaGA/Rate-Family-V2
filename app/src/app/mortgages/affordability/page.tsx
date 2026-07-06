/** /mortgages/affordability — TermRates affordability tool (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesAffordability from '@/components/termrates/TermRatesAffordability';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'How much can I afford? Mortgage affordability tool | TermRates.ca',
    description:
      'Enter your income, debts and down payment to see the maximum home price and mortgage you would qualify for under Canadian stress-test rules — and the gap to your target.',
    alternates: { canonical: '/mortgages/affordability' },
  };
}

export default function AffordabilityPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesAffordability />;
}
