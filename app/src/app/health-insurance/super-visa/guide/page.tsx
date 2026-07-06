/** /health-insurance/super-visa/guide — HealthRate Super Visa pillar guide. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import SuperVisaGuide from '@/components/healthrate/pages/SuperVisaGuide';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'The Super Visa insurance guide | HealthRate.ca',
    description:
      'The full plain-English guide to Super Visa medical insurance — the rules, the cost levers, refunds, monthly-payment options, and the questions to ask before buying. Education only.',
    alternates: { canonical: '/health-insurance/super-visa/guide' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <SuperVisaGuide />;
}
