/**
 * Blog / Article types for TopRates.ca.
 *
 * Shape is driven by the Sanity schemas in /sanity/schemas/* and the GROQ
 * projections in /src/lib/sanity/queries.ts.
 */

/* ---------------- Shared ---------------- */

export type RoutePrefix = 'blog' | 'guides' | 'tools';

export type ArticleType = 'pillar' | 'guide' | 'persona' | 'list' | 'tool' | 'news';

export type ContentPillar =
  | 'reform-explainers'
  | 'coverage-guides'
  | 'persona-guides'
  | 'comparison-lists'
  | 'tools-interactive';

export type SearchIntent = 'info' | 'trans' | 'nav' | 'commercial';

export type Priority = 'P1' | 'P2' | 'P3';

export interface SanityImageAsset {
  url: string;
  metadata?: {
    dimensions?: { width: number; height: number };
    lqip?: string;
  };
}

export interface SanityImage {
  _key?: string;
  _type?: 'image';
  alt?: string;
  asset?: SanityImageAsset | { _ref: string; _type: 'reference' };
}

export interface AuthorRef {
  _id: string;
  name: string;
  slug: string;
  bio?: string;
  image?: { asset?: { url: string } };
}

export interface CategoryRef {
  _id: string;
  title: string;
  slug: string;
  pillar?: ContentPillar;
}

export interface Category extends CategoryRef {
  description?: string;
  seoGoal?: string;
  order?: number;
  postCount?: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SourceCitation {
  label: string;
  url: string;
  publishedDate?: string;
}

export interface PostSEO {
  metaTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  canonicalUrl?: string;
  noindex?: boolean;
  ogImage?: { asset?: { url: string } };
}

/* ---------------- Listing (card) shape ---------------- */

export interface PostCard {
  _id: string;
  title: string;
  slug: string;
  routePrefix: RoutePrefix;
  excerpt?: string;
  publishedAt: string;
  lastUpdated?: string;
  readingTime?: number;
  wordCountTarget?: number;
  articleType?: ArticleType;
  priority?: Priority;
  featured?: boolean;
  mainImage?: SanityImage & { asset?: SanityImageAsset };
  author: AuthorRef;
  categories?: CategoryRef[];
  primaryCategory?: CategoryRef | null;
}

/* Legacy name used by existing components */
export type PostCardData = PostCard;

/* ---------------- Full detail shape ---------------- */

export interface PortableTextBlock {
  _key?: string;
  _type: string;
  [key: string]: unknown;
}

export interface Post extends PostCard {
  body?: PortableTextBlock[];
  tags?: string[];
  searchIntent?: SearchIntent;
  seo?: PostSEO;
  faqItems?: FaqItem[];
  sources?: SourceCitation[];
  reviewedBy?: AuthorRef | null;
  relatedPosts?: Array<
    Pick<
      PostCard,
      '_id' | 'title' | 'slug' | 'routePrefix' | 'excerpt' | 'publishedAt' | 'readingTime' | 'mainImage'
    > & {
      primaryCategory?: Pick<CategoryRef, 'title' | 'slug'> | null;
    }
  >;
}

/* ---------------- Query result helpers ---------------- */

export interface PaginatedPosts {
  items: PostCard[];
  total: number;
}

export interface BlogStats {
  totalPosts: number;
  totalCategories: number;
  avgReadingTime: number;
}

/* ---------------- Newsletter / Waitlist ---------------- */

export interface NewsletterSubscriptionInput {
  email: string;
  source?: string;
  campaign?: string;
  categories?: string[];
}
