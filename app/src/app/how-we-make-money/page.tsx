/**
 * How we make money — shared transparency page, host-branched per the
 * Rate_Family_Disclosure_Suite. Renders on every host (linked from every
 * footer). Copy is verbatim from the suite's §5 revenue models; HealthRate is
 * education-only (no revenue). Styled neutrally with the per-host --site-accent
 * so it sits inside each spoke's chrome. Education/commercial split honoured.
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { DEFAULT_SITE, SITE_CONFIG, isSite, type Site } from '@/site/config';

type Block = { h: string; p: string };
const CONTENT: Record<Site, { eyebrow: string; lead: string; blocks: Block[]; foot: string }> = {
  toprates: {
    eyebrow: 'Affiliate & referral · plainly',
    lead: 'We’re a publisher. Here’s exactly how TopRates.ca is paid — and how it does (and doesn’t) affect what you see.',
    blocks: [
      {
        h: 'Credit cards (affiliate)',
        p: 'When you apply for a card through our links and are approved, the issuer may pay us a commission. This never changes the rate or terms you get, and it doesn’t decide our rankings — those come from our published scoring methodology. Some cards we cover pay us nothing; we include them because they’re worth knowing about.',
      },
      {
        h: 'Life insurance (referral)',
        p: 'Life insurance inquiries are referred to KLC Group Canada Inc., a firm licensed for life insurance (LLQP) by FSRA. If you buy a policy, the advisor is paid a commission by the insurer — not by you. It doesn’t change your premium.',
      },
      {
        h: 'Auto, home & business (educational)',
        p: 'This content is educational only — we don’t yet arrange these coverages, and we’re not a licensed broker for them (P&C brokerage is planned for a future phase, not held today). We make no money on them.',
      },
    ],
    foot: 'Webhub4u Inc. operates TopRates.ca and is not a licensed insurance broker, mortgage brokerage, or financial advisor.',
  },
  liferate: {
    eyebrow: 'Referral & commission · plainly',
    lead: 'We’re a publisher, not an insurer. Here’s exactly how LifeRate.ca is paid.',
    blocks: [
      {
        h: 'We refer, we don’t sell',
        p: 'When you ask to speak with an advisor, we refer you to a licensed LLQP firm, KLC Group Canada Inc. If you buy a policy, the advisor is paid a commission by the insurance company — not by you. It doesn’t change your premium, and we only refer to licensed advisors.',
      },
      {
        h: 'It doesn’t change your premium',
        p: 'Advisor commission is set by the insurer and built into standard pricing — the same policy costs the same whether you come through us or not. No coverage is bound until the insurer approves and issues your application.',
      },
    ],
    foot: 'LifeRate.ca is operated by Webhub4u Inc. (a publisher). Life insurance is referred to KLC Group Canada Inc., licensed for life insurance (LLQP) by FSRA.',
  },
  termrates: {
    eyebrow: 'Referral · plainly',
    lead: 'We show mortgage information to help you compare. Here’s how TermRates.ca is paid.',
    blocks: [
      {
        h: 'We compare, we don’t arrange',
        p: 'We show mortgage and insurance information to help you compare. We don’t arrange mortgages, and we’re not yet licensed to sell auto or home insurance (planned for a future phase). Where we connect you to a licensed partner, we may receive a referral fee — and we’ll always tell you when that’s the case.',
      },
      {
        h: 'The rates are illustrative',
        p: 'Rates shown are illustrative, gathered from public and third-party sources and refreshed periodically. They’re not an offer of credit or a guarantee of eligibility — your actual rate and approval are set by the lender.',
      },
    ],
    foot: 'TermRates.ca is operated by Webhub4u Inc. — a publisher, not a licensed mortgage brokerage.',
  },
  healthrate: {
    eyebrow: 'Education only · plainly',
    lead: 'The short version: HealthRate.ca makes no money from you, and sells nothing.',
    blocks: [
      {
        h: 'We don’t sell, quote, or arrange',
        p: 'HealthRate is education only. We don’t sell, quote, or arrange insurance, and we earn no commission or referral fee on health, travel, or Super Visa coverage. When you’re ready to buy, you deal with a licensed insurer or advisor directly.',
      },
      {
        h: 'If that ever changes',
        p: 'If a future phase adds licensed referrals, this page will say so before any button does. We’d rather show you the plumbing than hide it.',
      },
    ],
    foot: 'HealthRate.ca is operated by Webhub4u Inc., a publisher — not a licensed insurance broker.',
  },
};

function currentSite(): Site {
  const s = headers().get('x-site');
  return isSite(s) ? s : DEFAULT_SITE;
}

export function generateMetadata(): Metadata {
  const site = SITE_CONFIG[currentSite()];
  return {
    title: `How we make money | ${site.name}`,
    description:
      'Exactly how this site is paid — affiliate, referral, or education-only — and how it does (and doesn’t) affect what you see. Full transparency.',
    alternates: { canonical: '/how-we-make-money' },
  };
}

export default function HowWeMakeMoneyPage() {
  const c = CONTENT[currentSite()];
  return (
    <main style={{ background: '#fff' }}>
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--site-accent, #B45309)', marginBottom: 14 }}>
          {c.eyebrow}
        </div>
        <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 42px)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-.02em', color: '#17212F', margin: '0 0 18px' }}>
          How we make money
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: '#4b5563', margin: '0 0 40px' }}>{c.lead}</p>
        <div style={{ display: 'grid', gap: 26 }}>
          {c.blocks.map((b, i) => (
            <div key={i} style={{ borderLeft: '3px solid var(--site-accent, #B45309)', paddingLeft: 20 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#17212F', margin: '0 0 8px' }}>{b.h}</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: '#4b5563', margin: 0 }}>{b.p}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: '#6b7280', marginTop: 40, paddingTop: 22, borderTop: '1px solid #e5e7eb' }}>{c.foot}</p>
      </section>
    </main>
  );
}
