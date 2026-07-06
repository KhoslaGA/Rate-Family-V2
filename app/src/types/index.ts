/**
 * Common types for TopRates.ca (Webhub4u Inc.)
 */

/* SEO & Metadata */
export interface SEO {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

/* Image types for Sanity integration */
export interface SanityImage {
  _key?: string;
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

/* Rich text block types */
export interface BlockContent {
  _key?: string;
  _type: string;
  style?: string;
  children?: Array<{
    _key: string;
    _type: 'span';
    marks: string[];
    text: string;
  }>;
  markDefs?: Array<{
    _key: string;
    _type: string;
    [key: string]: unknown;
  }>;
  level?: number;
  listItem?: string;
}

/* Common document structure */
export interface Document {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

/* Pagination */
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}

/* Insurance-specific types */
export interface InsuranceType {
  _id: string;
  _type: 'insuranceType';
  name: string;
  slug: string;
  description: string;
  icon?: SanityImage;
  featured?: boolean;
  order?: number;
}

export interface Provider {
  _id: string;
  _type: 'provider';
  name: string;
  slug: string;
  logo: SanityImage;
  description?: string;
  website?: string;
  featured?: boolean;
  rating?: number;
  order?: number;
}

export interface Quote {
  _id: string;
  _type: 'quote';
  insuranceType: string;
  provider: string;
  coverage: string;
  premium: number;
  currency: 'CAD' | 'USD';
  deductible?: number;
  duration: 'monthly' | 'annual';
  createdAt: string;
}

/* Contact & Lead */
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  insuranceType: string;
  zipCode: string;
  message?: string;
}

export interface Lead extends ContactForm {
  _id: string;
  _type: 'lead';
  _createdAt: string;
  status: 'new' | 'contacted' | 'converted' | 'archived';
  notes?: string;
}

/* Response types */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  timestamp: string;
}

export interface ApiError {
  code: string;
  message: string;
  statusCode: number;
  details?: Record<string, unknown>;
}

/* Navigation */
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  icon?: string;
}

export interface MenuItem extends NavItem {
  description?: string;
  featured?: boolean;
}

/* Utility types */
export type WithTimestamps<T> = T & {
  createdAt: string;
  updatedAt: string;
};

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

/* Common status types */
export type Status = 'pending' | 'active' | 'inactive' | 'archived';
export type Priority = 'low' | 'medium' | 'high' | 'urgent';
