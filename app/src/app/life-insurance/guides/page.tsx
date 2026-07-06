/**
 * /life-insurance/guides — LifeRate bespoke guides/category hub (template #13).
 * LifeRate-only: renders the bespoke hub on the LifeRate host, notFound() elsewhere.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import CategoryHub from '@/components/liferate/CategoryHub';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'liferate') return {};
  return {
    title: 'Life insurance guides & resources | LifeRate.ca',
    description:
      'Every LifeRate guide in one place — term vs permanent, how much you need, critical illness, and more. Filter by topic and read at your own pace.',
    alternates: { canonical: '/life-insurance/guides' },
  };
}

export default function GuidesPage() {
  if (headers().get('x-site') !== 'liferate') notFound();
  return <CategoryHub />;
}
