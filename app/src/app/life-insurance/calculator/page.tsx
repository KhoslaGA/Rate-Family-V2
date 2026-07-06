/**
 * /life-insurance/calculator — LifeRate bespoke needs calculator (template #7).
 *
 * LifeRate-only route: renders the bespoke rosewood calculator on the LifeRate host and
 * notFound()s elsewhere. LifeRate owns /life-insurance, so this is self-canonical on that host.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import LifeRateCalculator from '@/components/liferate/LifeRateCalculator';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'liferate') return {};
  return {
    title: 'How much life insurance do you need? | LifeRate.ca',
    description:
      'A plain, four-number way to size your life insurance — replace income, clear debts, fund the future, subtract what you already have. Illustrative planning, not a quote.',
    alternates: { canonical: '/life-insurance/calculator' },
  };
}

export default function CalculatorPage() {
  if (headers().get('x-site') !== 'liferate') notFound();
  return <LifeRateCalculator />;
}
