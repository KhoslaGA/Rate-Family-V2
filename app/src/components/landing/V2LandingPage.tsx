'use client';

/**
 * V2 landing layout for the live TopRates.ca homepage.
 *
 * Adapted from the v2 repo's V2LandingPage.tsx with v1-compliant edits:
 *   - "How it works" describes the editorial + referral flow, not a
 *     quote engine (no upload-OCR + carrier quote mock).
 *   - The phone mock is a guide-stack illustration, not a quote display.
 *   - FAQ #1 softens "buy through us" to "buy through a licensed advisor
 *     we refer you to" — TopRates.ca is a publisher, KLC Group is the
 *     licensed party.
 *   - The Trust strip removes the specific "15 min data deletion" claim —
 *     v1 has no quote engine so there are no quote details to delete.
 *   - The HowWeMakeMoney section from the v1 editorial register is folded
 *     in between Reviews and FAQ to preserve the revenue-transparency
 *     surface the v1 homepage currently exposes.
 *
 * Brief: app/docs/V1_BASELINE/V1_INVENTORY.md + ClaudeCode_Brief_v2_UI_into_v1.md.
 */

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Car,
  Home,
  HeartPulse,
  Plane,
  Briefcase,
  Landmark,
  CreditCard,
  ArrowRight,
  ChevronDown,
  FileText,
  BookOpen,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { colors, fonts, radii, shadows, layout } from '@/styles/editorialTokens';
import HowWeMakeMoney from '@/components/editorial/HowWeMakeMoney';
import { Bo } from '@/components/brand/Bo';

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

const MAXW = layout.maxWidth;

function Section({
  children,
  bg,
  pad = '64px 0',
  style,
}: {
  children: React.ReactNode;
  bg?: string;
  pad?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section style={{ background: bg ?? 'transparent', padding: pad, ...style }}>
      <div
        style={{
          width: '100%',
          maxWidth: MAXW,
          margin: '0 auto',
          // Fluid side padding: 16px on phones, scaling up to 32px on tablets+.
          paddingInline: 'clamp(16px, 4vw, 32px)',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: fonts.sans,
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: colors.advisorInk,
      }}
    >
      {children}
    </span>
  );
}

function H2({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <h2
      style={{
        fontFamily: fonts.heading,
        fontWeight: 600,
        fontSize: 'clamp(32px, 4.6vw, 46px)',
        lineHeight: 1.08,
        color: color ?? colors.navy,
        margin: '8px 0 0',
        letterSpacing: '-0.01em',
      }}
    >
      {children}
    </h2>
  );
}

function GoldButton({
  href,
  children,
  full,
  size = 'md',
  type,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  full?: boolean;
  size?: 'md' | 'lg';
  type?: 'submit' | 'button';
  onClick?: () => void;
}) {
  const lg = size === 'lg';
  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: lg ? '17px 30px' : '13px 22px',
    borderRadius: radii.pill,
    background: colors.accent,
    color: '#3A2A00',
    fontFamily: fonts.sans,
    fontWeight: 800,
    fontSize: lg ? 18 : 16,
    letterSpacing: lg ? '0.01em' : undefined,
    border: 'none',
    cursor: 'pointer',
    boxShadow: lg
      ? '0 10px 24px rgba(224,162,39,.35), 0 2px 6px rgba(11,37,69,.12)'
      : shadows.soft,
    width: full ? '100%' : undefined,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };
  if (href) {
    return (
      <Link href={href} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? 'button'} onClick={onClick} style={style}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */

type IconType = LucideIcon;

type Starter =
  | { kind: 'postal'; icon: IconType; placeholder: string }
  | { kind: 'select'; icon: IconType; param: string; placeholder: string; options: { label: string; value: string }[] }
  | { kind: 'button' };

type Category = {
  key: string;
  label: string;
  Icon: IconType;
  href: string;
  cta: string;
  note: string;
  starter: Starter;
};

const ADVISOR_NOTE = 'Free call. No commitment. Licensed Ontario LLQP advisor (KLC Group Canada Inc.).';
const EDU_NOTE = 'Independent Canadian insurance education. Compare and learn — no quote required.';

/**
 * Map a Canadian postal code (FSA — first 3 chars) to an existing
 * auto-insurance landing slug. Slugs live in src/data/landingPages.ts;
 * when no match, the caller falls back to /auto-insurance (the general
 * Ontario guide). Postal input is a navigation aid to find the right
 * editorial page — NOT a quote starter.
 */
function postalToAutoSlug(postal: string): string | null {
  const fsa = postal.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3);
  if (fsa.length < 3) return null;
  // GTA cities with dedicated landing pages
  if (fsa.startsWith('L5')) return 'mississauga';
  if (fsa.startsWith('L6') || fsa === 'L7A') return 'brampton';
  if (fsa.startsWith('M1')) return 'scarborough';
  if (['L4H', 'L4J', 'L4K', 'L4L', 'L6A'].includes(fsa)) return 'vaughan';
  // Eastern Ontario (Ottawa region and surrounds)
  if (fsa.startsWith('K')) return 'eastern-ontario';
  // Other provinces with landing pages
  if (fsa.startsWith('T')) return 'alberta';
  if (fsa.startsWith('H') || fsa.startsWith('J') || fsa.startsWith('G')) return 'quebec';
  if (fsa.startsWith('B') || fsa.startsWith('E') || fsa.startsWith('C') || fsa.startsWith('A')) return 'atlantic';
  return null;
}

