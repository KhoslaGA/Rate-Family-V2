import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

interface CardImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  )
);

Card.displayName = 'Card';

const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(
  ({ src, alt, width = 400, height = 250, className }, ref) => (
    <div ref={ref} className={cn('overflow-hidden bg-gray-200', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover"
      />
    </div>
  )
);

CardImage.displayName = 'CardImage';

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children }, ref) => (
    <div ref={ref} className={cn('px-6 pt-6', className)}>
      {children}
    </div>
  )
);

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-xl font-bold text-[#1a365d] mb-2',
        className
      )}
    >
      {children}
    </h3>
  )
);

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children }, ref) => (
    <p
      ref={ref}
      className={cn(
        'text-gray-600 text-sm leading-relaxed',
        className
      )}
    >
      {children}
    </p>
  )
);

CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children }, ref) => (
    <div ref={ref} className={cn('px-6 py-4', className)}>
      {children}
    </div>
  )
);

CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-4 bg-gray-50 border-t border-gray-100', className)}
    >
      {children}
    </div>
  )
);

CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
export type {
  CardProps,
  CardImageProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
};
