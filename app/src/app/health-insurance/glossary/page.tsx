/** /health-insurance/glossary — HealthRate plain-English glossary. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Glossary from '@/components/healthrate/pages/Glossary';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'Health insurance glossary, in plain English | HealthRate.ca',
    description:
      'Plain-English definitions of the words on every health and travel policy — Super Visa, OHIP, deductible, stability period, repatriation and more. Education only.',
    alternates: { canonical: '/health-insurance/glossary' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <Glossary />;
}
