/**
 * /life-insurance/quote — LifeRate bespoke live quoter (template #6).
 *
 * LifeRate-only route: renders the bespoke 3-step rosewood quoter on the LifeRate host and
 * notFound()s elsewhere. Self-canonical on the LifeRate host. Numbers are illustrative; the
 * live CompuLife engine (PR #18) reconciles into this component per QUOTER-CONTRACT.md.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import LifeRateQuoter from '@/components/liferate/LifeRateQuoter';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'liferate') return {};
  return {
    title: 'Compare life insurance rates | LifeRate.ca',
    description:
      'See illustrative life insurance rates across 21 Canadian insurers. A few plain questions, no email wall — a licensed advisor only when you want one.',
    alternates: { canonical: '/life-insurance/quote' },
  };
}

export default function QuotePage() {
  if (headers().get('x-site') !== 'liferate') notFound();
  return <LifeRateQuoter />;
}
