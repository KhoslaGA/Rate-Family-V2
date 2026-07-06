/**
 * MegaNav structure. Each top-level category has 3 columns of items
 * plus a promo card on the right.
 *
 * Status routing convention:
 *   - `live: true`  → href points to a real page that exists
 *   - `soon: true`  → href points to /coming-soon (waitlist sign-up)
 *   - neither       → links work but have no status pill
 */

export type NavTag = 'LIVE' | 'SOON';

export interface NavSubItem {
  name: string;
  desc: string;
  href: string;
  live?: boolean;
  soon?: boolean;
}

export interface NavSection {
  title: string;
  items: NavSubItem[];
}

export interface NavPromo {
  tag: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
  accent: 'gold' | 'green' | 'teal';
}

export interface NavCategory {
  id: string;
  label: string;
  tag?: NavTag;
  sections: NavSection[];
  /**
   * Right-side promo card. Optional — wide-layout categories typically
   * omit it so the section columns can use the full dropdown width.
   */
  promo?: NavPromo;
  /**
   * 'standard' (default) → 3-column section grid + promo card on the right.
   * 'wide' → up to 5-column section grid, full width, no promo, item
   *          descriptions hidden for tighter visual rhythm.
   */
  layout?: 'standard' | 'wide';
}

const SOON = '/coming-soon';

