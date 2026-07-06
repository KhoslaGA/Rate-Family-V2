/**
 * /life-insurance/assistant — LifeRate bespoke scripted assistant (template #8).
 * LifeRate-only: renders on the LifeRate host, notFound() elsewhere. Education/orientation only;
 * routes to the quoter or a licensed advisor for anything real.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import LifeRateAssistant from '@/components/liferate/LifeRateAssistant';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'liferate') return {};
  return {
    title: 'Ask LifeRate — plain-English answers about life insurance | LifeRate.ca',
    description:
      'A plain-English assistant for life insurance questions — term vs permanent, how much you need, how rates work. Routes you to real numbers and a licensed advisor.',
    alternates: { canonical: '/life-insurance/assistant' },
  };
}

export default function AssistantPage() {
  if (headers().get('x-site') !== 'liferate') notFound();
  return <LifeRateAssistant />;
}
