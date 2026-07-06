/**
 * /life-insurance/news/rate-trends-2026 — LifeRate bespoke news article (template #10).
 * LifeRate-only: renders on the LifeRate host, notFound() elsewhere.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import NewsRateTrends from '@/components/liferate/NewsRateTrends';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'liferate') return {};
  return {
    title: 'Canada’s life insurance rates held steady in 2026 | LifeRate.ca',
    description:
      'Term life premiums stayed broadly flat across Canadian insurers through the first half of 2026. What’s behind it and what it means if you’re shopping for coverage.',
    alternates: { canonical: '/life-insurance/news/rate-trends-2026' },
  };
}

export default function NewsRateTrendsPage() {
  if (headers().get('x-site') !== 'liferate') notFound();
  return <NewsRateTrends />;
}
