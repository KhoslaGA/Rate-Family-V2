import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageWrapper from '@/components/layout/PageWrapper';
import PostCard from '@/components/blog/PostCard';
import { sanityFetch } from '@/lib/sanity/client';
import { getAuthorBySlugQuery, getPostsByAuthorQuery } from '@/lib/sanity/queries';
import type { AuthorRef, PostCard as PostCardType } from '@/types/blog';
import { absoluteUrl } from '@/lib/seo/jsonLd';

export const revalidate = 60;

interface RouteParams {
  params: { slug: string };
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const author = await sanityFetch<AuthorRef | null>({
    query: getAuthorBySlugQuery,
    params: { authorSlug: params.slug },
    tags: ['author', `author:${params.slug}`],
  });

  if (!author) return { title: 'Author not found' };

  const title = `${author.name} — Articles | TopRates.ca`;
  const description =
    author.bio || `Read all articles by ${author.name} on TopRates.ca.`;

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(`/author/${author.slug}`) },
    openGraph: { title, description, type: 'profile' },
  };
}

export default async function AuthorPage({ params }: RouteParams) {
  const [author, posts] = await Promise.all([
    sanityFetch<AuthorRef | null>({
      query: getAuthorBySlugQuery,
      params: { authorSlug: params.slug },
      tags: ['author', `author:${params.slug}`],
    }),
    sanityFetch<PostCardType[]>({
      query: getPostsByAuthorQuery,
      params: { authorSlug: params.slug },
      tags: ['post', `post:author:${params.slug}`],
    }),
  ]);

  if (!author) return notFound();

  const avatar = author.image?.asset?.url;

  return (
    <PageWrapper>
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-2">
        <Link href="/" className="hover:text-[#1a365d]">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#1a365d]">Blog</Link>
        <span>/</span>
        <span className="text-gray-700">{author.name}</span>
      </nav>

      {/* Author Header */}
      <header className="mb-12 flex flex-col sm:flex-row items-start gap-6">
        {avatar && (
          <Image
            src={avatar}
            alt={author.name}
            width={120}
            height={120}
            className="w-28 h-28 rounded-full object-cover shadow-md"
          />
        )}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-2">
            {author.name}
          </h1>
          {author.bio && (
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {author.bio}
            </p>
          )}
        </div>
      </header>

      {/* Posts grid */}
      <section>
        <h2 className="text-xl font-bold text-[#1a365d] mb-6">
          Articles by {author.name}
        </h2>
        {(posts ?? []).length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(posts ?? []).map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No articles published yet.</p>
        )}
      </section>
    </PageWrapper>
  );
}
