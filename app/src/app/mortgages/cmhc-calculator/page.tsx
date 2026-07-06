/** /mortgages/cmhc-calculator — TermRates CMHC premium calculator (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesCMHC from '@/components/termrates/TermRatesCMHC';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'CMHC mortgage insurance premium calculator | TermRates.ca',
    description:
      'See your mortgage default-insurance premium by loan-to-value, check the minimum down payment, and find your total insured mortgage amount.',
    alternates: { canonical: '/mortgages/cmhc-calculator' },
  };
}

export default function CmhcPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesCMHC />;
}
