/**
 * /life-insurance/cost-report — LifeRate bespoke data report (template #14).
 * LifeRate-only: renders on the LifeRate host, notFound() elsewhere.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import CostReport from '@/components/liferate/CostReport';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'liferate') return {};
  return {
    title: 'The cost of life insurance in Canada, 2026 | LifeRate.ca',
    description:
      'LifeRate’s 2026 analysis of what Canadians actually pay for life insurance — by age, coverage, and term — drawn from comparative rate data across 21 insurers.',
    alternates: { canonical: '/life-insurance/cost-report' },
  };
}

export default function CostReportPage() {
  if (headers().get('x-site') !== 'liferate') notFound();
  return <CostReport />;
}
