/** /health-insurance/super-visa/checklist — HealthRate coverage checklist. HealthRate-only. */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import CoverageChecklist from '@/components/healthrate/pages/CoverageChecklist';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'healthrate') return {};
  return {
    title: 'Super Visa coverage checklist | HealthRate.ca',
    description:
      'An interactive checklist of what a Super Visa insurance policy must include — work through it with the policy wording open before your family buys anything. Education only.',
    alternates: { canonical: '/health-insurance/super-visa/checklist' },
  };
}

export default function Page() {
  if (headers().get('x-site') !== 'healthrate') notFound();
  return <CoverageChecklist />;
}
