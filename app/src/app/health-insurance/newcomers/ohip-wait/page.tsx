/** /health-insurance/newcomers/ohip-wait — HealthRate OHIP wait planner. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import OhipWait from '@/components/healthrate/pages/OhipWait';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'OHIP waiting period planner | HealthRate.ca',
    description:
      'If a provincial waiting period applies to you, this planner shows the gap between your landing date and when coverage could begin — so you can plan calmly. Education only.',
    alternates: { canonical: '/health-insurance/newcomers/ohip-wait' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <OhipWait />;
}
