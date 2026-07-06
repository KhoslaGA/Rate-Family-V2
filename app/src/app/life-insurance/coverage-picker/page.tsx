/**
 * /life-insurance/coverage-picker — LifeRate bespoke coverage-gap picker (template #22).
 *
 * LifeRate-only route: renders the bespoke gap picker on the LifeRate host and notFound()s
 * elsewhere. Self-canonical on the LifeRate host (LifeRate owns /life-insurance).
 * (Route is named "coverage-picker" — a bare "coverage" dir is caught by .gitignore.)
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import GapPicker from '@/components/liferate/GapPicker';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'liferate') return {};
  return {
    title: 'What should your life insurance cover? | LifeRate.ca',
    description:
      'Tap the obligations that matter — mortgage, income, kids, final expenses — and see a recommended coverage band in seconds. Planning aid only, no account, no email.',
    alternates: { canonical: '/life-insurance/coverage-picker' },
  };
}

export default function CoveragePickerPage() {
  if (headers().get('x-site') !== 'liferate') notFound();
  return <GapPicker />;
}
