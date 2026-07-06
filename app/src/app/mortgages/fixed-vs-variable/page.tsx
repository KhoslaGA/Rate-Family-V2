/** /mortgages/fixed-vs-variable — TermRates pillar guide (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesFixedVsVariable from '@/components/termrates/TermRatesFixedVsVariable';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Fixed vs variable mortgage: decided by math | TermRates.ca',
    description:
      'A plain-English pillar guide to choosing between a fixed and variable mortgage in Canada — the real trade-off, the break-even math, and how to decide for your situation.',
    alternates: { canonical: '/mortgages/fixed-vs-variable' },
  };
}

export default function FixedVsVariablePage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesFixedVsVariable />;
}
