/** /mortgages/glossary — TermRates mortgage glossary (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesGlossary from '@/components/termrates/TermRatesGlossary';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Mortgage glossary — plain-English terms | TermRates.ca',
    description:
      'Every mortgage term that matters, defined in plain English — amortization, IRD penalty, stress test, GDS/TDS, prime, and more. Search or browse.',
    alternates: { canonical: '/mortgages/glossary' },
  };
}

export default function GlossaryPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesGlossary />;
}
