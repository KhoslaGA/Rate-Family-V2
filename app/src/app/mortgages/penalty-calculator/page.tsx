/** /mortgages/penalty-calculator — TermRates prepayment penalty calculator (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesPenalty from '@/components/termrates/TermRatesPenalty';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Mortgage prepayment penalty calculator (IRD vs 3 months) | TermRates.ca',
    description:
      'Estimate the cost to break your mortgage early — three months of interest versus the interest-rate differential (IRD) — before you refinance or sell.',
    alternates: { canonical: '/mortgages/penalty-calculator' },
  };
}

export default function PenaltyPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesPenalty />;
}
