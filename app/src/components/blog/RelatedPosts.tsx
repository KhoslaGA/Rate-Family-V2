import React from 'react';
import Link from 'next/link';
import type { PostCard } from '@/types/blog';
import { postUrl, imageUrl, resolveExcerpt } from '@/lib/sanity/helpers';
import { cn } from '@/lib/utils';

type RelatedPost = Pick<
  PostCard,
  '_id' | 'title' | 'slug' | 'routePrefix' | 'excerpt' | 'publishedAt' | 'readingTime' | 'mainImage'
> & {
  primaryCategory?: { title: string; slug: string } | null;
};

interface RelatedPostsProps {
  posts: RelatedPost[];
  className?: string;
}

/**
 * RelatedPosts Component
 * Displays a grid of related articles at the bottom of a post.
 */
export default function RelatedPosts({ posts, className }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className={cn('mt-12', className)}>
      <h2 className="text-2xl font-bold text-[#1a365d] mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => {
          const img = imageUrl(post.mainImage);
          return (
            <Link
              key={post._id}
              href={postUrl(post)}
              className="group block bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {img && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={img}
                  alt={post.mainImage?.alt || post.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-4">
                {post.primaryCategory && (
                  <span className="text-xs font-semibold text-[#0d9488] uppercase tracking-wide">
                    {post.primaryCategory.title}
                  </span>
                )}
                <h3 className="text-base font-bold text-[#1a365d] mt-1 mb-2 line-clamp-2 group-hover:text-[#0d9488] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {resolveExcerpt(post as any)}
                </p>
                <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-CA')}</span>
                  {post.readingTime && <span>{post.readingTime} min read</span>}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
