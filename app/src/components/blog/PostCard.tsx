import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { PostCard as PostCardType } from '@/types/blog';
import { postUrl, imageUrl, resolveExcerpt } from '@/lib/sanity/helpers';

interface PostCardProps {
  post: PostCardType;
}

/**
 * PostCard Component
 * Displays a post preview card. Works with both /blog and /guides/* routes
 * by resolving the URL from post.routePrefix via postUrl().
 */
export default function PostCard({ post }: PostCardProps) {
  const publishDate = new Date(post.publishedAt).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const category = post.primaryCategory ?? post.categories?.[0];
  const imgSrc = imageUrl(post.mainImage);
  const authorAvatar = post.author?.image?.asset?.url;

  return (
    <Link href={postUrl(post)}>
      <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer">
        {imgSrc && <CardImage src={imgSrc} alt={post.mainImage?.alt || post.title} />}

        <CardHeader className="pb-2">
          {category && (
            <Badge variant="accent" className="w-fit mb-2">
              {category.title}
            </Badge>
          )}
          <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
        </CardHeader>

        <CardContent className="pb-3">
          <CardDescription className="line-clamp-2">
            {resolveExcerpt(post)}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {authorAvatar && (
              <Image
                src={authorAvatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-700 truncate">
                {post.author?.name}
              </p>
              <p className="text-xs text-gray-500">{publishDate}</p>
            </div>
          </div>
          {post.readingTime ? (
            <div className="text-xs text-gray-500 whitespace-nowrap">
              {post.readingTime} min read
            </div>
          ) : null}
        </CardFooter>
      </Card>
    </Link>
  );
}
