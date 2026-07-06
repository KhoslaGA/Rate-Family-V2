/** /health-insurance/news/foreign-insurers — HealthRate news update. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import NewsUpdate from '@/components/healthrate/pages/NewsUpdate';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'Buying Super Visa insurance from an approved foreign insurer | HealthRate.ca',
    description:
      'Since 2022, IRCC has allowed Super Visa insurance from approved foreign insurers. What that means in practice, and the checks to do before buying outside Canada.',
    alternates: { canonical: '/health-insurance/news/foreign-insurers' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <NewsUpdate />;
}
