/** /trust — HealthRate trust & transparency. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Trust from '@/components/healthrate/pages/Trust';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'Trust & transparency | HealthRate.ca',
    description:
      'HealthRate operating status, entity disclosure, editorial principles and what education-only means in practice — the full transparency picture.',
    alternates: { canonical: '/trust' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <Trust />;
}
