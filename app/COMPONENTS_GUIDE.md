# Toprates.ca Components & Configuration Guide

## Overview
This guide describes all the UI components, Sanity CMS configuration, and shared utilities created for the Toprates.ca Next.js 13.5 App Router project.

## Quick Start

### 1. Install Dependencies
```bash
npm install class-variance-authority clsx tailwind-merge
npm install @sanity/client @sanity/image-url next-sanity
npm install --save-dev sanity @sanity/desk @sanity/vision
```

### 2. Environment Setup
Copy `.env.example` to `.env.local` and configure:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
NEXT_PUBLIC_SITE_URL=https://toprates.ca
```

### 3. Initialize Sanity Studio
```bash
npm run sanity init
# or use existing project configuration
```

---

## UI Components

### Button Component
**File:** `/src/components/ui/Button.tsx`

Reusable button with multiple variants and sizes.

**Variants:**
- `primary` - Deep blue (#1a365d)
- `secondary` - Teal (#0d9488)
- `accent` - Amber (#f59e0b)
- `outline` - Outlined style

**Sizes:**
- `sm` - Small
- `md` - Medium (default)
- `lg` - Large

**Usage:**
```tsx
import { Button } from '@/components/ui/Button';

// As button
<Button variant="primary" size="lg">
  Get Quote
</Button>

// As link
<Button href="/contact" variant="secondary">
  Contact Us
</Button>

// With onClick
<Button onClick={() => handleClick()} variant="accent">
  Submit
</Button>
```

### Card Component
**File:** `/src/components/ui/Card.tsx`

Flexible card layout with optional image, title, description, and footer.

**Subcomponents:**
- `Card` - Main container
- `CardImage` - Image section with alt text
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardDescription` - Description text
- `CardContent` - Main content area
- `CardFooter` - Footer section

**Usage:**
```tsx
import {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/Card';

<Card>
  <CardImage
    src="/insurance-image.jpg"
    alt="Auto Insurance"
    width={400}
    height={250}
  />
  <CardHeader>
    <CardTitle>Auto Insurance</CardTitle>
    <CardDescription>
      Comprehensive coverage for your vehicle
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>Competitive rates and 24/7 support</p>
  </CardContent>
  <CardFooter>
    <Button>Get Quote</Button>
  </CardFooter>
</Card>
```

### Input Component
**File:** `/src/components/ui/Input.tsx`

Text input with label, error states, and helper text.

**Props:**
- `label` - Input label
- `error` - Error message
- `helperText` - Helper text below input
- `required` - Shows required asterisk
- All standard HTML input attributes

**Usage:**
```tsx
import { Input } from '@/components/ui/Input';

<Input
  label="Email Address"
  type="email"
  placeholder="your@email.com"
  error={errors.email}
  helperText="We'll never share your email"
  required
  onChange={handleChange}
  value={email}
/>
```

### Badge Component
**File:** `/src/components/ui/Badge.tsx`

Small tag/badge with color variants.

**Variants:**
- `primary` - Deep blue
- `secondary` - Teal
- `accent` - Amber
- `outline` - Outlined
- `success` - Green
- `error` - Red
- `warning` - Yellow
- `info` - Blue

**Usage:**
```tsx
import { Badge } from '@/components/ui/Badge';

<Badge variant="success">Approved</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="primary">Featured</Badge>
```

---

## Sanity CMS Configuration

### Client Setup
**File:** `/src/lib/sanity/client.ts`

Provides both regular and preview clients for Sanity.

```tsx
import { client, previewClient, getClient } from '@/lib/sanity/client';

// Use preview mode for draft content
const data = await getClient(isDraftMode).fetch(query);
```

### GROQ Queries
**File:** `/src/lib/sanity/queries.ts`

Pre-built queries:
- `getAllPostsQuery` - Fetch all published posts
- `getPostBySlugQuery` - Fetch single post by slug
- `getPostsByCategoryQuery` - Fetch posts in category
- `getCategoriesQuery` - Fetch all categories
- `getRecentPostsQuery` - Fetch recent posts (limited)
- `getAuthorBySlugQuery` - Fetch author details
- `getPostsByAuthorQuery` - Fetch posts by author
- `countPostsQuery` - Count total posts

**Usage:**
```tsx
import { client } from '@/lib/sanity/client';
import { getAllPostsQuery } from '@/lib/sanity/queries';

const posts = await client.fetch(getAllPostsQuery);
```

### Image Utilities
**File:** `/src/lib/sanity/image.ts`

Optimized image utilities using `@sanity/image-url`.

**Functions:**
- `urlFor(source)` - Base image URL builder
- `getImageUrl(source, width)` - Optimized image URL
- `getResponsiveImageUrls(source)` - Responsive breakpoints
- `getImageDimensions(source)` - Extract dimensions
- `getOptimizedImageUrl(source, options)` - Custom optimization

**Usage:**
```tsx
import { getImageUrl, getImageDimensions } from '@/lib/sanity/image';
import Image from 'next/image';

const imageUrl = getImageUrl(post.mainImage, 800);
const dimensions = getImageDimensions(post.mainImage);

<Image
  src={imageUrl}
  alt={post.mainImage.alt}
  width={dimensions?.width}
  height={dimensions?.height}
/>
```

