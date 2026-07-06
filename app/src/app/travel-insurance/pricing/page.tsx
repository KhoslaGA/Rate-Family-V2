/** /travel-insurance/pricing — HealthRate visitor-insurance pricing explainer. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Pricing from '@/components/healthrate/pages/Pricing';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'How visitor insurance pricing works | HealthRate.ca',
    description:
      'The five levers that move visitor and travel insurance pricing — age, coverage amount, deductible, stability period and trip length — with an illustrative index, not quotes.',
    alternates: { canonical: '/travel-insurance/pricing' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <Pricing />;
}
