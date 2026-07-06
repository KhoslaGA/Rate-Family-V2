import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Category } from '@/types/blog';
import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  category: Category | { name?: string; title?: string; slug: string };
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'success' | 'error' | 'warning' | 'info';
  onClick?: (slug: string) => void;
}

/**
 * CategoryBadge Component
 * Clickable badge linking to category page
 */
export default function CategoryBadge({
  category,
  className,
  variant = 'accent',
  onClick,
}: CategoryBadgeProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(category.slug);
    }
  };

  const badge = (
    <Badge
      variant={variant}
      className={cn('cursor-pointer hover:opacity-80 transition-opacity', className)}
      onClick={handleClick}
    >
      {'title' in category ? category.title : category.name}
    </Badge>
  );

  // Return as link if onClick not provided
  if (!onClick) {
    return (
      <Link href={`/blog/category/${category.slug}`}>
        {badge}
      </Link>
    );
  }

  return badge;
}
