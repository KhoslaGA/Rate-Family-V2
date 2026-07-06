import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from '@/components/layout/PageWrapper';
import LabBriefingCard from '@/components/lab/LabBriefingCard';
import { sanityFetch } from '@/lib/sanity/client';
import {
  getFeaturedLabBriefingQuery,
  getPaginatedLabBriefingsQuery,
} from '@/lib/sanity/queries';
import type {
  LabBriefingCard as LabBriefingCardType,
  PaginatedLabBriefings,
} from '@/types/lab';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'TopRates Lab — Independent Insurance & Rate Research | TopRates.ca',
  description:
    'Original research, rate-index commentary, and methodology briefings from the TopRates Lab. Signed analyst work with full data sources.',
  alternates: { canonical: '/lab' },
};

const PER_PAGE = 12;

interface LabPageProps {
  searchParams?: { page?: string };
}

export default async function LabIndexPage({ searchParams }: LabPageProps) {
  const currentPage = Math.max(1, parseInt(searchParams?.page ?? '1', 10) || 1);

  const [featured, paginated] = await Promise.all([
    sanityFetch<LabBriefingCardType | null>({
      query: getFeaturedLabBriefingQuery,
      tags: ['labBriefing'],
    }),
    sanityFetch<PaginatedLabBriefings>({
      query: getPaginatedLabBriefingsQuery,
      params: {
        start: (currentPage - 1) * PER_PAGE,
        end: currentPage * PER_PAGE,
      },
      tags: ['labBriefing'],
    }),
  ]);

  const items = paginated?.items ?? [];
  const total = paginated?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));

  // Don't double-render the featured briefing in the grid.
  const gridItems = featured
    ? items.filter((b) => b._id !== featured._id)
    : items;

  return (
    <PageWrapper>
      {/* Lab masthead — distinct from blog. Monospace, dark accent. */}
      <header className="border-y border-gray-900 py-10 mb-12 bg-[#0b1220] text-gray-100 -mx-4 px-4 md:-mx-8 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-xs tracking-[0.25em] text-[#f59e0b] uppercase mb-3">
            TopRates Lab
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Independent research on Canadian rates.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Signed analyst briefings on auto, home, life, and the rate index.
            Every finding is dated, sourced, and reproducible — so you can verify
            the work, not just read the conclusion.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6 font-mono text-xs tracking-wider text-gray-400 uppercase">
            <Link href="/rate-index" className="hover:text-[#f59e0b]">
              → Live Rate Index
            </Link>
            <Link href="/lab#methodology" className="hover:text-[#f59e0b]">
              → How we work
            </Link>
            <a href="mailto:lab@toprates.ca" className="hover:text-[#f59e0b]">
              → lab@toprates.ca
            </a>
          </div>
        </div>
      </header>

      {/* Featured briefing */}
      {featured && (
        <section className="mb-16">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase">
              Latest Briefing
            </h2>
            <span className="font-mono text-xs text-gray-400">
              {total} briefing{total === 1 ? '' : 's'} published
            </span>
          </div>
          <LabBriefingCard briefing={featured} variant="featured" />
        </section>
      )}

      {/* Archive */}
      <section>
        <h2 className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">
          Archive
        </h2>
        {gridItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridItems.map((b) => (
              <LabBriefingCard key={b._id} briefing={b} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-gray-300 p-12 text-center">
            <p className="font-mono text-sm text-gray-500 mb-2">
              No briefings published yet.
            </p>
            <p className="text-gray-600">
              The Lab is just getting started. Check back soon — or{' '}
              <a href="mailto:lab@toprates.ca" className="underline text-[#1a365d]">
                email lab@toprates.ca
              </a>{' '}
              to suggest a research question.
            </p>
          </div>
        )}

        {/* Simple pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-4 mt-12 font-mono text-sm">
            {currentPage > 1 && (
              <Link
                href={`/lab?page=${currentPage - 1}`}
                className="border border-gray-300 px-4 py-2 hover:border-[#1a365d]"
              >
                ← Previous
              </Link>
            )}
            <span className="text-gray-500 px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
              <Link
                href={`/lab?page=${currentPage + 1}`}
                className="border border-gray-300 px-4 py-2 hover:border-[#1a365d]"
              >
                Next →
              </Link>
            )}
          </div>
        )}
      </section>

      {/* Methodology blurb anchor */}
      <section
        id="methodology"
        className="mt-20 border-t border-gray-200 pt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-mono text-xs tracking-[0.2em] text-[#1a365d] uppercase mb-3">
              How the Lab works
            </div>
            <h2 className="text-2xl font-bold text-[#1a365d]">
              Every briefing is sourced, dated, and signed.
            </h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Every Lab briefing publishes its <strong>methodology</strong>, its{' '}
              <strong>data sources</strong>, and the <strong>snapshot date</strong>{' '}
              the findings are valid as of. Where possible, the underlying dataset
              is attached so readers can reproduce the analysis themselves.
            </p>
            <p>
              Lab work is editorially independent from TopRates&rsquo; commercial
              partnerships. Analysts sign their work and disclose any conflicts at
              the top of each briefing.
            </p>
            <p className="font-mono text-sm text-gray-500">
              Research questions, corrections, or dataset requests →{' '}
              <a href="mailto:lab@toprates.ca" className="underline text-[#1a365d]">
                lab@toprates.ca
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
