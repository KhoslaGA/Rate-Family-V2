/**
 * TopRates Lab — types for research briefings.
 *
 * Shape mirrors `sanity/schemas/labBriefing.ts` and the GROQ projections
 * in `src/lib/sanity/queries.ts`.
 */

import type {
  AuthorRef,
  PortableTextBlock,
  SanityImage,
  SanityImageAsset,
} from './blog';

export type LabTopic =
  | 'auto'
  | 'home'
  | 'life'
  | 'rate-index'
  | 'reform'
  | 'methodology'
  | 'market';

export type DataSourceKind =
  | 'internal'
  | 'regulator'
  | 'industry'
  | 'government'
  | 'academic'
  | 'other';

export interface LabKeyFinding {
  finding: string;
  metric?: string;
}

export interface LabDataSource {
  label: string;
  url?: string;
  publishedDate?: string;
  kind?: DataSourceKind;
}

export interface LabSEO {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  ogImage?: { asset?: { url: string } };
}

export interface LabBriefingCard {
  _id: string;
  issueNumber: number;
  title: string;
  subtitle?: string;
  topic: LabTopic;
  slug: string;
  summary: string;
  publishedAt: string;
  snapshotDate: string;
  lastUpdated?: string;
  readingTime?: number;
  featured?: boolean;
  mainImage?: SanityImage & {
    asset?: SanityImageAsset;
    caption?: string;
  };
  analyst: AuthorRef;
}

export interface LabBriefing extends LabBriefingCard {
  body?: PortableTextBlock[];
  methodology?: PortableTextBlock[];
  keyFindings?: LabKeyFinding[];
  dataSources?: LabDataSource[];
  sampleSize?: string;
  downloadableData?: {
    asset?: {
      url: string;
      originalFilename?: string;
      size?: number;
    };
  };
  relatedRateIndex?: string;
  tags?: string[];
  seo?: LabSEO;
  reviewedBy?: AuthorRef | null;
  relatedBriefings?: Array<
    Pick<
      LabBriefingCard,
      | '_id'
      | 'issueNumber'
      | 'title'
      | 'subtitle'
      | 'topic'
      | 'slug'
      | 'summary'
      | 'publishedAt'
      | 'readingTime'
      | 'mainImage'
    >
  >;
}

export interface PaginatedLabBriefings {
  items: LabBriefingCard[];
  total: number;
}

export const LAB_TOPIC_LABELS: Record<LabTopic, string> = {
  auto: 'Auto',
  home: 'Home',
  life: 'Life',
  'rate-index': 'Rate Index',
  reform: 'Reform',
  methodology: 'Methodology',
  market: 'Market',
};

export function formatIssueNumber(n: number): string {
  return `No. ${String(n).padStart(2, '0')}`;
}

export function briefingUrl(b: { slug: string }): string {
  return `/lab/${b.slug}`;
}
