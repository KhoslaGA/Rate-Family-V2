/** /mortgages/land-transfer-tax — TermRates land transfer tax calculator (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesLandTransferTax from '@/components/termrates/TermRatesLandTransferTax';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Land transfer tax calculator (Ontario, Toronto, BC & more) | TermRates.ca',
    description:
      'Estimate the provincial and Toronto municipal land transfer tax on your purchase, plus any first-time-buyer rebate, so you can budget your cash-to-close.',
    alternates: { canonical: '/mortgages/land-transfer-tax' },
  };
}

export default function LandTransferTaxPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesLandTransferTax />;
}
