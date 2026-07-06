/** /mortgages/report — TermRates 2026 renewal-wall data report (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesReport from '@/components/termrates/TermRatesReport';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'The 2026 renewal wall: payment shock by region | TermRates.ca',
    description:
      'A TermRates data report on the 2026 Canadian mortgage renewal wall — how many mortgages renew, the average payment increase, and the shock by region and original term.',
    alternates: { canonical: '/mortgages/report' },
  };
}

export default function ReportPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesReport />;
}