export const NAV_DATA: NavCategory[] = [
  /* ──────────────────── Car Insurance ──────────────────── */
  {
    id: 'car',
    label: 'Car Insurance',

    sections: [
      {
        title: 'By Province',
        items: [
          { name: 'Ontario Car Insurance', desc: '50+ carriers compared', href: '/auto-insurance' },
          { name: 'Alberta Car Insurance', desc: 'Grid rate comparison', href: '/auto-insurance/alberta' },
          { name: 'Quebec Car Insurance', desc: 'Hybrid no-fault system', href: '/auto-insurance/quebec' },
          { name: 'Atlantic Canada', desc: 'NB, NS, PEI & NL', href: '/auto-insurance/atlantic' },
          { name: 'Compare All Provinces', desc: 'National rate map', href: '/auto-insurance/all-provinces' },
        ],
      },
      {
        title: 'By Ontario City',
        items: [
          { name: 'Brampton', desc: 'Avg $3,802/yr', href: '/auto-insurance/brampton' },
          { name: 'Mississauga', desc: 'Avg $2,489/yr', href: '/auto-insurance/mississauga' },
          { name: 'Scarborough & North York', desc: 'Toronto periphery', href: '/auto-insurance/scarborough' },
          { name: 'Vaughan & Markham', desc: 'High-premium 905', href: '/auto-insurance/vaughan' },
          { name: 'Eastern Ontario', desc: 'From $1,412/yr', href: '/auto-insurance/eastern-ontario' },
          { name: 'All Ontario Cities', desc: 'Full city directory', href: '/auto-insurance/ontario-cities' },
        ],
      },
      {
        title: 'By Driver Type',
        items: [
          { name: 'New to Canada', desc: 'Build history from scratch', href: '/auto-insurance/new-canadian' },
          { name: 'New Drivers (G1/G2)', desc: 'Your first policy', href: '/auto-insurance/new-driver' },
          { name: 'Young Drivers Under 25', desc: 'Lower youth premiums', href: '/auto-insurance/young-drivers' },
          { name: 'Seniors 65+', desc: 'Mature driver discounts', href: '/auto-insurance/seniors' },
          { name: 'High-Risk Drivers', desc: 'After tickets or accidents', href: '/auto-insurance/high-risk' },
          { name: 'Rideshare Drivers', desc: 'Uber, Lyft coverage', href: '/auto-insurance/rideshare' },
        ],
      },
    ],
    promo: {
      tag: 'REFORM ALERT',
      title: 'Ontario Auto Reform 2026',
      desc: "Most accident benefits become optional July 1. Understand what's changing before your renewal.",
      cta: 'Read the guide',
      href: '/reform-2026',
      accent: 'gold',
    },
  },

  /* ──────────────────── Home Insurance ──────────────────── */
  {
    id: 'home',
    label: 'Home Insurance',

    sections: [
      {
        title: 'Property Type',
        items: [
          { name: 'Home Insurance', desc: 'Detached, semi & townhouse', href: '/home-insurance' },
          { name: 'Condo Insurance', desc: 'Unit owner protection', href: SOON },
          { name: 'Tenant Insurance', desc: 'Renters & roommates', href: SOON },
          { name: 'Landlord Insurance', desc: 'Rental property', href: SOON },
          { name: 'Cottage & Seasonal', desc: 'Secondary home', href: SOON },
        ],
      },
      {
        title: 'Coverage Add-Ons',
        items: [
          { name: 'Water Damage & Flood', desc: 'Overland & sewer backup', href: SOON },
          { name: 'Fire & Smoke Damage', desc: "What's covered", href: SOON },
          { name: 'Jewelry & Valuables', desc: 'Scheduled items', href: SOON },
          { name: 'Earthquake Coverage', desc: 'Optional add-on', href: SOON },
          { name: 'Pool & Liability', desc: 'Increased limits', href: SOON },
        ],
      },
      {
        title: 'Popular Guides',
        items: [
          { name: 'Home Insurance 101', desc: 'Complete Ontario guide', href: '/blog' },
          { name: 'Bundle & Save 20%', desc: 'Home + auto discount', href: '/blog' },
          { name: 'Filing a Claim', desc: 'Step-by-step process', href: '/blog' },
          { name: 'Lower Your Premium', desc: '15 practical tips', href: '/blog' },
          { name: 'Coverage Calculator', desc: 'Know your limits', href: SOON },
        ],
      },
    ],
    promo: {
      tag: 'AVG SAVINGS',
      title: 'Bundle home + auto',
      desc: 'Bundling home + auto with the same carrier typically reduces premiums. Editorial guide on what to know before you bundle.',
      cta: 'Learn how',
      href: '/blog',
      accent: 'green',
    },
  },

  /* ──────────────────── Life Insurance ──────────────────── */
  {
    id: 'life',
    label: 'Life Insurance',
    sections: [
      {
        title: 'Life Insurance Types',
        items: [
          { name: 'Term Life Insurance', desc: '10, 20, 30-year coverage', href: '/life-insurance' },
          { name: 'Whole Life Insurance', desc: 'Permanent coverage', href: '/life-insurance' },
          { name: 'Universal Life', desc: 'Flexible premium + investment', href: SOON },
          { name: 'Final Expense', desc: 'Funeral & burial coverage', href: SOON },
          { name: 'No Medical Life', desc: 'Guaranteed issue, no exam', href: SOON },
          { name: 'Mortgage Life', desc: 'Pays off mortgage on death', href: SOON },
        ],
      },
      {
        title: 'Health & Protection',
        items: [
          { name: 'Critical Illness', desc: 'Lump-sum on diagnosis', href: SOON },
          { name: 'Disability Insurance', desc: 'Income protection', href: SOON },
          { name: 'Health & Dental', desc: 'Supplemental coverage', href: '/health-insurance' },
          { name: 'Long-Term Care', desc: 'Senior care planning', href: SOON },
          { name: 'Group Benefits', desc: 'Employer-sponsored plans', href: SOON },
          { name: 'Pet Insurance', desc: 'Cat, dog & exotic', href: SOON },
        ],
      },
      {
        title: 'Resources & Guides',
        items: [
          { name: 'Life Insurance 101', desc: 'Beginner-friendly guide', href: '/blog' },
          { name: 'How much do I need?', desc: 'Coverage calculator', href: SOON },
          { name: 'Term vs. Whole', desc: 'Which is right for you?', href: '/blog' },
          { name: 'Application Help', desc: 'What to expect', href: SOON },
          { name: 'Medical Exam Tips', desc: 'Pass the underwriting', href: SOON },
          { name: 'Glossary of Terms', desc: 'Demystify the jargon', href: '/glossary' },
        ],
      },
    ],
    promo: {
      tag: 'PROTECT YOUR FAMILY',
      title: 'Term life insurance — explained',
      desc: 'Term life is the most affordable way to protect your family. See how it works, when it makes sense, and what to ask a licensed advisor.',
      cta: 'Compare term life',
      href: '/life-insurance',
      accent: 'teal',
    },
  },

  /* ──────────────────── Mortgage Rates ──────────────────── */
  {
    id: 'mortgage',
    label: 'Mortgage Rates',

    sections: [
      {
        title: 'Rate Types',
        items: [
          { name: '5-Year Fixed', desc: 'Most popular term in Canada', href: '/mortgages' },
          { name: '3-Year Fixed', desc: 'Mid-term flexibility', href: '/mortgages' },
          { name: '1-Year Fixed', desc: 'Short-term lock', href: '/mortgages' },
          { name: 'Variable Rate', desc: 'Floats with prime', href: '/mortgages' },
          { name: 'Adjustable Rate', desc: 'Payment moves with rate', href: SOON },
          { name: 'Open Mortgages', desc: 'Pay any time, no penalty', href: SOON },
        ],
      },
      {
        title: 'By Situation',
        items: [
          { name: 'First-Time Buyer', desc: 'Programs + insured rates', href: '/mortgages' },
          { name: 'Renewal', desc: 'Compare before re-signing', href: '/mortgages' },
          { name: 'Refinance', desc: 'Tap equity or lower payment', href: '/mortgages' },
          { name: 'Switch Lender', desc: 'Move at renewal — keep amortization', href: SOON },
          { name: 'Investment Property', desc: 'Rental & rental income rules', href: SOON },
          { name: 'HELOC', desc: 'Home equity line of credit', href: SOON },
        ],
      },
      {
        title: 'Tools & Calculators',
        items: [
          { name: 'Mortgage Calculator', desc: 'Monthly payment estimator', href: SOON },
          { name: 'Affordability Calculator', desc: 'How much can you borrow?', href: SOON },
          { name: 'Stress Test Calculator', desc: 'OSFI qualifying rate', href: SOON },
          { name: 'Penalty Estimator', desc: 'IRD vs 3-month interest', href: SOON },
          { name: 'Rate Alerts', desc: 'Get notified when rates drop', href: SOON },
          { name: 'BoC Rate Forecasts', desc: 'What economists expect', href: '/blog' },
        ],
      },
    ],
    promo: {
      tag: 'TODAY',
      title: 'Mortgage rates this week',
      desc: 'See current posted rates from major Canadian lenders, what they mean, and how to compare offers from a broker.',
      cta: 'See all rates',
      href: '/mortgages',
      accent: 'green',
    },
  },

  /* ──────────────────── Credit Cards ──────────────────── */
  {
    id: 'cards',
    label: 'Credit Cards',

    sections: [
      {
        title: 'By Reward Type',
        // hrefs encode the CreditCardHub filter — params match the
        // `id` field on /src/data/creditCardsData.ts categories[] so
        // the hub can validate + pre-select on mount.
        items: [
          { name: 'Cash Back Cards', desc: 'Earn on every purchase', href: '/credit-cards?category=cash-back' },
          { name: 'Travel Rewards', desc: 'Points for flights & hotels', href: '/credit-cards?category=travel' },
          { name: 'No-Fee Cards', desc: '$0 annual fee', href: '/credit-cards?category=no-annual-fee' },
          { name: 'Low Interest Cards', desc: 'Save on balances', href: '/credit-cards?category=low-interest' },
          { name: 'Welcome Bonus Cards', desc: 'Best sign-up offers', href: '/credit-cards' },
          { name: 'Balance Transfer', desc: '0% promo rates', href: '/credit-cards?category=balance-transfer' },
        ],
      },
      {
        title: 'By Who You Are',
        items: [
          { name: 'Student Cards', desc: 'No income required', href: '/credit-cards?category=student' },
          { name: 'New to Canada', desc: 'No credit history', href: '/credit-cards?category=newcomers' },
          { name: 'Business Cards', desc: 'Corporate & small biz', href: '/credit-cards?category=business' },
          { name: 'Secured Cards', desc: 'Build credit from scratch', href: '/credit-cards?category=secured' },
          { name: 'Premium & Luxury', desc: 'Status cards & perks', href: '/credit-cards' },
          { name: 'Family Cards', desc: 'Grocery & gas rewards', href: '/credit-cards' },
        ],
      },
      {
        title: 'By Issuer',
        // Issuer ids match `id` on /src/data/creditCardsData.ts issuers[].
        items: [
          { name: 'RBC Credit Cards', desc: 'Avion & more', href: '/credit-cards?issuer=rbc' },
          { name: 'TD Credit Cards', desc: 'Aeroplan Visa Infinite', href: '/credit-cards?issuer=td' },
          { name: 'Scotiabank Cards', desc: 'Momentum & Passport', href: '/credit-cards?issuer=scotiabank' },
          { name: 'AMEX Canada', desc: 'Cobalt, Gold & Platinum', href: '/credit-cards?issuer=american-express' },
          { name: 'CIBC Cards', desc: 'Dividend & Aventura', href: '/credit-cards?issuer=cibc' },
          { name: 'All 12+ Issuers', desc: 'Compare all banks', href: '/credit-cards' },
        ],
      },
    ],
    promo: {
      tag: '2026 PICKS',
      title: 'Best credit cards of 2026',
      desc: 'We analyzed 50+ Canadian credit cards across 12 categories. See our top picks.',
      cta: 'See top picks',
      href: '/credit-cards',
      accent: 'green',
    },
  },

  /* ──────────────────── More Options ──────────────────── */
  {
    id: 'more',
    label: 'More Options',
    sections: [
      {
        title: 'Travel Insurance',
        items: [
          { name: 'Travel Insurance', desc: 'Single & multi-trip coverage', href: '/travel-insurance' },
          { name: 'Visitors to Canada', desc: 'Medical coverage for visitors', href: SOON },
          { name: 'International Students', desc: 'Study abroad coverage', href: SOON },
          { name: 'Super Visa Insurance', desc: 'Parent / grandparent visa', href: SOON },
          { name: 'Snowbird Insurance', desc: 'Long-stay US travel', href: SOON },
        ],
      },
      {
        title: 'Business Insurance',
        items: [
          { name: 'All Business Insurance', desc: 'Full guide & coverage types', href: '/business-insurance' },
          { name: 'General Liability (CGL)', desc: 'Slip-and-fall protection', href: '/business-insurance' },
          { name: 'Commercial Property', desc: 'Building, contents, equipment', href: '/business-insurance' },
          { name: 'Professional Liability (E&O)', desc: 'Errors & omissions', href: '/business-insurance' },
          { name: 'Construction & Trades', desc: 'Tools, liability, builders risk', href: '/business-insurance' },
          { name: 'Tech & IT Consulting', desc: 'Cyber + E&O coverage', href: '/business-insurance' },
        ],
      },
      {
        title: 'Banking & Investing',
        items: [
          { name: 'Bank Accounts', desc: 'Compare top Canadian accounts', href: SOON },
          { name: 'Chequing Accounts', desc: 'Daily banking', href: SOON },
          { name: 'Savings Accounts', desc: 'High-interest savings', href: '/investing' },
          { name: 'TFSAs', desc: 'Tax-Free Savings Account', href: '/investing' },
          { name: 'GICs', desc: '1, 3, 5-year fixed rates', href: '/investing' },
          { name: 'RRSPs', desc: 'Retirement Savings Plan', href: '/investing' },
        ],
      },
    ],
    promo: {
      tag: 'FEATURED RATES',
      title: 'Top HISA & GIC rates',
      desc: 'Beat 5% on cash with the highest-paying high-interest accounts and GICs in Canada this month.',
      cta: 'Compare rates',
      href: '/investing',
      accent: 'teal',
    },
  },

  /* ──────────────────── News and Resources ──────────────────── */
  /* Wide layout: 5 columns, no promo, no item descriptions. Trimmed to
     3–4 items per section so each column has breathing room. */
  {
    id: 'news',
    label: 'News and Resources',
    layout: 'wide',
    sections: [
      {
        title: 'Pillar Guides',
        items: [
          { name: '2026 Reform Guide', desc: '', href: '/blog/ontario-auto-reform-2026-guide' },
          { name: 'Ontario Auto 101', desc: '', href: '/auto-insurance' },
          { name: 'Home Insurance 101', desc: '', href: '/home-insurance' },
          { name: 'Glossary of Terms', desc: '', href: '/glossary' },
        ],
      },
      {
        title: 'Tools',
        items: [
          { name: 'Savings Calculator', desc: '', href: '/savings-calculator' },
          { name: 'Card Match Quiz', desc: '', href: SOON },
          { name: 'Bundle Calculator', desc: '', href: SOON },
        ],
      },
      {
        title: 'News & Editorial',
        items: [
          { name: 'Latest Articles', desc: '', href: '/news-hub' },
          { name: 'Blog', desc: '', href: '/blog' },
          { name: 'Newsroom', desc: '', href: SOON },
        ],
      },
      {
        title: 'TopRates Lab',
        items: [
          { name: 'Lab Briefings', desc: '', href: '/lab' },
          { name: 'Rate Index', desc: '', href: '/rate-index' },
          { name: 'Methodology', desc: '', href: '/lab#methodology' },
        ],
      },
      {
        title: 'Company',
        items: [
          { name: 'About TopRates.ca', desc: '', href: '/about' },
          { name: 'For Brokers', desc: '', href: '/for-brokers' },
          { name: 'Contact Us', desc: '', href: '/contact' },
        ],
      },
    ],
  },
];
