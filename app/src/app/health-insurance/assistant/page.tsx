/** /health-insurance/assistant — HealthRate education assistant. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Assistant from '@/components/healthrate/pages/Assistant';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'Ask the education assistant | HealthRate.ca',
    description:
      'Instant plain-English answers to the basics — Super Visa rules, waiting periods, deductibles, stability clauses. Education only; nothing here is advice or a quote.',
    alternates: { canonical: '/health-insurance/assistant' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <Assistant />;
}
