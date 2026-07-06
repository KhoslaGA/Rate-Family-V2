import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AutoLandingPage from '@/components/landing/AutoLandingPage';
import { LANDING_PAGES, getLandingBySlug } from '@/data/landingPages';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return LANDING_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getLandingBySlug(slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/auto-insurance/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: 'website',
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const data = getLandingBySlug(slug);
  if (!data) notFound();
  return <AutoLandingPage data={data} />;
}