### Schemas

#### Post Schema
**File:** `/sanity/schemas/post.ts`

Blog post document with:
- `title` (required)
- `slug` (required, auto-generated from title)
- `excerpt` - Short summary
- `mainImage` - Featured image with alt text
- `author` - Reference to author
- `categories` - Array of category references
- `publishedAt` (required)
- `body` - Rich text content

#### Author Schema
**File:** `/sanity/schemas/author.ts`

Author document with:
- `name` (required)
- `slug` (required, auto-generated)
- `image` - Profile image
- `bio` - Author biography

#### Category Schema
**File:** `/sanity/schemas/category.ts`

Category document with:
- `title` (required)
- `slug` (required, auto-generated)
- `description` - Category description

### Sanity Studio Configuration
**File:** `/sanity/sanity.config.ts`

Configured with:
- Desk tool for content management
- Vision tool for GROQ query testing
- All schemas (post, author, category)

---

## Shared Components

### ContactForm Component
**File:** `/src/components/shared/ContactForm.tsx`

Client-side contact form with validation.

**Features:**
- Form validation (name, email, phone, insurance type, message)
- Canadian phone number validation
- Email validation
- Insurance type dropdown with 7 options
- Success/error states
- Responsive grid layout

**Props:**
- `onSuccess?` - Callback when form submits successfully
- `className?` - Additional CSS classes

**API Route Required:**
Create `/src/app/api/contact/route.ts` to handle submissions:

```tsx
export async function POST(request: Request) {
  const body = await request.json();
  
  // TODO: Process form submission
  // Send email, save to database, etc.
  
  return Response.json({ success: true });
}
```

**Usage:**
```tsx
import ContactForm from '@/components/shared/ContactForm';

export default function ContactPage() {
  return (
    <ContactForm onSuccess={() => console.log('Submitted!')} />
  );
}
```

### SEO Helper Functions
**File:** `/src/components/shared/SEO.tsx`

Functions for generating metadata and structured data.

**Main Functions:**

#### `generateSEO(props)`
Generates Next.js Metadata object for pages.

```tsx
import { generateSEO } from '@/components/shared/SEO';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Auto Insurance in Toronto',
  description: 'Find affordable auto insurance quotes...',
  keywords: ['auto insurance', 'Toronto', 'Canada'],
  ogImage: '/og-auto-insurance.png',
  canonicalUrl: 'https://toprates.ca/auto-insurance',
});

export default function Page() {
  return <div>Content</div>;
}
```

#### `generateOrganizationSchema()`
Organization structured data (place in layout or page):

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(generateOrganizationSchema()),
  }}
/>
```

#### `generateArticleSchema(props)`
Blog post structured data:

```tsx
const schema = generateArticleSchema({
  title: 'How to Choose Auto Insurance',
  description: 'Guide to selecting the right policy...',
  imageUrl: 'https://...',
  datePublished: '2024-01-15T10:00:00Z',
  authorName: 'John Smith',
  authorUrl: 'https://toprates.ca/authors/john-smith',
});

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

#### `generateBreadcrumbSchema(items)`
Navigation breadcrumb structured data.

#### `generateFAQSchema(faqs)`
FAQ structured data.

#### `generateLocalBusinessSchema(props)`
Local business information.

---

## Utility Functions
**File:** `/src/lib/utils.ts`

Available utilities:
- `cn()` - Merge Tailwind classes
- `formatDate()` - Format dates with multiple formats
- `calculateReadingTime()` - Estimate article reading time
- `truncate()` - Truncate text with ellipsis
- `formatCurrency()` - Format currency (CAD)
- `generateSlug()` - Create URL slugs
- `isValidEmail()` - Email validation
- `isValidPhoneCA()` - Canadian phone validation
- `formatPostalCode()` - Format postal codes
- `isValidPostalCodeCA()` - Postal code validation
- `scrollToElement()` - Smooth scroll
- `isInViewport()` - Check visibility

---

## Color Scheme

**Primary (Deep Blue):** `#1a365d`
```css
bg-[#1a365d] text-[#1a365d] border-[#1a365d]
```

**Secondary (Teal):** `#0d9488`
```css
bg-[#0d9488] text-[#0d9488] border-[#0d9488]
```

**Accent (Amber):** `#f59e0b`
```css
bg-[#f59e0b] text-[#f59e0b] border-[#f59e0b]
```

---

## TypeScript Support

All components are fully typed with TypeScript. Import types as needed:

```tsx
import type { ButtonProps } from '@/components/ui/Button';
import type { InputProps } from '@/components/ui/Input';
import type { CardProps } from '@/components/ui/Card';
```

---

## Next Steps

1. Create the Contact API route: `/src/app/api/contact/route.ts`
2. Set up Sanity environment variables
3. Create sample content in Sanity Studio
4. Build insurance quote pages using the components
5. Add blog functionality using Sanity posts
6. Customize metadata/SEO per page

---

## Need Help?

- Sanity Docs: https://www.sanity.io/docs
- Next.js 13.5 Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
