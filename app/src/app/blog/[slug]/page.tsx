import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import PageWrapper from '@/components/layout/PageWrapper';
import PostBody from '@/components/blog/PostBody';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { sanityFetch } from '@/lib/sanity/client';
import { getPostBySlugQuery, getAllPostSlugsQuery } from '@/lib/sanity/queries';
import type { Post } from '@/types/blog';
import { postUrl, imageUrl, resolveExcerpt } from '@/lib/sanity/helpers';
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo/jsonLd';

export const revalidate = 60;

interface RouteParams {
  params: { slug: string };
}

/* Static params for ISR */
export async function generateStaticParams() {
  const slugs = await sanityFetch<Array<{ slug: string; routePrefix: string }>>({
    query: getAllPostSlugsQuery,
    tags: ['post'],
  });
  return (slugs ?? [])
    .filter((s) => s.routePrefix === 'blog')
    .map((s) => ({ slug: s.slug }));
}

/* Per-post metadata */
export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const post = await sanityFetch<Post | null>({
    query: getPostBySlugQuery,
    params: { slug: params.slug },
    tags: ['post', `post:${params.slug}`],
  });

  if (!post) {
    return { title: 'Post not found' };
  }

  const title = post.seo?.metaTitle || `${post.title} | TopRates.ca`;
  const description = post.seo?.metaDescription || resolveExcerpt(post);
  const canonical = post.seo?.canonicalUrl || absoluteUrl(postUrl(post));
  const ogImage = post.seo?.ogImage?.asset?.url || imageUrl(post.mainImage);

  return {
    title,
    description,
    alternates: { canonical },
    robots: post.seo?.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.lastUpdated || post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
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

/* Portable Text render config */
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

export default async function PostDetailPage({ params }: RouteParams) {
  const post = await sanityFetch<Post | null>({
    query: getPostBySlugQuery,
    params: { slug: params.slug },
    tags: ['post', `post:${params.slug}`],
  });

  if (!post) return notFound();

  const heroImg = imageUrl(post.mainImage);
  const category = post.primaryCategory ?? post.categories?.[0] ?? null;

  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    ...(category ? [{ name: category.title, url: `/blog?category=${category.slug}` }] : []),
    { name: post.title, url: postUrl(post) },
  ];

  return (
    <PageWrapper>
      {/* JSON-LD: Article + BreadcrumbList + (optional) FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }}
      />
      {post.faqItems && post.faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(post.faqItems)) }}
        />
      )}

      <article className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-2">
          {crumbs.map((c, i) => (
            <span key={c.url} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
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

        {/* Header */}
        <header className="mb-8">
          {category && (
            <Badge variant="accent" className="mb-3">
              {category.title}
            </Badge>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-[#1a365d] mb-4">{post.title}</h1>
          {post.excerpt && (
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
          )}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-t border-b border-gray-200 py-4">
            {post.author && (
              <span>
                By <strong className="text-gray-700">{post.author.name}</strong>
              </span>
            )}
            <span>&bull;</span>
            <span>Published {new Date(post.publishedAt).toLocaleDateString('en-CA')}</span>
            {post.lastUpdated && post.lastUpdated !== post.publishedAt && (
              <>
                <span>&bull;</span>
                <span>Updated {new Date(post.lastUpdated).toLocaleDateString('en-CA')}</span>
              </>
            )}
            {post.readingTime ? (
              <>
                <span>&bull;</span>
                <span>{post.readingTime} min read</span>
              </>
            ) : null}
          </div>
        </header>

        {/* Hero */}
        {heroImg && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={heroImg}
            alt={post.mainImage?.alt || post.title}
            className="w-full rounded-lg shadow-md mb-8 object-cover"
          />
        )}

        {/* Body */}
        {post.body && post.body.length > 0 ? (
          <PostBody content={<PortableText value={post.body as any} components={ptComponents} />} />
        ) : (
          <p className="text-gray-500 italic">Content coming soon.</p>
        )}

        {/* Sources (E-E-A-T) */}
        {post.sources && post.sources.length > 0 && (
          <section className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold text-[#1a365d] mb-4">Sources</h2>
            <ul className="space-y-2 text-sm">
              {post.sources.map((s, i) => (
                <li key={`${s.url}-${i}`}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a365d] underline hover:no-underline"
                  >
                    {s.label}
                  </a>
                  {s.publishedDate && (
                    <span className="text-gray-500 ml-2">
                      ({new Date(s.publishedDate).toLocaleDateString('en-CA')})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ */}
        {post.faqItems && post.faqItems.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faqItems.map((f, i) => (
                <details
                  key={i}
                  className="p-4 bg-white rounded-lg border border-gray-200 group"
                >
                  <summary className="font-semibold text-[#1a365d] cursor-pointer list-none flex justify-between items-center">
                    <span>{f.question}</span>
                    <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Waitlist CTA */}
        <section className="mt-12 p-8 rounded-lg bg-gradient-to-br from-[#1a365d] to-[#2563eb] text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Join the TopRates.ca waitlist
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Be first to compare Ontario auto insurance rates when we launch. No spam — just
            reform updates and a heads-up when the quote engine goes live.
          </p>
          <form
            action="/api/waitlist"
            method="post"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input type="hidden" name="source" value={postUrl(post)} />
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="flex-1 px-4 py-3 rounded-md text-gray-900"
            />
            <Button type="submit" variant="accent">
              Join waitlist
            </Button>
          </form>
        </section>

        {/* Author bio */}
        {post.author && (
          <div className="mt-12">
            <AuthorBio author={post.author as any} />
          </div>
        )}

        {/* Related posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-12">
            <RelatedPosts posts={post.relatedPosts as any} />
          </div>
        )}
      </article>
    </PageWrapper>
  );
}
