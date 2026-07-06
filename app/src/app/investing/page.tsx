import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Investing in Canada: GICs, HISAs, Robo-Advisors | TopRates',
  description:
    'Learn how Canadians use GICs, high-interest savings accounts, and robo-advisors to grow their money. Editorial guides on RRSPs, TFSAs, and how the products differ.',
  keywords:
    'GIC explained, HISA explained, robo-advisors Canada, RRSP, TFSA, Canadian investing guides, Wealthsimple, Questrade, EQ Bank, Canadian banks investing',
  alternates: { canonical: '/investing' },
  openGraph: {
    title: 'Investing in Canada: GICs, HISAs, Robo-Advisors | TopRates',
    description:
      'Editorial guides on how Canadians use GICs, HISAs, robo-advisors, RRSPs, and TFSAs.',
    url: 'https://toprates.ca/investing',
    siteName: 'TopRates.ca',
    type: 'website',
    locale: 'en_CA',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TopRates.ca' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investing in Canada | TopRates.ca',
    description: 'Plain-English guides on Canadian GICs, HISAs, robo-advisors, RRSPs, and TFSAs.',
    images: ['/og-image.png'],
  },
  robots: 'index, follow',
};

export default function InvestingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1B2A4A] to-[#2d3f5a] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Investing in Canada: an editorial guide
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            How GICs, high-interest savings accounts, and robo-advisors work — plus what to
            consider when choosing between RRSPs and TFSAs. Educational only.
          </p>
        </div>
      </section>

      {/* Methodology preview — no live rate table */}
      <section className="bg-amber-50 border-y border-amber-200 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-800 leading-relaxed">
            <strong>About this page.</strong> TopRates.ca does not currently publish live GIC,
            HISA, or robo-advisor rates. Comparing investing products requires methodology we
            haven&apos;t finished building yet — including timestamped rate snapshots, links to
            each provider&apos;s official rate disclosure, and a documented review process
            similar to the one we use for credit cards.{' '}
            <Link href="/credit-cards/methodology" className="underline font-semibold">
              See our credit card methodology
            </Link>{' '}
            for the template we plan to follow. Until that infrastructure is in place, this page
            stays educational.
          </p>
        </div>
      </section>

      {/* GIC concept */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2 text-[#1B2A4A]">
            Guaranteed Investment Certificates (GICs)
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            A GIC is a deposit product where you lock money in for a fixed term (typically six
            months to five years) in exchange for a guaranteed interest rate. The rate is set
            when you buy the GIC and doesn&apos;t change. You can&apos;t withdraw early without a
            penalty (and many GICs don&apos;t allow early withdrawal at all).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#0A7E8C]">
              <h3 className="text-lg font-bold text-[#1B2A4A] mb-3">What to consider</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Term length — longer terms usually pay a higher rate, but lock your money up</li>
                <li>• Interest payment schedule (annual, compound, at maturity)</li>
                <li>• Whether the GIC is cashable, redeemable, or non-redeemable</li>
                <li>• CDIC insurance up to $100,000 per insured category, per member institution</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#B45309]">
              <h3 className="text-lg font-bold text-[#1B2A4A] mb-3">What we can&apos;t tell you yet</h3>
              <p className="text-gray-700">
                Which provider has the highest GIC rate today. Rates change frequently and we
                haven&apos;t yet built the sourcing and timestamping infrastructure needed to
                publish a comparison table responsibly. Check each provider&apos;s rate page
                directly, or talk to your financial institution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HISA concept */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2 text-[#1B2A4A]">
            High-Interest Savings Accounts (HISA)
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            A HISA pays a higher interest rate than a regular savings account, with no term
            commitment — you can withdraw any time. Promotional rates are common when you open a
            new account; check whether the rate is ongoing or limited-time.
          </p>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-lg font-bold text-[#1B2A4A] mb-4">HISA vs. regular savings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-[#0A7E8C] mb-3">HISA</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Materially higher interest rate</li>
                  <li>• Withdraw anytime</li>
                  <li>• CDIC protected up to $100,000</li>
                  <li>• Most have no monthly fees</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#1B2A4A] mb-3">Regular savings</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Very low base interest rate</li>
                  <li>• Withdraw anytime</li>
                  <li>• CDIC protected</li>
                  <li>• Often bundled with a chequing account</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Robo-Advisor concept */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2 text-[#1B2A4A]">Robo-Advisor Platforms</h2>
          <p className="text-gray-700 mb-12 max-w-3xl">
            Robo-advisors are online investment platforms that build and manage a diversified
            ETF portfolio for you, automatically, based on a short questionnaire about your
            goals and risk tolerance. They charge a management fee on top of the ETF fees inside
            the portfolio. They&apos;re a low-friction way to start investing if you don&apos;t
            want to pick stocks.
          </p>

          <div className="bg-gradient-to-r from-[#1B2A4A] to-[#2d3f5a] rounded-lg p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">How robo-advisors work</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Take quiz',
                  desc: 'Answer questions about goals, time horizon, and risk tolerance',
                },
                {
                  step: '2',
                  title: 'Get portfolio',
                  desc: 'Receive a diversified ETF-based portfolio matched to your answers',
                },
                {
                  step: '3',
                  title: 'Automated investing',
                  desc: 'Your portfolio is rebalanced automatically as markets move',
                },
                {
                  step: '4',
                  title: 'Monitor and adjust',
                  desc: 'Update your goals or risk tolerance any time as your life changes',
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-10 h-10 bg-[#0A7E8C] rounded-full flex items-center justify-center font-bold mb-3 mx-auto">
                    {item.step}
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#B45309]">
            <h3 className="text-lg font-bold text-[#1B2A4A] mb-2">What to ask before signing up</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• What is the management fee, and what ETF fees are layered on top?</li>
              <li>• What is the minimum to open and to maintain an account?</li>
              <li>• How does the platform handle TFSA, RRSP, and non-registered accounts?</li>
              <li>• Is tax-loss harvesting offered, and at what account size does it apply?</li>
              <li>• How are deposits/withdrawals handled — instant, T+2, longer?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RRSP & TFSA Guide */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-3 text-[#1B2A4A]">
            Canadian tax-advantaged accounts
          </h2>
          <p className="text-gray-700 mb-12 max-w-3xl">
            Most Canadians can invest inside an RRSP or a TFSA. They handle tax very differently
            and suit different goals. Contribution limits are set by the Canada Revenue Agency
            each year — check the CRA website for current limits before contributing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-[#1B2A4A] mb-4">
                RRSP — Registered Retirement Savings Plan
              </h3>
              <p className="text-gray-700 mb-6">
                Designed for retirement saving. Contributions reduce your taxable income in the
                year you contribute. Investments grow tax-sheltered. Withdrawals are taxed as
                income — usually in retirement when your marginal rate is lower.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-[#0A7E8C] font-bold">✓</span>
                  <span className="text-gray-700">
                    <strong>Tax benefit:</strong> Immediate deduction on contribution
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0A7E8C] font-bold">✓</span>
                  <span className="text-gray-700">
                    <strong>Growth:</strong> Tax-sheltered while inside the plan
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0A7E8C] font-bold">✓</span>
                  <span className="text-gray-700">
                    <strong>Withdrawal:</strong> Taxed as income; HBP and LLP allow specific exceptions
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0A7E8C] font-bold">✓</span>
                  <span className="text-gray-700">
                    <strong>Contribution room:</strong> Based on earned income; check your CRA notice of assessment
                  </span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                For current contribution limits, see the{' '}
                <a
                  href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A7E8C] underline"
                >
                  Canada Revenue Agency — RRSPs and related plans
                </a>
                .
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-[#1B2A4A] mb-4">
                TFSA — Tax-Free Savings Account
              </h3>
              <p className="text-gray-700 mb-6">
                Designed for flexible saving and investing. Contributions are made with
                after-tax money. Investments grow tax-free, and withdrawals are not taxed at
                all. Suitable for any goal — emergency fund, home down payment, or
                supplementing retirement income.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-[#B45309] font-bold">✓</span>
                  <span className="text-gray-700">
                    <strong>Tax benefit:</strong> No tax on growth or on withdrawal
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#B45309] font-bold">✓</span>
                  <span className="text-gray-700">
                    <strong>Flexibility:</strong> Withdraw any time, for any reason
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#B45309] font-bold">✓</span>
                  <span className="text-gray-700">
                    <strong>Re-contribution:</strong> Withdrawn amounts are added back to your room the following calendar year
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#B45309] font-bold">✓</span>
                  <span className="text-gray-700">
                    <strong>Contribution room:</strong> Set annually by CRA; unused room carries forward
                  </span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                For current contribution limits, see the{' '}
                <a
                  href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A7E8C] underline"
                >
                  Canada Revenue Agency — Tax-Free Savings Account
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-[#1B2A4A]">Common investing questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'Where should a beginner start?',
                a: 'A common starting point in Canada is to open a TFSA at a robo-advisor or discount broker, set up a small automatic monthly contribution, and pick a diversified ETF portfolio that matches your risk tolerance. The exact platform and portfolio depend on your goals, time horizon, and how hands-on you want to be.',
              },
              {
                q: 'GIC, HISA, or stocks — how do I choose?',
                a: 'GICs offer a guaranteed return but lock your money in for a fixed term. HISAs are flexible and pay a modest interest rate while keeping your money accessible. Stocks (typically via ETFs in a diversified portfolio) offer the highest long-term return potential but with volatility. Most Canadians use a mix — short-term cash in a HISA, medium-term goals in GICs, long-term investing in stocks/ETFs.',
              },
              {
                q: 'How much should I invest each month?',
                a: 'Less than you might think can compound meaningfully over decades. Many financial educators recommend starting with whatever amount you can maintain consistently, then increasing as income grows. Consistency tends to matter more than the starting amount.',
              },
              {
                q: 'Is it too late to start investing?',
                a: 'No. Whether you are 25 or 55, the time value of investing depends on how long until you need the money — not on the calendar. A 55-year-old planning to work and invest until 75 still has 20 years of potential compounding.',
              },
              {
                q: 'Why does TopRates.ca not show a rate table for GICs?',
                a: 'Rates change frequently, and listing a specific rate without a verifiable as-of date and a link to the provider’s rate disclosure isn’t something we’re willing to do until we’ve built the methodology and sourcing infrastructure. We hold ourselves to the same standard we apply on /credit-cards/methodology.',
              },
            ].map((item, index) => (
              <details key={index} className="bg-white rounded-lg shadow-sm p-6 cursor-pointer">
                <summary className="font-bold text-[#1B2A4A] text-lg hover:text-[#0A7E8C]">
                  {item.q}
                </summary>
                <p className="text-gray-700 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA — unified ContactForm */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1B2A4A] mb-2">Get in touch</h2>
          <p className="text-gray-700 mb-8">
            Have a question about investing in Canada? Send us a quick note and we&rsquo;ll be
            in touch within one business day.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <ContactForm defaultProduct="investing" />
          </div>
        </div>
      </section>
    </main>
  );
}
