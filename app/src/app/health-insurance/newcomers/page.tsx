/** /health-insurance/newcomers — HealthRate newcomers landing. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Newcomers from '@/components/healthrate/pages/Newcomers';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'New to Canada? Health coverage, explained | HealthRate.ca',
    description:
      'Newcomer health coverage in Canada, in plain language — how provincial coverage starts, what a waiting period means, and how families bridge the gap. Education only.',
    alternates: { canonical: '/health-insurance/newcomers' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <Newcomers />;
}