// Home category covers homeowners, condos, and renters per the homepage
// inventory decision (Home strip absorbs tenant-insurance content).
const PRODUCTS: Category[] = [
  {
    key: 'auto',
    label: 'Car Insurance',
    Icon: Car,
    href: '/auto-insurance',
    cta: 'Find my guide',
    note: EDU_NOTE,
    starter: { kind: 'postal', icon: MapPin, placeholder: 'Postal code' },
  },
  {
    key: 'home',
    label: 'Home Insurance',
    Icon: Home,
    href: '/home-insurance',
    cta: 'Find my guide',
    note: EDU_NOTE,
    starter: { kind: 'postal', icon: MapPin, placeholder: 'Postal code' },
  },
  {
    key: 'life',
    label: 'Life Insurance',
    Icon: HeartPulse,
    href: '/life-insurance',
    cta: 'Talk to a licensed advisor',
    note: ADVISOR_NOTE,
    starter: {
      kind: 'select',
      icon: HeartPulse,
      param: 'coverage',
      placeholder: 'Coverage amount',
      options: [
        { label: '$250,000', value: '250000' },
        { label: '$500,000', value: '500000' },
        { label: '$1,000,000', value: '1000000' },
        { label: 'Not sure yet', value: 'unsure' },
      ],
    },
  },
  {
    key: 'travel',
    label: 'Travel Insurance',
    Icon: Plane,
    href: '/travel-insurance',
    cta: 'Explore travel coverage',
    note: EDU_NOTE,
    starter: {
      kind: 'select',
      icon: Plane,
      param: 'destination',
      placeholder: 'Where to?',
      options: [
        { label: 'Within Canada', value: 'canada' },
        { label: 'United States', value: 'usa' },
        { label: 'Europe', value: 'europe' },
        { label: 'Mexico & Caribbean', value: 'mexico-caribbean' },
        { label: 'Worldwide', value: 'worldwide' },
      ],
    },
  },
  {
    key: 'business',
    label: 'Business Insurance',
    Icon: Briefcase,
    href: '/business-insurance',
    cta: 'Explore business coverage',
    note: EDU_NOTE,
    starter: {
      kind: 'select',
      icon: Briefcase,
      param: 'industry',
      placeholder: 'Your industry',
      options: [
        { label: 'Retail', value: 'retail' },
        { label: 'Trades & contracting', value: 'trades' },
        { label: 'Professional services', value: 'professional' },
        { label: 'Food & hospitality', value: 'hospitality' },
        { label: 'Other', value: 'other' },
      ],
    },
  },
  {
    key: 'mortgage',
    label: 'Mortgage Rates',
    Icon: Landmark,
    href: '/mortgages',
    cta: 'Explore mortgage tools',
    note: 'Free calculators. No sign-up required.',
    starter: { kind: 'button' },
  },
  {
    key: 'cards',
    label: 'Credit Cards',
    Icon: CreditCard,
    href: '/credit-cards',
    cta: 'Browse credit cards',
    note: 'Compare Canadian cards. No sign-up required.',
    starter: { kind: 'button' },
  },
];

