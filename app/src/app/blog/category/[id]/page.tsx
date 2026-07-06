import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageWrapper from '@/components/layout/PageWrapper';
import PostCard from '@/components/blog/PostCard';
import Pagination from '@/components/blog/Pagination';
import { Button } from '@/components/ui/Button';
import { sanityFetch } from '@/lib/sanity/client';
import {
  getPostsByCategoryQuery,
  getCategoryBySlugQuery,
  getCategoriesQuery,
} from '@/lib/sanity/queries';
import type { Category, PostCard as PostCardType } from '@/types/blog';
import { absoluteUrl } from '@/lib/seo/jsonLd';

export const revalidate = 60;

interface RouteParams {
  params: { id: string };
  searchParams?: { page?: string };
}

const POSTS_PER_PAGE = 9;

export async function generateStaticParams() {
  const cats = await sanityFetch<Category[]>({
    query: getCategoriesQuery,
    tags: ['category'],
  });
  return (cats ?? []).map((c) => ({ id: c.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const category = await sanityFetch<Category | null>({
    query: getCategoryBySlugQuery,
    params: { slug: params.id },
    tags: ['category', `category:${params.id}`],
  });
  if (!category) return { title: 'Category not found' };

  const title = `${category.title} | TopRates.ca`;
  const description =
    category.description ||
    `Browse all TopRates.ca articles in the ${category.title} category.`;

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(`/blog/category/${category.slug}`) },
    openGraph: { title, description, type: 'website' },
  };
}

export default async function CategoryPage({ params, searchParams }: RouteParams) {
  const currentPage = Math.max(1, parseInt(searchParams?.page ?? '1', 10) || 1);

  const [category, posts, allCategories] = await Promise.all([
    sanityFetch<Category | null>({
      query: getCategoryBySlugQuery,
      params: { slug: params.id },
      tags: ['category', `category:${params.id}`],
    }),
    sanityFetch<PostCardType[]>({
      query: getPostsByCategoryQuery,
      params: { slug: params.id },
      tags: ['post', `post:category:${params.id}`],
    }),
    sanityFetch<Category[]>({
      query: getCategoriesQuery,
      tags: ['category'],
    }),
  ]);

  if (!category) return notFound();

  const list = posts ?? [];
  const totalPages = Math.max(1, Math.ceil(list.length / POSTS_PER_PAGE));
  const pagePosts = list.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <PageWrapper>
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-2">
        <Link href="/" className="hover:text-[#1a365d]">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#1a365d]">Blog</Link>
        <span>/</span>
        <span className="text-gray-700">{category.title}</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-3">{category.title}</h1>
        {category.description && (
          <p className="text-lg text-gray-600 max-w-3xl">{category.description}</p>
        )}
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h3 className="text-lg font-bold text-[#1a365d] mb-4">All Categories</h3>
            <ul className="space-y-2">
              {(allCategories ?? []).map((c) => (
                <li key={c._id}>
                  <Link
                    href={`/blog/category/${c.slug}`}
                    className={`block px-3 py-2 rounded ${
                      c.slug === category.slug
                        ? 'bg-[#1a365d] text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {c.title}
                    {typeof c.postCount === 'number' && (
                      <span className="ml-2 text-xs opacity-75">({c.postCount})</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="lg:col-span-3">
          {pagePosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {pagePosts.map((p) => (
                  <PostCard key={p._id} post={p} />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                baseUrl={`/blog/category/${category.slug}`}
              />
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg mb-4">
                No articles in this category yet.
              </p>
              <Link href="/blog">
                <Button variant="outline">View All Articles</Button>
              </Link>
            </div>
          )}
        </section>
      </div>
    </PageWrapper>
  );
}
