'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/brand/Icon';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  className?: string;
}

/**
 * Pagination Component
 * Page navigation with prev/next and page numbers
 */
export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
  className,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Don't show pagination if only one page
  if (totalPages <= 1) {
    return null;
  }

  // Generate page numbers to display (show current +/- 1)
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      // Show all pages if 5 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);

      // Show ellipsis if needed
      if (currentPage > 3) {
        pages.push('...');
      }

      // Show pages around current
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        if (pages[pages.length - 1] !== '...') {
          pages.push(i);
        }
      }

      // Show ellipsis if needed
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const buildPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    return `${baseUrl}?${params.toString()}`;
  };

  const pageNumbers = getPageNumbers();
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div
      className={cn(
        'flex items-center justify-center gap-2 mt-12',
        className
      )}
    >
      {/* Previous Button */}
      {hasPrevPage ? (
        <Link href={buildPageUrl(currentPage - 1)}>
          <Button variant="outline" size="sm">
            <span className="inline-flex items-center gap-1.5"><Icon name="arrowLeft" size={15} color="#F2B441" /> Previous</span>
          </Button>
        </Link>
      ) : (
        <Button variant="outline" size="sm" disabled>
          <span className="inline-flex items-center gap-1.5"><Icon name="arrowLeft" size={15} color="#F2B441" /> Previous</span>
        </Button>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pageNumbers.map((page, idx) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">
                ...
              </span>
            );
          }

          const isCurrentPage = page === currentPage;

          return (
            <Link
              key={page}
              href={buildPageUrl(page as number)}
            >
              <Button
                variant={isCurrentPage ? 'primary' : 'outline'}
                size="sm"
                className={isCurrentPage ? 'pointer-events-none' : ''}
              >
                {page}
              </Button>
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      {hasNextPage ? (
        <Link href={buildPageUrl(currentPage + 1)}>
          <Button variant="outline" size="sm">
            <span className="inline-flex items-center gap-1.5">Next <Icon name="arrowRight" size={15} color="#F2B441" /></span>
          </Button>
        </Link>
      ) : (
        <Button variant="outline" size="sm" disabled>
          <span className="inline-flex items-center gap-1.5">Next <Icon name="arrowRight" size={15} color="#F2B441" /></span>
        </Button>
      )}
    </div>
  );
}