const VERTICALS = [
  {
    name: 'Auto',
    blurb:
      'Ontario auto reform changes what you pay for in 2026. Read the plain-English explainer of which coverages are now optional before you renew — and what each one is actually for.',
    href: '/auto-insurance',
  },
  {
    name: 'Home',
    blurb:
      'Tenant, condo or homeowner — line up coverage on paper, in plain English, instead of guessing what a single quote leaves out. Includes the gaps most policies miss.',
    href: '/home-insurance',
  },
  {
    name: 'Life',
    blurb:
      'Term, whole, and final-expense, explained plainly. Talk to a licensed advisor at KLC Group Canada Inc. when you want a person, not a funnel.',
    href: '/life-insurance',
  },
  {
    name: 'Business',
    blurb:
      'Liability, property, and BOP coverage for Canadian small businesses — read what providers actually include for your trade before you call.',
    href: '/business-insurance',
  },
];

const STATS = [
  { big: '60+', label: 'plain-English guides' },
  { big: '✓', label: 'reviewed by LLQP-licensed advisors' },
  { big: '✓', label: 'licensed Ontario partner (KLC Group)' },
  { big: '✓', label: 'independent — we publish first' },
];

const GUIDES = [
  { title: 'Auto insurance guide', blurb: 'What Ontario reform changes, and how to read a quote.', href: '/auto-insurance' },
  { title: 'Home insurance guide', blurb: 'Replacement cost vs. market value, and the gaps to watch.', href: '/home-insurance' },
  { title: 'Life insurance guide', blurb: 'Term vs. whole life in plain English — and how much you need.', href: '/life-insurance' },
  { title: 'Credit cards guide', blurb: 'Match rewards to how you actually spend, fee math included.', href: '/credit-cards' },
];

const CALCULATORS = [
  { label: 'Land Transfer Tax', href: '/mortgages' },
  { label: 'Mortgage Payment', href: '/mortgages' },
  { label: 'Affordability', href: '/mortgages' },
  { label: 'Glossary', href: '/glossary' },
  { label: 'Reform 2026 Guide', href: '/blog/ontario-auto-reform-2026-guide' },
  { label: 'Life Needs', href: '/life-insurance' },
];

const REVIEWS = [
  { quote: 'Read the reform explainer twice — finally understood what was changing on my renewal.', who: 'Placeholder — real reviews when we have them' },
  { quote: 'The plain-English glossary saved me a half-hour of Googling carrier jargon before my call.', who: 'Placeholder — real reviews when we have them' },
  { quote: 'Booked a life call. Advisor was patient, not pushy — exactly what the site promised.', who: 'Placeholder — real reviews when we have them' },
];

const FAQS = [
  {
    q: 'How does TopRates.ca make money?',
    a: 'TopRates.ca is a publisher, not a broker. We earn a referral fee from KLC Group Canada Inc. when you book a life-insurance call, and affiliate commissions when you apply for credit cards or mortgages through our links. Reading our guides and using the comparison tools is free, and your price is never increased by our fee.',
  },
  {
    q: "What's changing July 1, 2026?",
    a: 'Ontario\'s auto insurance reform makes several coverages optional and restructures others. Our reform explainer traces every change to its primary source — FSRA, RIBO, and Ontario e-Laws — so you can decide what to keep before you renew.',
  },
  {
    q: 'Is my data safe?',
    a: 'We don\'t sell personal information, full stop. Our privacy policy explains what we collect, how long we keep it, and how to ask us to delete it. PIPEDA-compliant, no dark patterns.',
  },
  {
    q: 'Do I have to buy through you?',
    a: 'No. Read the guides, take the numbers, and buy wherever you like. If you do want help with life insurance, a licensed LLQP advisor at KLC Group Canada Inc. can finish the conversation with you — but it\'s never required.',
  },
];

