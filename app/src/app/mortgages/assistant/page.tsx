/** /mortgages/assistant — TermRates mortgage assistant (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesAssistant from '@/components/termrates/TermRatesAssistant';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Ask the TermRates assistant | TermRates.ca',
    description:
      'Quick answers to common mortgage questions — fixed vs variable, the stress test, penalties, insured vs uninsured — from the TermRates assistant. Then talk to a real broker.',
    alternates: { canonical: '/mortgages/assistant' },
  };
}

export default function AssistantPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesAssistant />;
}
