'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface PostBodyProps {
  content: string | React.ReactNode;
  className?: string;
}

/**
 * PostBody Component
 * Renders blog post body content with proper typography and styling
 * Can accept either HTML string or React components
 */
export default function PostBody({ content, className }: PostBodyProps) {
  return (
    <article
      className={cn(
        'prose prose-lg max-w-none',
        'text-gray-700 leading-relaxed',
        className
      )}
    >
      {typeof content === 'string' ? (
        <div
          className="space-y-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <div className="space-y-4">
          {content}
        </div>
      )}

      <style jsx>{`
        :global(article h2) {
          @apply text-2xl font-bold text-[#1a365d] mt-8 mb-4;
        }

        :global(article h3) {
          @apply text-xl font-bold text-[#1a365d] mt-6 mb-3;
        }

        :global(article h4) {
          @apply text-lg font-semibold text-[#1a365d] mt-4 mb-2;
        }

        :global(article p) {
          @apply mb-4;
        }

        :global(article strong) {
          @apply font-semibold text-[#1a365d];
        }

        :global(article em) {
          @apply italic text-gray-700;
        }

        :global(article ul) {
          @apply list-disc list-inside space-y-2 mb-4 ml-2;
        }

        :global(article ol) {
          @apply list-decimal list-inside space-y-2 mb-4 ml-2;
        }

        :global(article li) {
          @apply text-gray-700;
        }

        :global(article blockquote) {
          @apply border-l-4 border-[#0d9488] pl-4 italic text-gray-600 my-4 bg-gray-50 py-2;
        }

        :global(article code) {
          @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono text-[#d1495a];
        }

        :global(article pre) {
          @apply bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4;
        }

        :global(article pre code) {
          @apply bg-transparent p-0 text-white;
        }

        :global(article a) {
          @apply text-[#0d9488] hover:text-[#0a7566] underline;
        }

        :global(article img) {
          @apply rounded-lg my-4 max-w-full h-auto;
        }

        :global(article hr) {
          @apply border-t border-gray-200 my-6;
        }

        :global(article table) {
          @apply w-full border-collapse border border-gray-300 my-4;
        }

        :global(article th) {
          @apply bg-gray-100 p-2 border border-gray-300 font-semibold text-[#1a365d];
        }

        :global(article td) {
          @apply p-2 border border-gray-300;
        }
      `}</style>
    </article>
  );
}
