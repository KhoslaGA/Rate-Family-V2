import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Icon } from '@/components/brand/Icon';
import { cn } from '@/lib/utils';

/**
 * Shape this component consumes — what a GROQ query projects, not raw Sanity.
 * The wire-level Author type lives in @/types/blog.
 */
export interface AuthorView {
  name: string;
  bio?: string;
  url?: string;
  image?: { url: string };
}

interface AuthorBioProps {
  author: AuthorView;
  className?: string;
}

/**
 * AuthorBio Component
 * Displays author information with photo and biography
 */
export default function AuthorBio({ author, className }: AuthorBioProps) {
  return (
    <Card className={cn('bg-gradient-to-br from-blue-50 to-teal-50', className)}>
      <CardHeader>
        <CardTitle className="text-lg">About the Author</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col sm:flex-row gap-4">
        {author.image && (
          <div className="flex-shrink-0">
            <Image
              src={author.image.url}
              alt={author.name}
              width={100}
              height={100}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
        )}

        <div className="flex-grow">
          <h4 className="text-lg font-bold text-[#1a365d] mb-1">
            {author.name}
          </h4>

          {author.bio && (
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {author.bio}
            </p>
          )}

          {author.url && (
            <a
              href={author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#0d9488] hover:text-[#0a7566] font-medium inline-flex items-center gap-1.5"
            >
              Visit Profile <Icon name="arrowRight" size={15} color="#F2B441" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
