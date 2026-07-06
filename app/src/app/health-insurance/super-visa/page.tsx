/** /health-insurance/super-visa — HealthRate Super Visa landing. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import SuperVisa from '@/components/healthrate/pages/SuperVisa';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'Super Visa insurance, explained | HealthRate.ca',
    description:
      'What Super Visa medical insurance is, who needs it, and what the coverage must include — explained simply for families inviting parents and grandparents to Canada. Education only.',
    alternates: { canonical: '/health-insurance/super-visa' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <SuperVisa />;
}
