/** /health-insurance/report — HealthRate 2026 education report. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Report from '@/components/healthrate/pages/Report';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'Why we publish in five languages: the comprehension gap | HealthRate.ca',
    description:
      "HealthRate's education report on insurance comprehension in a second language — why policy wordings fail newcomer families, and what plain-language publishing changes.",
    alternates: { canonical: '/health-insurance/report' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <Report />;
}
