/**
 * /life-insurance/convert — LifeRate bespoke term-to-permanent conversion tool (template #21).
 * LifeRate-only: renders the bespoke tool on the LifeRate host, notFound() elsewhere.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import ConvertTool from '@/components/liferate/ConvertTool';

export function generateMetadata(): Metadata {
  if (headers().get('x-site') !== 'liferate') return {};
  return {
    title: 'Term-to-permanent conversion: should you convert? | LifeRate.ca',
    description:
      'A plain tool to weigh converting your term life policy to permanent — the conversion window, the trade-offs, and whether it fits. Then talk it through with an advisor.',
    alternates: { canonical: '/life-insurance/convert' },
  };
}

export default function ConvertPage() {
  if (headers().get('x-site') !== 'liferate') notFound();
  return <ConvertTool />;
}
