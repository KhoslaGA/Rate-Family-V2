import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { WebhubLink } from '@/components/legal/WebhubLink';
import HealthRateLegal from '@/components/healthrate/pages/Legal';

const topRatesMetadata: Metadata = {
  title: 'Legal & Disclosures — TopRates.ca',
  description:
    'Legal information, partnerships, and disclosures for TopRates.ca, operated by Webhub4u Inc.',
  alternates: { canonical: '/legal' },
};

// /legal is shared; HealthRate supplies its own bespoke page on the healthrate
// host, TopRates page preserved byte-identical everywhere else.
export function generateMetadata(): Metadata {
  if (headers().get('x-site') === 'healthrate') {
    return {
      title: 'Legal, privacy & disclosures | HealthRate.ca',
      description:
        'HealthRate.ca legal information — privacy, terms of use, accessibility commitment and the full entity disclosure.',
      alternates: { canonical: '/legal' },
    };
  }
  return topRatesMetadata;
}

const LAST_UPDATED = 'May 2026';

function TopRatesLegalPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-[#1B2A4A] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.2em] text-amber font-bold mb-3">
            TopRates.ca · Webhub4u Inc.
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight leading-tight">
            Legal &amp; Disclosures
          </h1>
          <p className="text-sm text-white/60">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* JUMP NAV */}
      <section className="border-b border-gray-200 bg-gray-50/60 py-4 px-6">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-gray-600">
          <span className="text-gray-400 uppercase tracking-wider">On this page:</span>
          <a href="#about" className="hover:text-[#0A7E8C]">About</a>
          <a href="#partnership" className="hover:text-[#0A7E8C]">Insurance Referral</a>
          <a href="#editorial" className="hover:text-[#0A7E8C]">Editorial Content</a>
          <a href="#future" className="hover:text-[#0A7E8C]">Future Plans</a>
          <a href="#notice" className="hover:text-[#0A7E8C]">Important Notice</a>
          <a href="#contact" className="hover:text-[#0A7E8C]">Contact</a>
        </div>
      </section>

      {/* BODY */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">

          {/* ABOUT */}
          <article id="about" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-5 pb-2 border-b-2 border-[#0A7E8C] inline-block">
              About TopRates.ca
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TopRates.ca is operated by{' '}
              <strong className="text-[#1B2A4A]">
                <WebhubLink />
              </strong>
              , a Canadian technology company that publishes educational content about Canadian
              insurance, credit cards, mortgages, and investing. TopRates.ca also operates a
              contact form through which prospective customers may submit inquiries.
            </p>
            <div className="bg-[#1B2A4A]/[0.04] border-l-4 border-[#1B2A4A] rounded-r-lg p-5 my-5">
              <p className="text-[#1B2A4A] font-semibold leading-relaxed">
                <WebhubLink /> is not a licensed insurance broker, mortgage broker, credit
                advisor, investment advisor, or financial advisor.
              </p>
              <p className="text-[#1B2A4A]/80 leading-relaxed text-sm mt-2">
                Information published on TopRates.ca is provided for general educational purposes
                only and should not be treated as personalized financial, insurance, mortgage,
                credit, tax, legal, or investment advice.
              </p>
            </div>
          </article>

          {/* INSURANCE REFERRAL PARTNERSHIP */}
          <article id="partnership" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-5 pb-2 border-b-2 border-[#0A7E8C] inline-block">
              Insurance Referral Partnership
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Insurance inquiries submitted through TopRates.ca may be referred to{' '}
              <strong className="text-[#1B2A4A]">KLC Group Canada Inc.</strong>, an independent
              insurance advisory firm.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              KLC Group Canada Inc. is licensed under Ontario&rsquo;s life insurance agent
              licensing framework administered by the Financial Services Regulatory Authority of
              Ontario (FSRA). Its advisors hold individual Life Licence Qualification Program
              (LLQP) licences where required.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The two companies maintain a documented commercial referral arrangement under which{' '}
              <WebhubLink /> may receive a per-referral fee for inquiries referred to KLC Group
              Canada Inc.
            </p>

          </article>

          {/* EDITORIAL CONTENT */}
          <article id="editorial" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-5 pb-2 border-b-2 border-[#0A7E8C] inline-block">
              Editorial Content
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Articles, reviews, guides, comparisons, and other informational content published
              on TopRates.ca are intended for general educational purposes only.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              TopRates.ca does not provide personalized recommendations and does not make
              suitability assessments for insurance, mortgage, credit card, investment, or
              financial products.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Where TopRates.ca has a referral, advertising, or affiliate arrangement with a
              third-party provider, such as a credit card issuer, mortgage brokerage, insurance
              provider, or other financial services company, that relationship will be disclosed
              on the relevant page, article, or form where applicable.
            </p>
          </article>

          {/* FUTURE PLANS */}
          <article id="future" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-5 pb-2 border-b-2 border-[#0A7E8C] inline-block">
              Future Plans
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TopRates.ca and KLC Group Canada Inc. plan to expand into property and casualty
              insurance comparison services, including auto, home, tenant, business, and related
              insurance categories, in 2027.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This planned expansion is expected to occur alongside KLC Group Canada Inc.&rsquo;s
              future registration as a RIBO-licensed insurance brokerage in Ontario.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Until the required registration is granted, TopRates.ca does not sell, quote,
              bind, broker, or advise on property and casualty insurance products.
            </p>
          </article>

          {/* IMPORTANT NOTICE — amber callout */}
          <article id="notice" className="mb-14 scroll-mt-24">
            <div className="bg-amber-50 border-l-4 border-amber-600 rounded-r-lg p-6 sm:p-7">
              <div className="flex items-start gap-3 mb-4">
                <svg
                  className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-[#1B2A4A] leading-tight">
                  Important Notice
                </h2>
              </div>
              <p className="text-gray-800 leading-relaxed mb-3">
                Submitting a contact form through TopRates.ca does not create a broker-client,
                advisor-client, financial advisor-client, or fiduciary relationship with{' '}
                <WebhubLink />.
              </p>
              <p className="text-gray-800 leading-relaxed mb-3">
                Any licensed insurance advice, where applicable, is provided only by appropriately
                licensed representatives of KLC Group Canada Inc.
              </p>
              <p className="text-gray-800 leading-relaxed">
                <WebhubLink /> does not provide licensed insurance, mortgage, credit, investment,
                tax, legal, or financial advice.
              </p>
            </div>
          </article>

          {/* CONTACT — card style */}
          <article id="contact" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-5 pb-2 border-b-2 border-[#0A7E8C] inline-block">
              Contact
            </h2>
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 sm:p-7">
              <p className="text-gray-700 leading-relaxed mb-4">
                For privacy, data protection, general inquiries, or complaints about editorial
                content or website operations, please contact:
              </p>
              <a
                href="mailto:privacy@toprates.ca"
                className="inline-flex items-center gap-2 text-lg sm:text-xl font-semibold text-[#0A7E8C] hover:text-[#085f6b] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                privacy@toprates.ca
              </a>
            </div>
          </article>

          {/* SEE ALSO */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
            <span className="font-medium">See also:</span>
            <Link
              href="/privacy"
              className="text-[#0A7E8C] hover:text-[#085f6b] underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300" aria-hidden="true">·</span>
            <Link
              href="/terms"
              className="text-[#0A7E8C] hover:text-[#085f6b] underline underline-offset-2"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function LegalPage() {
  if (headers().get('x-site') === 'healthrate') return <HealthRateLegal />;
  return <TopRatesLegalPage />;
}
