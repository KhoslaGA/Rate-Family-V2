import { sanityFetch } from '@/lib/sanity/client';
import { getAllPostsQuery } from '@/lib/sanity/queries';
import type { PostCard } from '@/types/blog';
import { postUrl, resolveExcerpt } from '@/lib/sanity/helpers';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toprates.ca';
const FEED_TITLE = 'TopRates.ca — Insurance Insights & Resources';
const FEED_DESCRIPTION =
  'Expert guides on the 2026 Ontario auto insurance reform and Canadian coverage options.';

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = await sanityFetch<PostCard[]>({
    query: getAllPostsQuery,
    tags: ['post'],
    revalidate: 3600,
  });

  const items = (posts ?? [])
    .slice(0, 50) // limit RSS to latest 50
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}${postUrl(post)}</link>
      <guid isPermaLink="true">${SITE_URL}${postUrl(post)}</guid>
      <description>${escapeXml(resolveExcerpt(post))}</description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      ${post.primaryCategory ? `<category>${escapeXml(post.primaryCategory.title)}</category>` : ''}
      ${post.author ? `<dc:creator>${escapeXml(post.author.name)}</dc:creator>` : ''}
    </item>`,
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-ca</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(rss.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
    },
  });
}
