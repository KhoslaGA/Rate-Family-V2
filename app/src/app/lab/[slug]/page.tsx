import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import PageWrapper from '@/components/layout/PageWrapper';
import PostBody from '@/components/blog/PostBody';
import AuthorBio from '@/components/blog/AuthorBio';
import LabBriefingCard from '@/components/lab/LabBriefingCard';
import { sanityFetch } from '@/lib/sanity/client';
import {
  getAllLabBriefingSlugsQuery,
  getLabBriefingBySlugQuery,
} from '@/lib/sanity/queries';
import { imageUrl } from '@/lib/sanity/helpers';
import { absoluteUrl, breadcrumbJsonLd } from '@/lib/seo/jsonLd';
import {
  briefingUrl,
  formatIssueNumber,
  LAB_TOPIC_LABELS,
  type LabBriefing,
} from '@/types/lab';

export const revalidate = 60;

interface RouteParams {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<Array<{ slug: string }>>({
    query: getAllLabBriefingSlugsQuery,
    tags: ['labBriefing'],
  });
  return (slugs ?? []).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const b = await sanityFetch<LabBriefing | null>({
    query: getLabBriefingBySlugQuery,
    params: { slug: params.slug },
    tags: ['labBriefing', `labBriefing:${params.slug}`],
  });

  if (!b) return { title: 'Briefing not found' };

  const title =
    b.seo?.metaTitle ||
    `${formatIssueNumber(b.issueNumber)} — ${b.title} | TopRates Lab`;
  const description = b.seo?.metaDescription || b.summary;
  const canonical = b.seo?.canonicalUrl || absoluteUrl(briefingUrl(b));
  const ogImage = b.seo?.ogImage?.asset?.url || imageUrl(b.mainImage);

