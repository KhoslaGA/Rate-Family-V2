/**
 * /life-insurance/gta — LifeRate bespoke city-geo landing (template #23).
 * LifeRate-only: renders the bespoke GTA page on the LifeRate host, notFound() elsewhere.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import CityGta from '@/components/liferate/CityGta';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'liferate') return {};
  return {
    title: 'Life insurance in the GTA — a plain-English guide | LifeRate.ca',
    description:
      'Life insurance for Greater Toronto Area families and newcomers — local context, plain English, and real rates across 21 Canadian insurers.',
    alternates: { canonical: '/life-insurance/gta' },
  };
}

export default function GtaPage() {
  if (headers().get('x-site') !== 'liferate') notFound();
  return <CityGta />;
}
