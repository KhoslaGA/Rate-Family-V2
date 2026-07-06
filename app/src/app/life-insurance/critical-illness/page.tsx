/**
 * /life-insurance/critical-illness — LifeRate bespoke secondary landing (template #5).
 *
 * LifeRate-only route: it renders the bespoke rosewood landing on the LifeRate host
 * and notFound()s everywhere else (the hub/other spokes don't own a critical-illness
 * page). LifeRate owns /life-insurance, so this is self-canonical on that host.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import CriticalIllnessLanding from '@/components/liferate/CriticalIllnessLanding';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'liferate') return {};
  return {
    title: 'Critical illness insurance — a lump sum when you need it | LifeRate.ca',
    description:
      'Critical illness insurance pays a tax-free lump sum on diagnosis of a covered condition — money to focus on recovery. Compare it and see how it pairs with life cover.',
    alternates: { canonical: '/life-insurance/critical-illness' },
  };
}

export default function CriticalIllnessPage() {
  if (headers().get('x-site') !== 'liferate') notFound();
  return <CriticalIllnessLanding />;
}