  return {
    title,
    description,
    alternates: { canonical },
    robots: b.seo?.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      publishedTime: b.publishedAt,
      modifiedTime: b.lastUpdated || b.publishedAt,
      authors: b.analyst ? [b.analyst.name] : undefined,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

const ptComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    normal: ({ children }) => <p>{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

function reportJsonLd(b: LabBriefing) {
  const url = absoluteUrl(briefingUrl(b));
  const ogImage = b.seo?.ogImage?.asset?.url ?? imageUrl(b.mainImage);
  return {
    '@context': 'https://schema.org',
    '@type': 'Report',
    headline: b.seo?.metaTitle || b.title,
    description: b.seo?.metaDescription || b.summary,
    image: ogImage ? [ogImage] : undefined,
    datePublished: b.publishedAt,
    dateModified: b.lastUpdated || b.publishedAt,
    reportNumber: formatIssueNumber(b.issueNumber),
    author: b.analyst
      ? {
          '@type': 'Person',
          name: b.analyst.name,
          url: absoluteUrl(`/author/${b.analyst.slug}`),
        }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'TopRates Lab',
      parentOrganization: { '@type': 'Organization', name: 'TopRates.ca' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
}

export default async function LabBriefingDetailPage({ params }: RouteParams) {
  const b = await sanityFetch<LabBriefing | null>({
    query: getLabBriefingBySlugQuery,
    params: { slug: params.slug },
    tags: ['labBriefing', `labBriefing:${params.slug}`],
  });

  if (!b) return notFound();

  const cover = imageUrl(b.mainImage);
  const issue = formatIssueNumber(b.issueNumber);
  const topicLabel = LAB_TOPIC_LABELS[b.topic] ?? b.topic;

  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'TopRates Lab', url: '/lab' },
    { name: issue, url: briefingUrl(b) },
  ];

  const snapshot = new Date(b.snapshotDate).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const published = new Date(b.publishedAt).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportJsonLd(b)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }}
      />

      <article className="max-w-4xl mx-auto">
        {/* Breadcrumbs (monospace) */}
        <nav className="font-mono text-xs tracking-wider text-gray-500 uppercase mb-8 flex flex-wrap items-center gap-2">
          {crumbs.map((c, i) => (
            <span key={c.url} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-400">/</span>}
              {i < crumbs.length - 1 ? (
                <Link href={c.url} className="hover:text-[#1a365d]">
                  {c.name}
                </Link>
              ) : (
                <span className="text-gray-700">{c.name}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Masthead */}
        <header className="border-b-2 border-[#1a365d] pb-8 mb-10">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-[#f59e0b] uppercase mb-4">
            <span className="font-bold">{issue}</span>
            <span className="text-gray-400">/</span>
            <span className="text-[#1a365d]">{topicLabel}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-3 leading-tight">
            {b.title}
          </h1>
          {b.subtitle && (
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">{b.subtitle}</p>
          )}
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{b.summary}</p>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200 font-mono text-xs">
            <div>
              <dt className="text-gray-500 uppercase tracking-wider mb-1">Analyst</dt>
              <dd className="text-[#1a365d] font-semibold text-sm">{b.analyst.name}</dd>
            </div>
            <div>
              <dt className="text-gray-500 uppercase tracking-wider mb-1">Published</dt>
              <dd className="text-gray-700 text-sm">{published}</dd>
            </div>
            <div>
              <dt className="text-gray-500 uppercase tracking-wider mb-1">Snapshot</dt>
              <dd className="text-gray-700 text-sm">{snapshot}</dd>
            </div>
            {b.readingTime ? (
              <div>
                <dt className="text-gray-500 uppercase tracking-wider mb-1">Read</dt>
                <dd className="text-gray-700 text-sm">{b.readingTime} min</dd>
              </div>
            ) : null}
            {b.reviewedBy && (
              <div className="col-span-2 md:col-span-4">
                <dt className="text-gray-500 uppercase tracking-wider mb-1">
                  Peer reviewed by
                </dt>
                <dd className="text-gray-700 text-sm">{b.reviewedBy.name}</dd>
              </div>
            )}
          </dl>
        </header>

        {/* Cover */}
        {cover && (
          <figure className="mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cover}
              alt={b.mainImage?.alt || b.title}
              className="w-full border border-gray-200"
            />
            {b.mainImage?.caption && (
              <figcaption className="font-mono text-xs text-gray-500 mt-2">
                Fig. — {b.mainImage.caption}
              </figcaption>
            )}
          </figure>
        )}

        {/* Key findings */}
        {b.keyFindings && b.keyFindings.length > 0 && (
          <section className="mb-12 bg-[#f8fafc] border border-gray-200 p-6 md:p-8">
            <h2 className="font-mono text-xs tracking-[0.2em] text-[#1a365d] uppercase mb-5">
              Key Findings
            </h2>
            <ul className="space-y-4">
              {b.keyFindings.map((k, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="font-mono text-xs text-gray-400 mt-1 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-800 leading-relaxed">{k.finding}</p>
                    {k.metric && (
                      <p className="font-mono text-sm text-[#f59e0b] font-bold mt-1">
                        {k.metric}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Body */}
        {b.body && b.body.length > 0 && (
          <PostBody content={<PortableText value={b.body as any} components={ptComponents} />} />
        )}

        {/* Rate Index callout */}
        {b.relatedRateIndex && (
          <aside className="mt-10 border-l-4 border-[#f59e0b] bg-[#fffbeb] p-6">
            <div className="font-mono text-xs tracking-[0.2em] text-[#92400e] uppercase mb-2">
              See the live data
            </div>
            <a
              href={b.relatedRateIndex}
              className="text-[#1a365d] font-semibold underline hover:no-underline"
            >
              → Open the Rate Index slice this briefing analyzes
            </a>
          </aside>
        )}

        {/* Methodology */}
        {b.methodology && b.methodology.length > 0 && (
          <section className="mt-16 border-t-2 border-gray-900 pt-8">
            <h2 className="font-mono text-xs tracking-[0.2em] text-gray-900 uppercase mb-4">
              Methodology
            </h2>
            {b.sampleSize && (
              <p className="font-mono text-sm text-gray-700 mb-4">
                <span className="text-gray-500">Sample: </span>
                {b.sampleSize}
              </p>
            )}
            <div className="prose prose-sm max-w-none text-gray-700">
              <PortableText value={b.methodology as any} components={ptComponents} />
            </div>
          </section>
        )}

        {/* Data sources */}
        {b.dataSources && b.dataSources.length > 0 && (
          <section className="mt-12">
            <h2 className="font-mono text-xs tracking-[0.2em] text-gray-900 uppercase mb-4">
              Data Sources
            </h2>
            <ol className="space-y-2 font-mono text-sm">
              {b.dataSources.map((s, i) => (
                <li key={`${s.label}-${i}`} className="flex items-start gap-3">
                  <span className="text-gray-400 shrink-0">[{i + 1}]</span>
                  <span className="flex-1 text-gray-700">
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1a365d] underline hover:no-underline"
                      >
                        {s.label}
                      </a>
                    ) : (
                      s.label
                    )}
                    {s.kind && (
                      <span className="ml-2 text-xs text-gray-500 uppercase">
                        ({s.kind})
                      </span>
                    )}
                    {s.publishedDate && (
                      <span className="ml-2 text-gray-500">
                        — {new Date(s.publishedDate).toLocaleDateString('en-CA')}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Downloadable data */}
        {b.downloadableData?.asset?.url && (
          <section className="mt-12 border border-dashed border-gray-400 p-6">
            <div className="font-mono text-xs tracking-[0.2em] text-gray-700 uppercase mb-2">
              Reproduce this briefing
            </div>
            <a
              href={b.downloadableData.asset.url}
              className="text-[#1a365d] font-semibold underline hover:no-underline"
              download
            >
              ↓ Download dataset
              {b.downloadableData.asset.originalFilename && (
                <span className="ml-2 text-sm text-gray-500 font-normal font-mono">
                  ({b.downloadableData.asset.originalFilename})
                </span>
              )}
            </a>
          </section>
        )}

        {/* Analyst bio */}
        {b.analyst && (
          <div className="mt-16 border-t border-gray-200 pt-8">
            <AuthorBio author={b.analyst as any} />
          </div>
        )}

        {/* Contact */}
        <section className="mt-12 bg-[#0b1220] text-gray-100 p-8">
          <div className="font-mono text-xs tracking-[0.2em] text-[#f59e0b] uppercase mb-3">
            Questions, corrections, or data requests
          </div>
          <p className="text-gray-200 mb-4 leading-relaxed">
            The Lab welcomes pushback. If you spot an error or want the underlying
            data, get in touch — every correction is logged on the briefing.
          </p>
          <a
            href="mailto:lab@toprates.ca"
            className="font-mono text-sm text-[#f59e0b] underline hover:no-underline"
          >
            lab@toprates.ca
          </a>
        </section>

        {/* Related briefings */}
        {b.relatedBriefings && b.relatedBriefings.length > 0 && (
          <section className="mt-16">
            <h2 className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">
              Related Briefings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {b.relatedBriefings.map((r) => (
                <LabBriefingCard
                  key={r._id}
                  briefing={{
                    ...r,
                    snapshotDate: b.snapshotDate, // related projection omits snapshotDate; fall back to parent
                    analyst: b.analyst,
                  } as any}
                />
              ))}
            </div>
          </section>
        )}
      </article>
    </PageWrapper>
  );
}
