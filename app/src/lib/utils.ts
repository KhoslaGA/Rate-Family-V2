/**
 * Utility functions for TopRates.ca application
 */

/**
 * Merge class names conditionally
 * Utility for combining Tailwind classes safely
 */
export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes
    .filter((cls): cls is string => typeof cls === 'string' && cls.length > 0)
    .join(' ');
}

/**
 * Format date to readable string
 * @param date - Date string or Date object
 * @param format - Format type: 'short', 'long', 'full', 'relative'
 * @returns Formatted date string
 */
export function formatDate(
  date: string | Date,
  format: 'short' | 'long' | 'full' | 'relative' = 'long'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    return 'Invalid date';
  }

  switch (format) {
    case 'short':
      return dateObj.toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });

    case 'long':
      return dateObj.toLocaleDateString('en-CA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

    case 'full':
      return dateObj.toLocaleDateString('en-CA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

    case 'relative':
      return getRelativeTime(dateObj);

    default:
      return dateObj.toLocaleDateString('en-CA');
  }
}

/**
 * Get relative time string (e.g., "2 days ago")
 */
function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;

  return `${Math.floor(diffDays / 365)}y ago`;
}

/**
 * Calculate reading time for article content
 * Based on average reading speed of 200 words per minute
 * @param text - Article text content
 * @param wordsPerMinute - Average reading speed (default: 200)
 * @returns Reading time in minutes (minimum 1)
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  const wordCount = countWords(text);
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readingTime);
}

/**
 * Count words in text
 */
function countWords(text: string): number {
  const trimmed = text.trim();
  if (trimmed.length === 0) return 0;

  // Split by whitespace and filter empty strings
  return trimmed.split(/\s+/).length;
}

/**
 * Format reading time to string
 * @param minutes - Reading time in minutes
 * @returns Formatted string (e.g., "5 min read")
 */
export function formatReadingTime(minutes: number): string {
  if (minutes < 1) return 'less than 1 min read';
  return `${minutes} min read`;
}

/**
 * Truncate text to specified length with ellipsis
 * @param text - Text to truncate
 * @param length - Maximum length
 * @param suffix - Suffix to add (default: '...')
 * @returns Truncated text
 */
export function truncate(text: string, length: number, suffix: string = '...'): string {
  if (text.length <= length) return text;
  return text.slice(0, length - suffix.length) + suffix;
}

/**
 * Format currency value
 * @param value - Numeric value
 * @param currency - Currency code (default: 'CAD')
 * @param locale - Locale string (default: 'en-CA')
 * @returns Formatted currency string
 */
export function formatCurrency(
  value: number,
  currency: string = 'CAD',
  locale: string = 'en-CA'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Generate slug from text
 * @param text - Text to convert to slug
 * @returns URL-friendly slug
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Parse slug to readable text
 * @param slug - URL slug
 * @returns Human-readable text
 */
export function slugToText(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Validate email address
 * @param email - Email to validate
 * @returns True if valid email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (Canadian format)
 * @param phone - Phone number to validate
 * @returns True if valid format
 */
export function isValidPhoneCA(phone: string): boolean {
  // Accepts: (XXX) XXX-XXXX, XXX-XXX-XXXX, XXXXXXXXXX, +1-XXX-XXX-XXXX
  const phoneRegex = /^(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Format Canadian postal code
 * @param postal - Postal code input
 * @returns Formatted postal code (A1A 1A1)
 */
export function formatPostalCode(postal: string): string {
  const cleaned = postal.toUpperCase().replace(/\s/g, '');
  if (cleaned.length !== 6) return postal;
  return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
}

/**
 * Check if postal code is valid Canadian format
 * @param postal - Postal code to validate
 * @returns True if valid format
 */
export function isValidPostalCodeCA(postal: string): boolean {
  const postalRegex = /^[A-Z][0-9][A-Z]\s?[0-9][A-Z][0-9]$/i;
  return postalRegex.test(postal);
}

/**
 * Deep merge objects
 * @param target - Target object
 * @param source - Source object to merge
 * @returns Merged object
 */
export function deepMerge<T extends Record<string, unknown>>(
  target: T,
  source: Partial<T>
): T {
  const result = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const sourceValue = source[key];
      const targetValue = result[key];

      if (
        sourceValue !== null &&
        typeof sourceValue === 'object' &&
        !Array.isArray(sourceValue) &&
        targetValue !== null &&
        typeof targetValue === 'object' &&
        !Array.isArray(targetValue)
      ) {
        result[key] = deepMerge(
          targetValue as Record<string, unknown>,
          sourceValue as Record<string, unknown>
        ) as T[Extract<keyof T, string>];
      } else {
        result[key] = sourceValue as T[Extract<keyof T, string>];
      }
    }
  }

  return result;
}

/**
 * Delay execution (for testing/demos)
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Get scroll position
 * @returns Current scroll position
 */
export function getScrollPosition(): { x: number; y: number } {
  return {
    x: window.scrollX || window.pageXOffset,
    y: window.scrollY || window.pageYOffset,
  };
}

/**
 * Scroll to element
 * @param element - DOM element or element ID
 * @param offset - Pixel offset from top (default: 0)
 */
export function scrollToElement(element: HTMLElement | string, offset: number = 0): void {
  const el = typeof element === 'string' ? document.getElementById(element) : element;
  if (!el) return;

  const topPosition = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top: topPosition,
    behavior: 'smooth',
  });
}

/**
 * Check if element is in viewport
 * @param element - DOM element
 * @returns True if element is visible in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  );
}
