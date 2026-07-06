/**
 * /mortgages/quote — TermRates bespoke quoter (steel). TermRates-only route:
 * renders on the TermRates host and notFound()s elsewhere (no cross-host
 * duplicate). Self-canonical on the TermRates host. Numbers are illustrative.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesQuoter from '@/components/termrates/TermRatesQuoter';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Get my mortgage rate — personalized quote | TermRates.ca',
    description:
      'Answer a few questions and see personalized mortgage rates matched to your scenario across Canadian lenders, then get connected to a licensed broker. No email wall to compare.',
    alternates: { canonical: '/mortgages/quote' },
  };
}

export default function MortgageQuotePage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesQuoter />;
}
