import type { PostCard, RoutePrefix, SanityImage } from '@/types/blog';

/**
 * Build the public URL for a post based on its routePrefix + slug.
 * Matches the TopRates.ca launch plan URL tree:
 *   /blog/<slug>      — news, launch posts
 *   /guides/<slug>    — explainers, coverage, persona, lists
 *   /tools/<slug>     — calculators, checklists, quizzes
 */
export function postUrl(post: { slug: string; routePrefix?: RoutePrefix | string }): string {
  const prefix = (post.routePrefix || 'blog') as RoutePrefix;
  return `/${prefix}/${post.slug}`;
}

/**
 * Safely extract a usable URL from a Sanity image projection.
 */
export function imageUrl(image?: SanityImage | null): string | undefined {
  if (!image || !image.asset) return undefined;
  const asset = image.asset as { url?: string };
  return asset.url;
}

/**
 * Fallback excerpt when a post has none.
 */
export function resolveExcerpt(post: Pick<PostCard, 'excerpt' | 'title'>): string {
  return post.excerpt?.trim() || post.title;
}

/**
 * Compute a reading-time estimate from a word count (~220 wpm).
 */
export function estimateReadingTime(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 220));
}
