import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageWrapper from '@/components/layout/PageWrapper';
import PostCard from '@/components/blog/PostCard';
import Pagination from '@/components/blog/Pagination';
import { Button } from '@/components/ui/Button';
import { sanityFetch } from '@/lib/sanity/client';
import {
  getPaginatedPostsQuery,
  getFeaturedPostQuery,
  getCategoriesQuery,
  getPostsByCategoryQuery,
} from '@/lib/sanity/queries';
import type { PostCard as PostCardType, Category, PaginatedPosts } from '@/types/blog';
import { imageUrl, resolveExcerpt } from '@/lib/sanity/helpers';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Insurance Insights & Resources | TopRates.ca',
  description:
    'Plain-English guides and explainers on Canadian insurance, mortgages, credit cards, and investing — with full coverage of the 2026 Ontario auto reform.',
  keywords:
    'Canadian insurance blog, Ontario insurance guides, auto reform 2026, life insurance Canada, home insurance Canada, credit card reviews, mortgage explainers, insurance education',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Insurance Insights & Resources | TopRates.ca',
    description:
      'Plain-English guides and explainers on Canadian insurance, mortgages, credit cards, and investing.',
    url: 'https://toprates.ca/blog',
    siteName: 'TopRates.ca',
    type: 'website',
    locale: 'en_CA',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TopRates.ca' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurance Insights & Resources | TopRates.ca',
    description: 'Plain-English Canadian insurance guides — including the 2026 Ontario auto reform.',
    images: ['/og-image.png'],
  },
  robots: 'index, follow',
};

const POSTS_PER_PAGE = 9;

interface BlogPageProps {
  searchParams?: {
    page?: string;
    category?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Math.max(1, parseInt(searchParams?.page ?? '1', 10) || 1);
  const categorySlug = searchParams?.category ?? null;

  // Parallel fetches
  const [categoriesRaw, featuredPost, postsResult] = await Promise.all([
    sanityFetch<Category[]>({
      query: getCategoriesQuery,
      tags: ['category'],
    }),
    sanityFetch<PostCardType | null>({
      query: getFeaturedPostQuery,
      tags: ['post'],
    }),
    categorySlug
      ? sanityFetch<PostCardType[]>({
          query: getPostsByCategoryQuery,
          params: { slug: categorySlug },
          tags: ['post', `post:category:${categorySlug}`],
        }).then((items) => ({ items, total: items.length }))
      : sanityFetch<PaginatedPosts>({
          query: getPaginatedPostsQuery,
          params: {
            start: (currentPage - 1) * POSTS_PER_PAGE,
            end: currentPage * POSTS_PER_PAGE,
          },
          tags: ['post'],
        }),
  ]);

  const categories = categoriesRaw ?? [];
  const paginated: PaginatedPosts = Array.isArray(postsResult)
    ? { items: postsResult, total: postsResult.length }
    : (postsResult as PaginatedPosts);

  const totalPages = Math.max(1, Math.ceil(paginated.total / POSTS_PER_PAGE));
  const posts = categorySlug
    ? paginated.items.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE,
      )
    : paginated.items;

  const activeCategory = categories.find((c) => c.slug === categorySlug) || null;
  const featuredImg = imageUrl(featuredPost?.mainImage);

  return (
    <PageWrapper>
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
          Insurance Insights & Resources
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Expert guides on the 2026 Ontario auto insurance reform and Canadian coverage options.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        {/* Featured Post */}
        {featuredPost && featuredImg && !categorySlug && (
          <div className="lg:col-span-2">
            <Link
              href={`/${featuredPost.routePrefix || 'blog'}/${featuredPost.slug}`}
              className="block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featuredImg}
                alt={featuredPost.mainImage?.alt || featuredPost.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <div className="text-white">
                  {featuredPost.primaryCategory && (
                    <div className="inline-block bg-[#f59e0b] text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {featuredPost.primaryCategory.title}
                    </div>
                  )}
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{featuredPost.title}</h2>
                  <p className="text-gray-100 mb-4 line-clamp-3">{resolveExcerpt(featuredPost)}</p>
                  <div className="flex items-center justify-between text-sm text-gray-200">
                    <span>
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-CA')}
                    </span>
                    {featuredPost.readingTime ? (
                      <span>{featuredPost.readingTime} min read</span>
                    ) : null}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Sidebar */}
        <div className={featuredPost && featuredImg && !categorySlug ? 'lg:col-span-2' : 'lg:col-span-4'}>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-bold text-[#1a365d] mb-4">Filter by Category</h3>
            <div className="space-y-2">
              <Link
                href="/blog"
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  !categorySlug ? 'bg-[#1a365d] text-white' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                All Posts
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat._id}
                  href={`/blog?category=${cat.slug}`}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    categorySlug === cat.slug
                      ? 'bg-[#1a365d] text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {cat.title}
                  {typeof cat.postCount === 'number' && (
                    <span className="ml-2 text-xs opacity-75">({cat.postCount})</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <section>
        <h2 className="text-2xl font-bold text-[#1a365d] mb-8">
          {activeCategory ? activeCategory.title : 'Latest Articles'}
        </h2>

        {posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl={categorySlug ? `/blog?category=${categorySlug}` : '/blog'}
            />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">No articles published yet.</p>
            <Link href="/blog">
              <Button variant="outline">View All Articles</Button>
            </Link>
          </div>
        )}
      </section>
    </PageWrapper>
  );
}
