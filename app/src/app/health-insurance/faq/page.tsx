/** /health-insurance/faq — HealthRate frequently asked questions. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Faq from '@/components/healthrate/pages/Faq';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'Frequently asked questions | HealthRate.ca',
    description:
      'The questions families ask most about Super Visa insurance, newcomer coverage and travel medical policies — answered plainly. Education only, no quotes.',
    alternates: { canonical: '/health-insurance/faq' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <Faq />;
}
