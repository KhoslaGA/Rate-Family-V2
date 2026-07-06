/**
 * /life-insurance/term-vs-permanent — LifeRate bespoke pillar guide (template #9).
 * LifeRate-only route (notFound elsewhere). LifeRate owns /life-insurance, so this
 * cornerstone editorial is self-canonical on that host. Byline stays [BYLINE TBD]
 * until a real credentialed reviewer is confirmed.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermVsPermanentGuide from '@/components/liferate/TermVsPermanentGuide';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'liferate') return {};
  return {
    title: 'Term vs permanent life insurance: the honest comparison | LifeRate.ca',
    description:
      'Term or permanent life insurance? A plain-English guide to the real trade-off — what each does, what each costs, and how to tell which one your situation calls for.',
    alternates: { canonical: '/life-insurance/term-vs-permanent' },
  };
}

export default function TermVsPermanentPage() {
  if (headers().get('x-site') !== 'liferate') notFound();
  return <TermVsPermanentGuide />;
}
