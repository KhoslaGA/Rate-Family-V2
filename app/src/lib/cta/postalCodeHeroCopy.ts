export type Product = 'auto' | 'home' | 'tenant' | 'commercial' | 'unified';

interface ProductCopy {
  headline: string;
  subhead: string;
  inputPlaceholder: string;
  submitLabel: string;
  productPillar: string;
  requiresProductSelector?: boolean;
}

export const POSTAL_CODE_HERO_COPY: Record<Product, ProductCopy> = {
  auto: {
    headline: 'See what drives car insurance rates in your postal code.',
    subhead:
      'Enter your postal code for a plain-English breakdown of local risk factors, claims trends, and the rules shaping auto insurance in your Ontario neighbourhood.',
    inputPlaceholder: 'e.g. M5V 3A8',
    submitLabel: 'Show me my area',
    productPillar: '/auto-insurance',
  },
  home: {
    headline: 'See what affects home insurance in your postal code.',
    subhead:
      'Enter your postal code for a plain-English breakdown of local risk factors — water, fire, theft, weather — and how they shape home insurance rates in your Ontario neighbourhood.',
    inputPlaceholder: 'e.g. L6P 1A1',
    submitLabel: 'Show me my area',
    productPillar: '/home-insurance',
  },
  tenant: {
    headline: 'See what tenant insurance actually covers in your area.',
    subhead:
      "Enter your postal code for a plain-English breakdown of what renters insurance protects, what most policies miss, and what to watch for in Ontario rentals.",
    inputPlaceholder: 'e.g. M4S 1Y2',
    submitLabel: 'Show me my area',
    productPillar: '/tenant-insurance',
  },
  commercial: {
    headline: 'See what shapes commercial insurance rates in your area.',
    subhead:
      "Enter your business postal code for a plain-English breakdown of local risk factors, industry-specific considerations, and what Ontario small-business owners should know.",
    inputPlaceholder: 'e.g. M5J 2N8',
    submitLabel: 'Show me my area',
    productPillar: '/coming-soon',
  },
  unified: {
    headline: 'One postal code. A clear picture of insurance in your area.',
    subhead:
      'See what drives auto, home, and tenant insurance rates in your Ontario neighbourhood — risk factors, claims trends, and rules explained in plain English.',
    inputPlaceholder: 'e.g. M5V 3A8',
    submitLabel: 'Show me',
    productPillar: '/auto-insurance',
    requiresProductSelector: true,
  },
};
