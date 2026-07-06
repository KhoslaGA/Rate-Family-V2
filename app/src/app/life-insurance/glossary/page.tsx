/**
 * /life-insurance/glossary — LifeRate bespoke glossary (template #11).
 * LifeRate-only: renders the bespoke glossary on the LifeRate host, notFound() elsewhere.
 * (Kept under /life-insurance so it's LifeRate-owned and self-canonical — the shared /glossary
 * route belongs to the hub and is left untouched.)
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import LifeRateGlossary from '@/components/liferate/LifeRateGlossary';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'liferate') return {};
  return {
    title: 'Life insurance glossary — plain-English terms | LifeRate.ca',
    description:
      'Every life insurance word you’ll meet, defined in plain English — beneficiary, cash value, convertibility, underwriting and more. Search or browse A–Z.',
    alternates: { canonical: '/life-insurance/glossary' },
  };
}

export default function GlossaryPage() {
  if (headers().get('x-site') !== 'liferate') notFound();
  return <LifeRateGlossary />;
}
