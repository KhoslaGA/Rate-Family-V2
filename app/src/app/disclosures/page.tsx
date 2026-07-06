import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliate & Advertising Disclosures — TopRates.ca',
  description:
    'How TopRates.ca earns money: affiliate commissions, advertising, and the editorial separation that keeps rankings honest.',
  alternates: { canonical: '/disclosures' },
};

const LAST_UPDATED = 'May 2026';

export default function DisclosuresPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#1B2A4A] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.2em] text-amber-300 font-bold mb-3">
            Affiliate &amp; Advertising
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight leading-tight">
            Disclosures
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            How TopRates.ca earns money, the relationships we have with product providers, and the
            editorial separation that keeps our rankings honest.
          </p>
          <p className="text-sm text-white/60 mt-3">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50/60 py-4 px-6">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-gray-600">
          <span className="text-gray-400 uppercase tracking-wider">On this page:</span>
          <a href="#affiliate" className="hover:text-[#0A7E8C]">Affiliate compensation</a>
          <a href="#advertising" className="hover:text-[#0A7E8C]">Advertising</a>
          <a href="#editorial" className="hover:text-[#0A7E8C]">Editorial separation</a>
          <a href="#refresh" className="hover:text-[#0A7E8C]">Refresh &amp; accuracy</a>
          <a href="#links" className="hover:text-[#0A7E8C]">Recognising affiliate links</a>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <article id="affiliate" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-5 pb-2 border-b-2 border-[#0A7E8C] inline-block">
              Affiliate compensation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TopRates.ca, operated by Webhub4u Inc., may earn commissions from product providers
              when you click links on this site and complete an application or purchase. This is
              called affiliate compensation and is the primary way we fund the site.
            </p>
            <h3 className="text-lg font-bold text-[#1B2A4A] mt-6 mb-2">What this means</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>
                If you apply for a credit card through our &ldquo;Apply Now&rdquo; link and are
                approved, the issuer may pay us a one-time referral fee.
              </li>
              <li>
                Compensation amounts vary by product and provider. Specific per-product commission
                rates are subject to confidentiality clauses with each partner.
              </li>
              <li>
                The list of products we feature is broader than the list of products that pay us
                &mdash; we include products we earn nothing on if they are the best fit.
              </li>
              <li>
                You pay the same price clicking through our link as you would going direct. There
                is no markup to the consumer.
              </li>
            </ul>
            <h3 className="text-lg font-bold text-[#1B2A4A] mt-6 mb-2">What compensation does not affect</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>
                Our scoring algorithm or rankings &mdash; the math is published at{' '}
                <Link href="/credit-cards/methodology" className="text-[#0A7E8C] underline font-semibold">
                  /credit-cards/methodology
                </Link>
                .
              </li>
              <li>Which products we list or where they appear in our rankings.</li>
              <li>Our editorial reviews, recommendations, or category placement.</li>
            </ul>
            <h3 className="text-lg font-bold text-[#1B2A4A] mt-6 mb-2">Regulatory compliance</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our affiliate disclosures follow the Competition Bureau of Canada&rsquo;s guidance in{' '}
              <a
                href="https://competition-bureau.canada.ca/deceptive-marketing-practices-digest-volume-4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A7E8C] underline"
              >
                The Deceptive Marketing Practices Digest, Volume 4 (June 2018)
              </a>{' '}
              on influencer marketing, savings claims, and material connections. We disclose
              affiliate relationships at the top of every page where affiliate-linked products
              appear and on this dedicated page.
            </p>
          </article>

          <article id="advertising" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-5 pb-2 border-b-2 border-[#0A7E8C] inline-block">
              Advertising
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Where TopRates.ca displays advertising &mdash; including display ad units, sponsored
              content, or partner placements &mdash; those placements are clearly labelled.
              Advertising never appears as editorial recommendation, and ad placement does not
              influence which products we feature or how we rank them.
            </p>
          </article>

          <article id="editorial" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-5 pb-2 border-b-2 border-[#0A7E8C] inline-block">
              Editorial separation
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>Scoring weights and methodology are published. The math is public.</li>
              <li>Rankings are computed by algorithm, not by editor preference.</li>
              <li>
                A ranking flagged as suspicious can be audited against the methodology &mdash; the
                math is the math.
              </li>
              <li>We do not run pay-to-be-ranked placements.</li>
              <li>
                We do not list products under fake or generic names. All listings will be real,
                named, current products from real issuers and providers.
              </li>
            </ul>
          </article>

          <article id="refresh" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-5 pb-2 border-b-2 border-[#0A7E8C] inline-block">
              Refresh &amp; accuracy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Product terms (rates, fees, sign-up bonuses, insurance coverage) change frequently.
              We commit to a quarterly review of every featured product with a &ldquo;last
              reviewed&rdquo; date on each listing, and a same-day update when an issuer announces
              a major change &mdash; for example, removing a category bonus or repricing an
              annual fee.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you spot stale information, please{' '}
              <Link href="/contact" className="text-[#0A7E8C] underline font-semibold">
                contact us
              </Link>
              .
            </p>
          </article>

          <article id="links" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-5 pb-2 border-b-2 border-[#0A7E8C] inline-block">
              Recognising affiliate links
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you click an &ldquo;Apply Now&rdquo; or similar action button on TopRates.ca,
              your destination URL may include tracking parameters that identify TopRates.ca as the
              referring site. Once you click, you are on the issuer&rsquo;s site &mdash;
              TopRates.ca cannot influence or guarantee the terms you are offered there. Final
              approval, pricing, and product terms are at the issuer&rsquo;s sole discretion.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              TopRates.ca does not sell your application data to lead-buyers. Affiliate links go
              directly from your click to the issuer&rsquo;s site.
            </p>
          </article>

          <div className="border-t border-gray-200 pt-8 mt-6 text-sm text-gray-600">
            <p className="mb-2">
              This page is the canonical source for our affiliate and advertising disclosures.
              Other pages may include a brief notice with a link back here.
            </p>
            <p>
              Broader legal information is available at{' '}
              <Link href="/legal" className="text-[#0A7E8C] underline font-semibold">
                /legal
              </Link>
              . Our scoring approach is at{' '}
              <Link href="/credit-cards/methodology" className="text-[#0A7E8C] underline font-semibold">
                /credit-cards/methodology
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
