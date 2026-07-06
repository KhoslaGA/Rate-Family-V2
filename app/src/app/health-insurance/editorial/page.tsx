/** /health-insurance/editorial — HealthRate editorial desk. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Editorial from '@/components/healthrate/pages/Editorial';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'The HealthRate editorial desk | HealthRate.ca',
    description:
      'Who writes and reviews HealthRate guides, our plain-language standard, and why every named byline must be a real, credentialed person.',
    alternates: { canonical: '/health-insurance/editorial' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <Editorial />;
}
