import type { MetadataRoute } from 'next';
import { sanityFetch } from '@/lib/sanity/client';
import { getAllPostsQuery, getCategoriesQuery } from '@/lib/sanity/queries';
import type { PostCard, Category } from '@/types/blog';
import { postUrl } from '@/lib/sanity/helpers';
import { LANDING_PAGES } from '@/data/landingPages';
import { allTerms, termUrl } from '@/app/glossary/data';
import {
  LOCALES,
  HTML_LANG,
  localizedUrl,
  DEFAULT_LOCALE,
} from '@/i18n/config';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toprates.ca';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch posts and categories in parallel
  const [posts, categories] = await Promise.all([
    sanityFetch<PostCard[]>({ query: getAllPostsQuery, tags: ['post'], revalidate: 3600 }),
    sanityFetch<Category[]>({ query: getCategoriesQuery, tags: ['category'], revalidate: 3600 }),
  ]);

  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    {
      url: `${SITE_URL}/blog/ontario-auto-reform-2026-guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Tier 1 — KLC LLQP-licensed referral, available now
    { url: `${SITE_URL}/life-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/health-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/travel-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

    // Tier 2 — P&C, education only until 2027 RIBO registration
    { url: `${SITE_URL}/auto-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/home-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/business-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },

    // Adjacent verticals
    { url: `${SITE_URL}/mortgages`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/credit-cards`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/credit-cards/methodology`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/investing`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },

    // Educational + brand
    { url: `${SITE_URL}/learn`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/glossary`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/whats-coming`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },

    // Legal
    { url: `${SITE_URL}/legal`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },

    // Note: /coming-soon and /get-quotes intentionally omitted — both have
    // robots noindex via metadata or robots.ts disallow.
  ];

  // Auto-insurance landing pages — provinces, cities, driver types
  const autoLandingPages: MetadataRoute.Sitemap = LANDING_PAGES.map((p) => ({
    url: `${SITE_URL}/auto-insurance/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p.type === 'province' ? 0.7 : 0.6,
  }));

  // Blog post pages
  const postPages: MetadataRoute.Sitemap = (posts ?? []).map((post) => ({
    url: `${SITE_URL}${postUrl(post)}`,
    lastModified: new Date(post.lastUpdated || post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: post.priority === 'P1' ? 0.9 : post.priority === 'P2' ? 0.8 : 0.7,
  }));

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = (categories ?? []).map((cat) => ({
    url: `${SITE_URL}/blog/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Glossary term sub-pages.
  // Terms with authored deep-dive content get a higher priority and a more
  // frequent re-crawl signal; "Full guide coming soon" stubs are lower
  // priority so they don't dilute the higher-value pages.
  const glossaryTermPages: MetadataRoute.Sitemap = allTerms().map((t) => {
    const hasDeepDive = !!t.deepDive?.sections?.length;
    return {
      url: `${SITE_URL}${termUrl(t.slug)}`,
      lastModified: now,
      changeFrequency: hasDeepDive ? ('monthly' as const) : ('yearly' as const),
      priority: hasDeepDive ? 0.6 : 0.3,
    };
  });

  // Multilingual pages — one sitemap entry per locale per multilingual
  // path. Each entry carries hreflang `alternates` so Google groups the
  // variants together. As more pages become multilingual, add their
  // canonical paths to MULTILINGUAL_PATHS.
  const MULTILINGUAL_PATHS = ['/newcomers'];
  const localizedPages: MetadataRoute.Sitemap = [];
  for (const path of MULTILINGUAL_PATHS) {
    const alternates: Record<string, string> = {};
    for (const loc of LOCALES) {
      alternates[HTML_LANG[loc]] = `${SITE_URL}${localizedUrl(loc, path)}`;
    }
    alternates['x-default'] = `${SITE_URL}${localizedUrl(DEFAULT_LOCALE, path)}`;
    for (const loc of LOCALES) {
      localizedPages.push({
        url: `${SITE_URL}${localizedUrl(loc, path)}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: loc === DEFAULT_LOCALE ? 0.7 : 0.5,
        alternates: { languages: alternates },
      });
    }
  }

  return [
    ...staticPages,
    ...autoLandingPages,
    ...postPages,
    ...categoryPages,
    ...glossaryTermPages,
    ...localizedPages,
  ];
}
