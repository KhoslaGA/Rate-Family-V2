/** /health-insurance/languages — HealthRate language status. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Languages from '@/components/healthrate/pages/Languages';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'Read HealthRate in your language | HealthRate.ca',
    description:
      'HealthRate publishes in English, French, Punjabi, Hindi and Urdu. See what is translated today and switch the site language — honestly tracked.',
    alternates: { canonical: '/health-insurance/languages' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <Languages />;
}
