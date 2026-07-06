/** /subscribe — HealthRate email subscribe. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Subscribe from '@/components/healthrate/pages/Subscribe';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'Get new guides by email | HealthRate.ca',
    description:
      'One short email when a new guide or translation ships. No offers, no quotes, no partner promotions — HealthRate sells nothing.',
    alternates: { canonical: '/subscribe' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <Subscribe />;
}
