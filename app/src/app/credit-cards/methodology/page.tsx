import type { Metadata } from 'next';
import Link from 'next/link';
import { WebhubLink } from '@/components/legal/WebhubLink';

export const metadata: Metadata = {
  title: 'Credit Card Evaluation Methodology | TopRates.ca',
  description:
    'How TopRates.ca will evaluate and rank Canadian credit cards at RIBO-registered launch. Methodology, refresh schedule, and our affiliate-disclosure policy.',
  alternates: { canonical: '/credit-cards/methodology' },
};

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#1B2A4A] to-[#2d3f5a] text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-3">
            Methodology
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How we&rsquo;ll evaluate credit cards
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            TopRates.ca will publish credit-card comparisons at planned RIBO-registered launch. This page explains
            the methodology we&rsquo;re building toward — including how we plan to handle affiliate
            compensation transparently.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
            <p className="text-sm text-gray-800 m-0">
              <strong>Note:</strong> No credit-card comparisons are live on the site
              today. The text below describes the methodology we&rsquo;ll follow when comparisons
              go live at our RIBO-registered launch. It will be revised before any real cards are listed.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1B2A4A]">Affiliate compensation disclosure</h2>
          <p>
            At launch, certain card listings on TopRates.ca will include affiliate links. If a
            visitor applies for and is approved for a card through one of our links, the issuer may
            pay TopRates.ca (operated by <WebhubLink />) a referral commission. We disclose this
            arrangement clearly and conspicuously on every page that contains affiliate links, in
            line with the Competition Bureau&rsquo;s guidance in{' '}
            <a
              href="https://competition-bureau.canada.ca/deceptive-marketing-practices-digest-volume-4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A7E8C] underline"
            >
              The Deceptive Marketing Practices Digest, Volume 4 (June 2018)
            </a>{' '}
            on influencer marketing, savings claims, and material connections.
          </p>
          <p>
            <strong>Our commitment:</strong> Affiliate compensation does not influence our rankings
            or ratings. Cards are evaluated on the criteria below, and the list of cards we feature
            is broader than the list of cards that pay us — we will list a card we don&rsquo;t earn
            commission on if it&rsquo;s the best fit for a category.
          </p>

          <h2 className="text-2xl font-bold text-[#1B2A4A]">Evaluation criteria</h2>
          <p>
            Each card we feature will be scored on a transparent rubric. The criteria we plan to
            use:
          </p>
          <ul>
            <li>
              <strong>Effective rewards rate</strong> by spending category, net of annual fee, for
              representative Canadian household spend profiles
            </li>
            <li>
              <strong>Annual fee value</strong> — what perks (lounge access, travel insurance, free
              authorized users) need to be redeemed to break even on the fee
            </li>
            <li>
              <strong>Sign-up bonus value</strong> — bonus net of any spend-requirement gating, in
              the first cardholder year
            </li>
            <li>
              <strong>Insurance coverage</strong> — purchase protection, extended warranty, travel
              medical, trip cancellation, rental car
            </li>
            <li>
              <strong>Fees beyond the annual</strong> — foreign-transaction fees, cash advance,
              balance transfer, late payment, over-limit
            </li>
            <li>
              <strong>Approval requirements</strong> — minimum income, minimum credit score, who
              the card is realistically accessible to
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1B2A4A]">Refresh schedule</h2>
          <p>
            Card terms (rates, fees, sign-up bonuses, insurance coverage) change frequently. At
            launch we&rsquo;ll commit to a quarterly refresh of every featured card with a clear
            &ldquo;last reviewed&rdquo; date on each listing. We&rsquo;ll also push out a same-day
            update if an issuer announces a major change (e.g. removing a category bonus).
          </p>

          <h2 className="text-2xl font-bold text-[#1B2A4A]">What we won&rsquo;t do</h2>
          <ul>
            <li>
              List a card under a fake or generic name (&ldquo;Major Canadian Bank Cash Back
              Plus&rdquo;). All listings will be real, named, current cards from real issuers.
            </li>
            <li>Hide affiliate compensation in fine print or footer-only disclosures.</li>
            <li>
              Rank a card higher because it pays us more. Methodology is published; if a ranking
              looks suspicious, the math is the math.
            </li>
            <li>
              Sell your application data to lead-buyers. Affiliate links go directly from your
              click to the issuer&rsquo;s site.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1B2A4A]">Who&rsquo;s evaluating?</h2>
          <p>
            Today, TopRates.ca has no live card listings. When evaluations go live, they will be
            authored and reviewed by the editorial team at TopRates.ca (<WebhubLink />). Each
            listing will carry the standard editorial byline plus an affiliate-disclosure tag.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8 not-prose">
            <h3 className="text-xl font-bold text-[#1B2A4A] mb-2">Questions about our methodology?</h3>
            <p className="text-gray-700 mb-4">
              We&rsquo;ll iterate on this page openly as we get closer to launch. Feedback welcome.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
