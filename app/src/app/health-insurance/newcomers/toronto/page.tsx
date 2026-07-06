/** /health-insurance/newcomers/toronto — HealthRate Toronto newcomer guide. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Toronto from '@/components/healthrate/pages/Toronto';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'Newcomer health in Toronto — where to start | HealthRate.ca',
    description:
      'Settling in Toronto? Where to apply for OHIP, how community health centres work before your card arrives, and where to find help in your language. Education only.',
    alternates: { canonical: '/health-insurance/newcomers/toronto' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <Toronto />;
}
