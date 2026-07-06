import type { Post } from '@/types/blog';
import { postUrl, imageUrl } from '@/lib/sanity/helpers';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toprates.ca';
const ORG_NAME = 'TopRates.ca';
const ORG_LOGO = `${SITE_URL}/logo.png`;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

/**
 * Article / BlogPosting JSON-LD.
 * Used on every article for rich results.
 */
export function articleJsonLd(post: Post) {
  const url = absoluteUrl(postUrl(post));
  const ogImage = post.seo?.ogImage?.asset?.url ?? imageUrl(post.mainImage);

  return {
    '@context': 'https://schema.org',
    '@type': post.articleType === 'news' ? 'NewsArticle' : 'Article',
    headline: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    image: ogImage ? [ogImage] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.lastUpdated || post.publishedAt,
    author: post.author
      ? {
          '@type': 'Person',
          name: post.author.name,
          url: absoluteUrl(`/author/${post.author.slug}`),
        }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: { '@type': 'ImageObject', url: ORG_LOGO },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: [
      post.seo?.primaryKeyword,
      ...(post.seo?.secondaryKeywords ?? []),
      ...(post.tags ?? []),
    ]
      .filter(Boolean)
      .join(', '),
  };
}

/**
 * FAQPage JSON-LD.
 * Only emit when post has faqItems.
 */
export function faqJsonLd(faqItems: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList JSON-LD.
 */
export function breadcrumbJsonLd(crumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.url),
    })),
  };
}
