/** /mortgages/renewal — TermRates renewal & switch tool (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesRenewal from '@/components/termrates/TermRatesRenewal';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Mortgage renewal & switch tool | TermRates.ca',
    description:
      'Your term is ending. Enter your balance and current rate to compare renewing with your lender against switching — with switch costs shown, not hidden.',
    alternates: { canonical: '/mortgages/renewal' },
  };
}

export default function RenewalPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesRenewal />;
}
