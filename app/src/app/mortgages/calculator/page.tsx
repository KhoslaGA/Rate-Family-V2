/**
 * /mortgages/calculator — TermRates payment calculator (steel). TermRates-only
 * route: renders on the TermRates host, notFound()s elsewhere, self-canonical.
 * Runs entirely in the browser; figures are illustrative.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesCalculator from '@/components/termrates/TermRatesCalculator';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Mortgage payment calculator | TermRates.ca',
    description:
      'Calculate your Canadian mortgage payment, CMHC premium, and total interest over the term. Adjust price, down payment, rate and amortization and watch it update live.',
    alternates: { canonical: '/mortgages/calculator' },
  };
}

export default function MortgageCalculatorPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesCalculator />;
}