const SEO_COLUMNS = [
  {
    head: 'Auto by city',
    items: [
      { label: 'Mississauga auto insurance', href: '/auto-insurance/mississauga' },
      { label: 'Brampton auto insurance', href: '/auto-insurance/brampton' },
      { label: 'Scarborough auto insurance', href: '/auto-insurance/scarborough' },
      { label: 'Vaughan auto insurance', href: '/auto-insurance/vaughan' },
    ],
  },
  {
    head: 'Home & tenant',
    items: [
      { label: 'Home insurance guide', href: '/home-insurance' },
      { label: 'Tenant insurance', href: '/tenant-insurance' },
      { label: 'Replacement cost', href: '/glossary/replacement-cost' },
      { label: 'Sub-limits', href: '/glossary/sub-limit' },
    ],
  },
  {
    head: 'Provincial guides',
    items: [
      { label: 'Ontario auto reform 2026', href: '/blog/ontario-auto-reform-2026-guide' },
      { label: 'Alberta auto insurance', href: '/auto-insurance/alberta' },
      { label: 'Quebec auto insurance', href: '/auto-insurance/quebec' },
      { label: 'Glossary', href: '/glossary' },
    ],
  },
  {
    head: 'Personal finance',
    items: [
      { label: 'Mortgage tools', href: '/mortgages' },
      { label: 'Credit cards', href: '/credit-cards' },
      { label: 'Investing primer', href: '/investing' },
      { label: 'Blog', href: '/blog' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function V2LandingPage() {
  const [product, setProduct] = useState<string>('auto');
  const [starterValue, setStarterValue] = useState('');
  const [openFaq, setOpenFaq] = useState<number>(3);
  const [email, setEmail] = useState('');

  const activeProduct = useMemo(() => PRODUCTS.find((p) => p.key === product) ?? PRODUCTS[0], [product]);

  const selectProduct = (key: string) => {
    setProduct(key);
    setStarterValue('');
  };

  const quoteHref = useMemo(() => {
    const s = activeProduct.starter;
    if (s.kind === 'button') return activeProduct.href;
    const raw = starterValue.trim();
    if (!raw) return activeProduct.href;
    if (s.kind === 'postal') {
      // Auto: try FSA → existing city slug; fall back to /auto-insurance.
      // Home: no [slug] routes yet — pass postal as query param for future use.
      if (activeProduct.key === 'auto') {
        const slug = postalToAutoSlug(raw);
        return slug ? `/auto-insurance/${slug}` : '/auto-insurance';
      }
      const fsa = raw.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3);
      if (!fsa) return activeProduct.href;
      return `${activeProduct.href}?postal=${encodeURIComponent(fsa)}`;
    }
    const sep = activeProduct.href.includes('?') ? '&' : '?';
    return `${activeProduct.href}${sep}${s.param}=${encodeURIComponent(raw)}`;
  }, [activeProduct, starterValue]);

  return (
    <div style={{ fontFamily: fonts.body, color: colors.ink, background: colors.surface }}>
      {/* ============================ B · HERO ============================ */}
      <Section bg={`linear-gradient(180deg, ${colors.cream} 0%, ${colors.surface} 100%)`} pad="56px 0 64px">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 18,
            maxWidth: 880,
            margin: '0 auto',
          }}
        >
          <span
            style={{
              fontFamily: fonts.sans,
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '0.14em',
              color: colors.advisorInk,
            }}
          >
            TOPRATES.CA
          </span>

          <h1
            style={{
              fontFamily: fonts.heading,
              fontWeight: 600,
              fontSize: 'clamp(44px, 6.8vw, 72px)',
              lineHeight: 1.03,
              letterSpacing: '-0.02em',
              color: colors.navy,
              margin: 0,
            }}
          >
            Get a{' '}
            <span style={{ color: colors.accent, fontStyle: 'italic' }}>better rate.</span>
          </h1>

          <p
            style={{
              fontFamily: fonts.body,
              fontSize: 'clamp(19px, 2.2vw, 24px)',
              lineHeight: 1.45,
              color: colors.ink,
              margin: 0,
              maxWidth: 600,
            }}
          >
            Compare insurance, mortgages and credit cards across Canadian providers — in a few clicks.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, auto)',
              justifyContent: 'center',
              gap: 'clamp(10px, 2vw, 22px)',
              width: '100%',
              maxWidth: 880,
              borderTop: '1px solid transparent',
              borderBottom: '1px solid transparent',
              borderImage:
                'linear-gradient(90deg, transparent 0%, rgba(224,162,39,0.55) 50%, transparent 100%) 1',
              padding: '18px 0',
              overflowX: 'auto',
            }}
          >
            {PRODUCTS.map((p) => {
              const on = p.key === product;
              const ProductIcon = p.Icon;
              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => selectProduct(p.key)}
                  aria-pressed={on}
                  title={p.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: on ? colors.accent : 'rgba(11,37,69,.06)',
                      color: on ? '#3A2A00' : colors.navy,
                      transition: 'background .15s, color .15s',
                    }}
                  >
                    <ProductIcon size={20} strokeWidth={2} />
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.sans,
                      fontSize: 15,
                      fontWeight: on ? 700 : 500,
                      color: on ? colors.navy : colors.inkMuted,
                      borderBottom: on ? `2px solid ${colors.accent}` : '2px solid transparent',
                      paddingBottom: 4,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.label}
                  </span>
                </button>
              );
            })}
          </div>

          {activeProduct.starter.kind === 'button' ? (
            <Link
              href={quoteHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: colors.accent,
                color: '#3A2A00',
                borderRadius: radii.pill,
                padding: '0 30px',
                height: 52,
                fontFamily: fonts.sans,
                fontWeight: 800,
                fontSize: 18,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: shadows.soft,
              }}
            >
              {activeProduct.cta}
              <ArrowRight size={20} strokeWidth={2.5} />
            </Link>
          ) : (
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                maxWidth: 480,
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: radii.pill,
                padding: '6px 6px 6px 18px',
                boxShadow: shadows.soft,
              }}
            >
              {(() => {
                const SIcon = activeProduct.starter.icon;
                return <SIcon size={22} color={colors.accent} style={{ marginRight: 10, flex: 'none' }} aria-hidden />;
              })()}
              {activeProduct.starter.kind === 'postal' ? (
                <input
                  type="text"
                  value={starterValue}
                  onChange={(e) => setStarterValue(e.target.value)}
                  placeholder={activeProduct.starter.placeholder}
                  aria-label={activeProduct.starter.placeholder}
                  autoComplete="postal-code"
                  inputMode="text"
                  maxLength={7}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    border: 'none',
                    outline: 'none',
                    fontSize: 17,
                    background: 'transparent',
                    color: colors.ink,
                    fontFamily: fonts.body,
                    height: 40,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                />
              ) : (
                <div style={{ position: 'relative', flex: 1, minWidth: 0, display: 'flex' }}>
                  <select
                    value={starterValue}
                    onChange={(e) => setStarterValue(e.target.value)}
                    aria-label={activeProduct.starter.placeholder}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      border: 'none',
                      outline: 'none',
                      fontSize: 17,
                      background: 'transparent',
                      color: starterValue ? colors.ink : colors.inkMuted,
                      fontFamily: fonts.body,
                      height: 40,
                      cursor: 'pointer',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      MozAppearance: 'none',
                      paddingRight: 24,
                    }}
                  >
                    <option value="" disabled>
                      {activeProduct.starter.placeholder}
                    </option>
                    {activeProduct.starter.options.map((o) => (
                      <option key={o.value} value={o.value} style={{ color: colors.ink }}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    color={colors.inkMuted}
                    aria-hidden
                    style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                  />
                </div>
              )}

              <Link
                href={quoteHref}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: colors.accent,
                  color: '#3A2A00',
                  border: 'none',
                  borderRadius: radii.pill,
                  padding: '0 22px',
                  height: 42,
                  fontFamily: fonts.sans,
                  fontWeight: 800,
                  fontSize: 16,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  flex: 'none',
                }}
              >
                {activeProduct.cta}
                <ArrowRight size={19} strokeWidth={2.5} />
              </Link>
            </form>
          )}

          <p style={{ fontFamily: fonts.sans, fontSize: 13.5, color: colors.inkMuted, margin: '6px 0 0' }}>
            {activeProduct.note}
          </p>
        </div>
      </Section>

      {/* ========================= C · TRUST STRIP ========================= */}
      <Section bg={colors.cream} pad="40px 0">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16 }} className="v2-grid-3">
          {[
            { big: '60+', label: 'plain-English guides' },
            { big: 'LLQP', label: 'licensed life advisor partner (KLC Group)' },
            { big: 'FSRA', label: 'regulated insurance partner' },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: colors.surface,
                borderRadius: radii.card,
                border: `1px solid ${colors.border}`,
                padding: '20px 18px',
                textAlign: 'center',
                boxShadow: shadows.soft,
              }}
            >
              <div style={{ fontFamily: fonts.heading, fontWeight: 600, fontSize: 24, color: colors.navy }}>{s.big}</div>
              <div style={{ fontFamily: fonts.sans, fontSize: 16, color: colors.inkMuted, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ======================= D · HOW IT WORKS ======================= */}
      {/* Reframed for v1: editorial guides + licensed referral, NOT a quote
          engine. Steps describe reading the guide, using calculators, and
          (for life) talking to a licensed advisor. */}
      <Section pad="64px 0">
        <div
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 280px', gap: 40, alignItems: 'center' }}
          className="v2-how-grid"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <Eyebrow>How it works</Eyebrow>
            <H2>Read it. Run the math. Talk to a person.</H2>
            {[
              {
                Icon: BookOpen,
                t: 'Read the plain-English guide',
                s: 'Every vertical has a long-form explainer that sources every claim. Skip the marketing copy.',
              },
              {
                Icon: FileText,
                t: 'Run the math',
                s: 'Calculators for mortgage payments, land transfer tax, and coverage size — no sign-up, no email wall.',
              },
              {
                Icon: MessageCircle,
                t: 'Talk to a licensed advisor (life only, today)',
                s: 'For life insurance, book a free call with a LLQP advisor at KLC Group Canada Inc. P&C compare-and-bind launches with KLC Group\'s RIBO registration.',
              },
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span
                  style={{
                    width: 34,
                    height: 34,
                    flex: 'none',
                    borderRadius: '50%',
                    background: colors.accent,
                    color: '#3A2A00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: fonts.sans,
                    fontWeight: 700,
                  }}
                >
                  {i + 1}
                </span>
                <div>
                  <div style={{ fontFamily: fonts.heading, fontWeight: 600, fontSize: 21, color: colors.navy, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <step.Icon size={18} strokeWidth={2} color={colors.advisorInk} />
                    {step.t}
                  </div>
                  <div style={{ fontFamily: fonts.body, fontSize: 17, color: colors.inkMuted, marginTop: 2 }}>{step.s}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Guide-stack illustration — replaces the v2 phone+quote mock. */}
          <div
            style={{
              justifySelf: 'center',
              width: 260,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
            className="v2-guide-stack"
          >
            {['Ontario auto reform 2026', 'Replacement cost vs. ACV', 'Term vs. whole life'].map((title, i) => (
              <div
                key={title}
                style={{
                  background: colors.surface,
                  border: `1px solid ${colors.border}`,
                  borderRadius: radii.card,
                  padding: '14px 16px',
                  boxShadow: shadows.soft,
                  transform: `translateX(${(i - 1) * 8}px)`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <span style={{ fontFamily: fonts.sans, fontSize: 12, color: colors.advisorInk, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Guide
                </span>
                <span style={{ fontFamily: fonts.heading, fontWeight: 600, fontSize: 18, color: colors.navy, lineHeight: 1.2 }}>
                  {title}
                </span>
                <div style={{ display: 'flex', gap: 6 }}>
                  {[1, 2, 3].map((j) => (
                    <span
                      key={j}
                      style={{
                        flex: 1,
                        height: 4,
                        borderRadius: 2,
                        background: j <= i + 1 ? colors.accent : colors.border,
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================== E · PER-VERTICAL EDITORIAL ================== */}
      <Section bg={colors.cream} pad="64px 0">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {VERTICALS.map((v, i) => (
            <div
              key={v.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 28,
                alignItems: 'center',
                direction: i % 2 === 1 ? 'rtl' : 'ltr',
              }}
              className="v2-vertical-row"
            >
              <div
                style={{
                  direction: 'ltr',
                  height: 200,
                  borderRadius: radii.card,
                  background: `linear-gradient(135deg, ${colors.surface}, ${colors.cream})`,
                  border: `1px solid ${colors.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.inkMuted,
                  fontFamily: fonts.sans,
                  fontSize: 16,
                  boxShadow: shadows.soft,
                }}
              >
                {v.name} guide preview
              </div>
              <div style={{ direction: 'ltr', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
                <H2>{v.name}</H2>
                <p style={{ fontFamily: fonts.body, fontSize: 18, lineHeight: 1.55, color: colors.inkMuted, margin: 0 }}>
                  {v.blurb}
                </p>
                <Link
                  href={v.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '11px 18px',
                    borderRadius: radii.pill,
                    border: `2px solid ${colors.navy}`,
                    color: colors.navy,
                    background: colors.surface,
                    fontFamily: fonts.sans,
                    fontWeight: 700,
                    fontSize: 17,
                    textDecoration: 'none',
                  }}
                >
                  Read the {v.name} guide →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===================== F · STATS BAND (navy) ===================== */}
      <Section pad="56px 0">
        <div
          style={{
            background: colors.navy,
            borderRadius: 24,
            padding: '40px 32px',
            boxShadow: shadows.lg,
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 24 }} className="v2-grid-4">
            {STATS.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: fonts.heading, fontWeight: 600, fontSize: 34, color: colors.accent }}>{s.big}</div>
                <div style={{ fontFamily: fonts.sans, fontSize: 16, color: 'rgba(255,255,255,.85)', marginTop: 6 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ==================== G · EDUCATION CENTRE ==================== */}
      <Section pad="56px 0">
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <Eyebrow>Education centre</Eyebrow>
          <H2>Learn it once, in plain English.</H2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }} className="v2-grid-2">
          {GUIDES.map((g) => (
            <Link
              key={g.title}
              href={g.href}
              style={{
                display: 'flex',
                gap: 16,
                alignItems: 'center',
                padding: 20,
                borderRadius: radii.card,
                border: `1px solid ${colors.border}`,
                background: colors.surface,
                textDecoration: 'none',
                boxShadow: shadows.soft,
              }}
            >
              <span
                style={{
                  width: 64,
                  height: 50,
                  flex: 'none',
                  borderRadius: 8,
                  background: colors.cream,
                  border: `1px solid ${colors.border}`,
                }}
              />
              <span>
                <span style={{ display: 'block', fontFamily: fonts.heading, fontWeight: 600, fontSize: 20, color: colors.navy }}>
                  {g.title}
                </span>
                <span style={{ display: 'block', fontFamily: fonts.body, fontSize: 16, color: colors.inkMuted, margin: '4px 0 6px' }}>
                  {g.blurb}
                </span>
                <span style={{ fontFamily: fonts.sans, fontSize: 16, fontWeight: 700, color: colors.advisorInk }}>
                  Read the guide →
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              padding: '11px 22px',
              borderRadius: radii.pill,
              border: `2px solid ${colors.navy}`,
              color: colors.navy,
              fontFamily: fonts.sans,
              fontWeight: 700,
              fontSize: 17,
              textDecoration: 'none',
            }}
          >
            Browse all guides
          </Link>
        </div>
      </Section>

      {/* ==================== H · CALCULATORS MARQUEE ==================== */}
      <Section bg={colors.cream} pad="48px 0">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
          <Eyebrow>Tools & references</Eyebrow>
          <Link href="/mortgages" style={{ fontFamily: fonts.sans, fontSize: 16, fontWeight: 700, color: colors.advisorInk, textDecoration: 'none' }}>
            All calculators →
          </Link>
        </div>
        <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)' }}>
          <div className="v2-marquee" style={{ display: 'flex', gap: 14, width: 'max-content' }}>
            {[...CALCULATORS, ...CALCULATORS].map((c, i) => (
              <Link
                key={`${c.label}-${i}`}
                href={c.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '11px 18px',
                  borderRadius: radii.pill,
                  border: `1px solid ${colors.border}`,
                  background: colors.surface,
                  fontFamily: fonts.sans,
                  fontWeight: 700,
                  fontSize: 16,
                  color: colors.navy,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  boxShadow: shadows.soft,
                }}
              >
                {c.label}
                <span style={{ color: colors.advisorInk }}>Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ======================= I · REVIEWS ======================= */}
      <Section pad="56px 0">
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <Eyebrow>What people say</Eyebrow>
          <H2>Speed and clarity, in their words.</H2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }} className="v2-grid-3">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              style={{
                padding: 22,
                borderRadius: radii.card,
                border: `1px solid ${colors.border}`,
                background: colors.surface,
                boxShadow: shadows.soft,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <div style={{ color: colors.accent, fontSize: 20, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontFamily: fonts.body, fontSize: 18, lineHeight: 1.5, color: colors.ink, margin: 0 }}>“{r.quote}”</p>
              <span style={{ fontFamily: fonts.sans, fontSize: 14, color: colors.inkMuted }}>— {r.who}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ========== HOW WE MAKE MONEY (folded in from v1 register) ========== */}
      <HowWeMakeMoney />

      {/* ======================= J · FAQ ======================= */}
      <Section bg={colors.cream} pad="56px 0">
        <div style={{ display: 'grid', gridTemplateColumns: '160px minmax(0,1fr)', gap: 28, alignItems: 'flex-start' }} className="v2-faq-grid">
          <div style={{ display: 'flex', justifyContent: 'center' }} className="v2-faq-bo">
            <Bo size={140} pose="thinking" accessory="none" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <H2>Straight answers.</H2>
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    borderRadius: radii.card,
                    border: `1px solid ${colors.border}`,
                    background: colors.surface,
                    overflow: 'hidden',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 16,
                      padding: '16px 18px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontFamily: fonts.heading, fontWeight: 600, fontSize: 18, color: colors.navy }}>{f.q}</span>
                    <span style={{ fontFamily: fonts.heading, fontSize: 22, color: colors.accentWarm, lineHeight: 1 }}>
                      {open ? '−' : '+'}
                    </span>
                  </button>
                  {open && (
                    <div style={{ padding: '0 18px 18px', fontFamily: fonts.body, fontSize: 17, lineHeight: 1.55, color: colors.inkMuted }}>
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ==================== K · NEWSLETTER (navy) ==================== */}
      <Section pad="56px 0">
        <div
          style={{
            background: colors.navy,
            borderRadius: 24,
            padding: '36px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 24,
            flexWrap: 'wrap',
            boxShadow: shadows.lg,
          }}
        >
          <div style={{ maxWidth: 420 }}>
            <h2 style={{ fontFamily: fonts.heading, fontWeight: 600, fontSize: 28, color: colors.accent, margin: 0 }}>
              Money tips, in plain English.
            </h2>
            <p style={{ fontFamily: fonts.body, fontSize: 17, color: 'rgba(255,255,255,.8)', margin: '8px 0 0' }}>
              Occasional, useful, and never spammy. Unsubscribe any time.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="your@email.ca"
              aria-label="Email address"
              style={{
                borderRadius: radii.input,
                border: 'none',
                padding: '13px 15px',
                fontFamily: fonts.body,
                fontSize: 17,
                minWidth: 0,
                flex: '1 1 220px',
                outline: 'none',
              }}
            />
            <GoldButton type="submit">Sign up</GoldButton>
          </form>
          <span style={{ flexBasis: '100%', fontFamily: fonts.sans, fontSize: 13, color: 'rgba(255,255,255,.55)' }}>
            By signing up you agree to receive emails from TopRates.ca. We never sell your data.
          </span>
        </div>
      </Section>

      {/* ==================== L · SEO FOOTER GRID ==================== */}
      <Section bg={colors.cream} pad="48px 0">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 24 }} className="v2-grid-4">
          {SEO_COLUMNS.map((col) => (
            <div key={col.head} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontFamily: fonts.heading, fontWeight: 600, fontSize: 18, color: colors.navy }}>{col.head}</span>
              {col.items.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  style={{ fontFamily: fonts.body, fontSize: 16, color: colors.inkMuted, textDecoration: 'none' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <p style={{ fontFamily: fonts.sans, fontSize: 13, color: colors.inkMuted, marginTop: 18, opacity: 0.8 }}>
          City pages are editorial guides. TopRates.ca is operated by Webhub4u Inc. and is not currently a licensed
          brokerage — life-insurance referrals go to KLC Group Canada Inc.
        </p>
      </Section>

      <style>{`
        @keyframes v2Marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .v2-marquee { animation: v2Marquee 26s linear infinite; }
        @media (max-width: 900px) {
          .v2-how-grid { grid-template-columns: 1fr !important; }
          .v2-faq-grid { grid-template-columns: 1fr !important; }
          .v2-faq-bo { display: none !important; }
          .v2-guide-stack { width: 100% !important; }
        }
        @media (max-width: 760px) {
          .v2-grid-4 { grid-template-columns: 1fr 1fr !important; }
          .v2-grid-3 { grid-template-columns: 1fr !important; }
          .v2-grid-2 { grid-template-columns: 1fr !important; }
          .v2-vertical-row { grid-template-columns: 1fr !important; direction: ltr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .v2-marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}
