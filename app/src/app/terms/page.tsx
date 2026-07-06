import React from 'react';
import Link from 'next/link';
import PageWrapper from '@/components/layout/PageWrapper';
import { WebhubLink } from '@/components/legal/WebhubLink';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | TopRates.ca',
  description:
    'TopRates.ca Terms of Service — operated by Webhub4u Inc., a Canadian technology company. Insurance inquiries are referred to KLC Group Canada Inc., a licensed insurance advisory firm.',
  keywords:
    'TopRates.ca terms of service, Webhub4u terms, KLC Group terms, Canadian insurance referral terms, terms and conditions Canada',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service | TopRates.ca',
    description:
      'TopRates.ca Terms of Service — operated by Webhub4u Inc. Insurance inquiries referred to KLC Group Canada Inc.',
    url: 'https://toprates.ca/terms',
    siteName: 'TopRates.ca',
    type: 'website',
    locale: 'en_CA',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TopRates.ca' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | TopRates.ca',
    description: 'Terms of Service for TopRates.ca — operated by Webhub4u Inc.',
    images: ['/og-image.png'],
  },
  robots: 'index, follow',
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1a365d] to-[#0d9488] text-white py-16">
        <PageWrapper>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-100">
              Please read these terms carefully before using our services
            </p>
          </div>
        </PageWrapper>
      </div>

      <PageWrapper maxWidth="2xl">
        <div className="prose prose-lg max-w-none py-12">
          <div className="bg-blue-50 border-l-4 border-[#0d9488] p-4 mb-8">
            <p className="text-sm text-gray-700">
              <strong>Last Updated:</strong> April 2024
            </p>
            <p className="text-sm text-gray-700">
              By accessing and using Toprates.ca, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              1. Service Definition
            </h2>
            <p>
              TopRates.ca is operated by <WebhubLink />, a Canadian technology company that publishes educational content about Canadian insurance, credit cards, mortgages, and investing. TopRates.ca also operates a contact form through which prospective customers may submit inquiries.
            </p>
            <p className="mt-4">
              <strong><WebhubLink /> is not a licensed insurance broker, mortgage broker, credit advisor, investment advisor, or financial advisor.</strong> Insurance inquiries submitted through TopRates.ca may be referred to KLC Group Canada Inc., an independent insurance advisory firm licensed under Ontario&rsquo;s life insurance agent licensing framework administered by FSRA. For full licensing and partnership disclosure see <Link href="/legal" className="text-[#0d9488] underline">/legal</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              2. User Eligibility
            </h2>
            <p>
              By using Toprates.ca, you represent and warrant that:
            </p>
            <ul>
              <li>You are at least 18 years old</li>
              <li>You are a Canadian resident or have Canadian insurance needs</li>
              <li>You have the authority to enter into contracts</li>
              <li>All information you provide is accurate and truthful</li>
              <li>You are not using our services for any illegal purpose</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              3. Quotes and Estimates
            </h2>
            <p>
              <strong>Non-Binding Nature:</strong> All quotes and estimates provided by Toprates.ca are non-binding estimates only. Final premium rates and terms are determined by the insurance provider after full underwriting.
            </p>
            <p className="mt-4">
              <strong>Accuracy:</strong> Quotes are based on information you provide. If you provide inaccurate or incomplete information, the final premium may differ significantly from the estimate.
            </p>
            <p className="mt-4">
              <strong>Validity Period:</strong> Quotes are typically valid for 30 days from the date of issue unless otherwise stated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              4. Services and our role
            </h2>
            <p>
              TopRates.ca is operated by <WebhubLink />, a Canadian technology company that publishes educational content about Canadian insurance, credit cards, mortgages, and investing. TopRates.ca also operates a contact form through which prospective customers may submit inquiries.
            </p>
            <p className="mt-4">
              <strong><WebhubLink /> is not a licensed insurance broker, mortgage broker, credit advisor, investment advisor, or financial advisor.</strong> Information published on TopRates.ca is provided for general educational purposes only and should not be treated as personalized financial, insurance, mortgage, credit, tax, legal, or investment advice.
            </p>
            <p className="mt-4">
              Insurance inquiries submitted through TopRates.ca may be referred to <strong>KLC Group Canada Inc.</strong>, an independent insurance advisory firm licensed under Ontario&rsquo;s life insurance agent licensing framework administered by FSRA. The two companies maintain a documented commercial referral arrangement under which <WebhubLink /> may receive a per-referral fee for inquiries referred to KLC Group Canada Inc. For full licensing and partnership disclosure, see <Link href="/legal" className="text-[#0d9488] underline">/legal</Link>.
            </p>
            <p className="mt-4">
              <strong>Not an insurer:</strong> Neither <WebhubLink /> nor KLC Group Canada Inc. underwrites insurance. Insurance policies are issued by licensed insurance companies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              5. Your Responsibilities
            </h2>
            <p>
              You agree to:
            </p>
            <ul>
              <li>Provide accurate, complete, and truthful information</li>
              <li>Disclose all relevant information that could affect your insurance coverage</li>
              <li>Review all documents provided to you carefully</li>
              <li>Notify us of any changes in your circumstances</li>
              <li>Pay premiums on time as agreed</li>
              <li>Read and understand your insurance policy documents</li>
              <li>Comply with all insurance company requirements</li>
            </ul>
            <p className="mt-4">
              <strong>Consequences of Misrepresentation:</strong> If you provide false or misleading information, your insurance policy may be cancelled or claims may be denied by the insurance provider.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              6. Fees and Compensation
            </h2>
            <p>
              <strong>No Direct Quotes:</strong> We do not charge customers a fee for quotes. Our services are provided at no cost to you.
            </p>
            <p className="mt-4">
              <strong>Compensation structure:</strong> TopRates.ca (<WebhubLink />) does not earn insurance commissions; <WebhubLink /> is not a licensed insurance broker. When a consumer requests an insurance quote through TopRates.ca and is referred to KLC Group Canada Inc., KLC Group Canada Inc.&rsquo;s licensed advisors earn commissions paid by the carriers. Commissions do not increase the price the consumer pays for insurance. <WebhubLink /> receives a per-referral fee from KLC Group Canada Inc., separate from insurance commission. Where TopRates.ca refers consumers to other regulated providers (mortgage brokerages, credit card issuers, investment platforms), referral or affiliate compensation may apply, disclosed on the relevant page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              7. Claims and Coverage
            </h2>
            <p>
              <strong>Claims Handling:</strong> If you purchase a policy through KLC Group Canada Inc. or another regulated partner referred by TopRates.ca, claims are handled directly by the insurance provider. The licensed advisor can assist you in submitting claims, but the insurance company makes coverage decisions.
            </p>
            <p className="mt-4">
              <strong>Policy Disputes:</strong> Disputes regarding policy coverage should be directed to the insurance provider. We will cooperate in resolving disputes but cannot override insurance company decisions.
            </p>
            <p className="mt-4">
              <strong>Claims Denial:</strong> If a claim is denied, you have the right to appeal directly to the insurance company or file a complaint with your provincial insurance regulator.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              8. Disclaimer of Warranties
            </h2>
            <p>
              <strong>As-Is Service:</strong> Our services are provided "as-is" without warranties of any kind, either express or implied. We do not warrant that our services will meet your expectations or be error-free.
            </p>
            <p className="mt-4">
              <strong>No Financial Advice:</strong> Toprates.ca does not provide financial, tax, or legal advice. We recommend consulting with a qualified professional for advice on your specific situation.
            </p>
            <p className="mt-4">
              <strong>No Liability for Insurer Actions:</strong> We are not liable for the actions or omissions of insurance providers, including claim denials, premium increases, or policy cancellations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Toprates.ca is not liable for:
            </p>
            <ul>
              <li>Any indirect, incidental, special, or consequential damages</li>
              <li>Lost profits or lost revenue</li>
              <li>Business interruption</li>
              <li>Data loss or corruption</li>
              <li>Claims arising from your use of our website</li>
            </ul>
            <p className="mt-4">
              Our total liability for any claim shall not exceed the amount of fees paid to us in the 12 months preceding the claim, or $500, whichever is greater.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              10. Website Use and Content
            </h2>
            <p>
              <strong>Permitted Use:</strong> You may use our website for lawful purposes only. You agree not to:
            </p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Introduce viruses, malware, or harmful code</li>
              <li>Attempt to gain unauthorized access</li>
              <li>Scrape or extract data without permission</li>
              <li>Engage in harassment or abusive behavior</li>
            </ul>
            <p className="mt-4">
              <strong>Content Ownership:</strong> All content on Toprates.ca is owned by or licensed to <WebhubLink />. You may not reproduce, distribute, or transmit content without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              11. Accuracy of Information
            </h2>
            <p>
              While we strive to keep information on our website accurate and current, we do not warrant the completeness or accuracy of all information. Insurance regulations and rates change frequently.
            </p>
            <p className="mt-4">
              <strong>No Liability for Website Errors:</strong> We are not liable for any errors or omissions on our website or for reliance on website content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              12. Third-Party Links and Services
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of third-party sites. Use of third-party sites is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              13. Confidentiality
            </h2>
            <p>
              We are bound by confidentiality obligations regarding your personal information. We will not disclose your information except as required by law or as necessary to provide insurance services.
            </p>
            <p className="mt-4">
              Please see our Privacy Policy for complete information on how we handle your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              14. Policy Cancellation
            </h2>
            <p>
              <strong>Cooling-Off Period:</strong> Most insurance policies have a cooling-off or free-look period (typically 10-30 days) during which you can cancel without penalty. Check your policy documents for details.
            </p>
            <p className="mt-4">
              <strong>Cancellation Process:</strong> To cancel a policy, contact the insurance company directly or notify us and we will assist.
            </p>
            <p className="mt-4">
              <strong>Refunds:</strong> Refunds depend on the specific insurance company and type of coverage. Some premiums may not be refundable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              15. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be posted to this page with an updated date. Continued use of our services indicates acceptance of updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              16. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of Ontario, Canada, and the federal laws of Canada applicable therein, without regard to conflicts of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              17. Dispute Resolution
            </h2>
            <p>
              <strong>Insurance Disputes:</strong> For disputes related to insurance policies or coverage, you should contact the insurance company first. If unresolved, you may file a complaint with your provincial insurance regulator.
            </p>
            <p className="mt-4">
              <strong>Platform Disputes:</strong> For disputes with TopRates.ca (<WebhubLink />) regarding the website or services described in these Terms, please contact us to attempt resolution. If unresolved, disputes may be subject to binding arbitration. Disputes related to insurance, mortgage, or other regulated services obtained through a referral are handled by the regulated provider under its own complaints process.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              18. Contact Information
            </h2>
            <p>
              If you have questions about these Terms of Service:
            </p>
            <p className="mt-4">
              <strong><WebhubLink /> (TopRates.ca)</strong><br />
              Operating from Brampton, Ontario, Canada<br />
              Email: <a href="mailto:contact@toprates.ca" className="text-[#0d9488] hover:text-[#0a7566]">contact@toprates.ca</a><br />
              Mailing address available on request via contact@toprates.ca
            </p>
          </section>

          <section className="bg-blue-50 border-l-4 border-[#0d9488] p-4 mt-8">
            <p className="text-sm text-gray-700">
              <strong>Acknowledgment:</strong> By using Toprates.ca, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
            </p>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}
