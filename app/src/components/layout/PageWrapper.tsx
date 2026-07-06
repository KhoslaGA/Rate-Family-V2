import React from 'react'

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

export default function PageWrapper({
  children,
  className = '',
  maxWidth = 'xl',
}: PageWrapperProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-5xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <div
      className={`
        mx-auto px-4 sm:px-6 lg:px-8 py-12
        ${maxWidthClasses[maxWidth]}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
