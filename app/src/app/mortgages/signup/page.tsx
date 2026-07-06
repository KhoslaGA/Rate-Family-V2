/** /mortgages/signup — TermRates "get matched" lead-capture step (steel). TermRates-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import TermRatesSignup from '@/components/termrates/TermRatesSignup';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'termrates') return {};
  return {
    title: 'Get matched & create your rate account | TermRates.ca',
    description:
      'Save your scenario, get matched to a licensed broker, and track your rate. Create a free TermRates account — no email wall to compare, only to act.',
    alternates: { canonical: '/mortgages/signup' },
  };
}

export default function SignupPage() {
  if (headers().get('x-site') !== 'termrates') notFound();
  return <TermRatesSignup />;
}
