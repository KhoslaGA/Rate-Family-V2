/** /health-insurance/guides — HealthRate guides hub. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import GuidesHub from '@/components/healthrate/pages/GuidesHub';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'All guides — health insurance 101 | HealthRate.ca',
    description:
      'Every HealthRate guide in one place — Super Visa, newcomer coverage, travel insurance, tools and reports. Plain English, education only.',
    alternates: { canonical: '/health-insurance/guides' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <GuidesHub />;
}
