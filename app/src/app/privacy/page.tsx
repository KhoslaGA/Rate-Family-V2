import React from 'react';
import Link from 'next/link';
import PageWrapper from '@/components/layout/PageWrapper';
import { WebhubLink } from '@/components/legal/WebhubLink';

/**
 * Privacy Policy — verbatim text supplied by the business owner.
 *
 * Source: TopRates_Privacy_Policy.pdf (last updated May 6, 2026).
 * Do not paraphrase. If a section needs to change, replace it with the
 * corresponding verbatim text from a new revision of the PDF.
 *
 * Email aliases (privacy@/contact@/editorial@toprates.ca) are used as
 * supplied — the owner has set these up. This deliberately differs from
 * the gmail-only contact on /legal; both pages are correct as supplied.
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | TopRates.ca',
  description:
    'TopRates.ca privacy policy. Operated by Webhub4u Inc. PIPEDA-compliant practices covering insurance referrals, contact-form inquiries, cookies, and analytics.',
  keywords:
    'TopRates.ca privacy policy, Webhub4u privacy, PIPEDA Canada, Canadian privacy law, insurance referral privacy, cookie policy Canada, data protection Canada',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | TopRates.ca',
    description:
      'PIPEDA-compliant privacy practices for TopRates.ca, operated by Webhub4u Inc.',
    url: 'https://toprates.ca/privacy',
    siteName: 'TopRates.ca',
    type: 'website',
    locale: 'en_CA',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TopRates.ca' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | TopRates.ca',
    description: 'PIPEDA-compliant privacy practices for TopRates.ca.',
    images: ['/og-image.png'],
  },
  robots: 'index, follow',
};

const LAST_UPDATED = 'May 6, 2026';

// Tailwind class shorthand for the four data tables in this policy.
const TABLE = 'w-full border-collapse my-6';
const TH =
  'text-left text-sm font-bold text-[#1a365d] bg-gray-50 border border-gray-200 px-4 py-3';
const TD = 'text-sm text-gray-700 border border-gray-200 px-4 py-3 align-top';

export default function PrivacyPage() {
  return (
    <>
      {/* HERO */}
      <div className="bg-gradient-to-r from-[#1a365d] to-[#0d9488] text-white py-16">
        <PageWrapper>
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-amber-300 font-bold mb-3">
              TopRates.ca
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Privacy Policy</h1>
            <p className="text-sm text-white/70">Last updated: {LAST_UPDATED}</p>
          </div>
        </PageWrapper>
      </div>

      {/* BODY */}
      <PageWrapper maxWidth="2xl">
        <div className="prose prose-lg max-w-none py-12">
          {/* 1. Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">1. Introduction</h2>
            <p>
              TopRates.ca is operated by <WebhubLink />, a Canadian technology company (in
              this Privacy Policy, &ldquo;TopRates.ca&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
              and &ldquo;our&rdquo;).
            </p>
            <p>
              We respect your privacy and are committed to handling personal information
              responsibly and in accordance with the Personal Information Protection and
              Electronic Documents Act (PIPEDA) and other applicable Canadian privacy
              legislation.
            </p>
            <p>
              This Privacy Policy describes what personal information we collect, why we collect
              it, how we use and share it, how long we retain it, and how you can exercise your
              rights regarding your personal information.
            </p>
            <p>
              By using TopRates.ca or submitting any form on our website, you acknowledge that
              you have read and understood this Privacy Policy.
            </p>
          </section>

          {/* 2. About us and our partners */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              2. About us and our partners
            </h2>

            <h3 className="text-lg font-bold text-[#1a365d] mt-6 mb-3">Operator</h3>
            <p>
              TopRates.ca is operated by <WebhubLink />. <WebhubLink /> is the entity
              responsible for the personal information collected through TopRates.ca.
            </p>
            <p className="font-semibold">
              <WebhubLink /> is not a licensed insurance broker, mortgage broker, credit
              advisor, investment advisor, or financial advisor.
            </p>

            <h3 className="text-lg font-bold text-[#1a365d] mt-6 mb-3">
              Insurance referral partner
            </h3>
            <p>
              Insurance inquiries submitted through TopRates.ca may be referred to{' '}
              <strong>KLC Group Canada Inc.</strong>, an independent insurance advisory firm.
            </p>
            <p>
              KLC Group Canada Inc. is licensed under Ontario&rsquo;s life insurance agent
              licensing framework administered by the Financial Services Regulatory Authority
              of Ontario (FSRA). Its advisors hold individual Life Licence Qualification Program
              (LLQP) licences where required.
            </p>
            <p>
              <WebhubLink /> and KLC Group Canada Inc. are under separate ownership and operate
              as independent corporations. The two companies maintain a documented commercial
              referral arrangement under which <WebhubLink /> may receive a per-referral fee
              for inquiries referred to KLC Group Canada Inc. There is a familial relationship
              between the principals of the two companies, which we disclose for full
              transparency.
            </p>
            <p>
              Once a referral is forwarded to KLC Group Canada Inc., that company collects,
              uses, and stores any further personal information directly from you under its own
              privacy practices and FSRA-regulated framework. <WebhubLink /> is not the
              controller of personal information that you provide to KLC Group Canada Inc.
              after the referral is made.
            </p>
          </section>

          {/* 3. Privacy Officer and accountability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              3. Privacy Officer and accountability
            </h2>
            <p>
              <WebhubLink /> has designated a Privacy Officer responsible for compliance with
              this Privacy Policy and applicable Canadian privacy legislation.
            </p>
            <p>
              You can contact the Privacy Officer for any privacy-related inquiry, including
              access, correction, deletion, or consent withdrawal requests:
            </p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] underline">
                  privacy@toprates.ca
                </a>
              </li>
              <li>Postal address: available on request via privacy@toprates.ca</li>
            </ul>
            <p>
              We will respond to legitimate privacy inquiries within thirty (30) days of
              receipt, in accordance with PIPEDA. If we are unable to respond within that
              timeframe, we will notify you of the delay and the reason.
            </p>
          </section>

          {/* 4. Information we collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              4. Information we collect
            </h2>
            <p>
              We collect only the personal information necessary for the purposes described in
              Section 5. We categorize the information we collect as follows:
            </p>

            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Category</th>
                  <th className={TH}>What it includes</th>
                  <th className={TH}>How we collect it</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}>
                    <strong>Identity Data</strong>
                  </td>
                  <td className={TD}>Your name and any title you choose to share with us.</td>
                  <td className={TD}>
                    Provided by you when you submit a contact or referral form.
                  </td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Contact Data</strong>
                  </td>
                  <td className={TD}>
                    Email address, telephone number (if provided), province, and contact-time
                    preferences.
                  </td>
                  <td className={TD}>
                    Provided by you when you submit a contact or referral form.
                  </td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Inquiry Data</strong>
                  </td>
                  <td className={TD}>
                    Age range, type of insurance product you are interested in, optional
                    message describing your situation.
                  </td>
                  <td className={TD}>
                    Provided by you when you submit our life insurance referral form.
                  </td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Consent Data</strong>
                  </td>
                  <td className={TD}>
                    The verbatim consent text you agreed to, the timestamp of your consent,
                    your IP address at submission, and your browser user-agent string.
                  </td>
                  <td className={TD}>
                    Captured automatically when you submit any form, as proof of consent under
                    CASL and PIPEDA.
                  </td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Technical Data</strong>
                  </td>
                  <td className={TD}>
                    IP address, browser type and version, device type, operating system, pages
                    viewed, referring page, time spent on pages.
                  </td>
                  <td className={TD}>
                    Collected automatically through standard server logs and analytics tools.
                  </td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Communications Data</strong>
                  </td>
                  <td className={TD}>
                    The contents of emails you send to us, and any other communications you
                    initiate with us.
                  </td>
                  <td className={TD}>
                    Provided by you when you contact us directly.
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="font-semibold mt-6">
              What we do NOT collect through TopRates.ca:
            </p>
            <ul>
              <li>Driver&rsquo;s licence numbers, motor vehicle records, or driving history.</li>
              <li>Insurance claims history.</li>
              <li>Medical history, prescription records, or health diagnoses.</li>
              <li>
                Detailed financial information (income, net worth, account balances, investment
                statements).
              </li>
              <li>Beneficiary designations or estate planning details.</li>
              <li>Telephone call recordings.</li>
            </ul>
            <p>
              If you proceed to obtain a quote or apply for a policy with KLC Group Canada
              Inc., that firm may collect some or all of the above categories of information
              directly from you, under its own privacy practices and FSRA-regulated framework.
              We do not collect, transmit, or retain those categories of information on KLC
              Group Canada Inc.&rsquo;s behalf.
            </p>
          </section>

          {/* 5. Why we collect personal information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              5. Why we collect personal information
            </h2>
            <p>
              We collect, use, and disclose personal information only for purposes that a
              reasonable person would consider appropriate in the circumstances. The table
              below sets out the purposes for which we use each category of information.
            </p>

            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Purpose</th>
                  <th className={TH}>How we use the information</th>
                  <th className={TH}>Categories used</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}>
                    <strong>Responding to inquiries</strong>
                  </td>
                  <td className={TD}>
                    To respond to questions or inquiries you send through our contact form.
                  </td>
                  <td className={TD}>Identity, Contact, Communications</td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Insurance referrals to KLC Group Canada Inc.</strong>
                  </td>
                  <td className={TD}>
                    To forward your inquiry, with the contextual details you provide, to a
                    licensed advisor at KLC Group Canada Inc. so that they can contact you
                    about the insurance products you have expressed interest in.
                  </td>
                  <td className={TD}>Identity, Contact, Inquiry, Consent</td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Sending commercial messages (with your consent)</strong>
                  </td>
                  <td className={TD}>
                    To send you optional educational content, product updates, or platform
                    launch notifications. You may withdraw consent at any time.
                  </td>
                  <td className={TD}>Contact, Consent</td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Maintaining consent records</strong>
                  </td>
                  <td className={TD}>
                    To demonstrate, where required by CASL and PIPEDA, that you provided
                    consent and what you consented to.
                  </td>
                  <td className={TD}>Consent, Technical</td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Operating and improving the website</strong>
                  </td>
                  <td className={TD}>
                    To understand how visitors use the site, identify performance issues, and
                    improve content. Aggregate analytics where possible.
                  </td>
                  <td className={TD}>Technical</td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Detecting and preventing abuse</strong>
                  </td>
                  <td className={TD}>
                    To identify automated form submissions, fraudulent activity, or misuse of
                    the website.
                  </td>
                  <td className={TD}>Technical, Consent</td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Legal compliance</strong>
                  </td>
                  <td className={TD}>
                    To comply with applicable laws, regulatory obligations, court orders, or to
                    protect our legal rights.
                  </td>
                  <td className={TD}>All categories, as applicable</td>
                </tr>
              </tbody>
            </table>

            <p>
              We will not use your personal information for purposes that are materially
              different from those listed above without first obtaining your consent.
            </p>
          </section>

          {/* 6. Your consent */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">6. Your consent</h2>
            <p>
              We rely on your consent for collecting, using, and disclosing your personal
              information. The form of consent we rely on depends on the sensitivity of the
              information and the purpose:
            </p>
            <ul>
              <li>
                <strong>Express opt-in consent</strong> is required when you submit any form on
                TopRates.ca that collects personal information. You provide express consent by
                checking the consent box presented at the form, after reading the consent text.
                We store the verbatim consent text and the date and time of your consent for
                our records.
              </li>
              <li>
                <strong>Implied consent</strong> may be relied on for limited purposes such as
                responding to direct inquiries you send us by email, where the purpose of
                collection is obvious from your communication.
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#1a365d] mt-6 mb-3">Withdrawing consent</h3>
            <p>
              You may withdraw your consent at any time, subject to legal or contractual
              restrictions and reasonable notice. To withdraw consent:
            </p>
            <ul>
              <li>
                Visit{' '}
                <Link href="/withdraw-consent" className="text-[#0d9488] underline">
                  /withdraw-consent
                </Link>{' '}
                on our website and submit your email address.
              </li>
              <li>
                Or email{' '}
                <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] underline">
                  privacy@toprates.ca
                </a>{' '}
                requesting that your consent be withdrawn.
              </li>
            </ul>
            <p>
              When you withdraw consent, we will mark your record as withdrawn and stop further
              contact through our referral form. As required by Canadian privacy and CASL
              legislation, we retain a record of your original consent and its withdrawal as
              compliance proof. Your record is marked as withdrawn but not deleted from this
              consent log. If you wish your record to be fully deleted (rather than marked as
              withdrawn), email privacy@toprates.ca to request deletion.
            </p>
            <p>
              If you have already been referred to KLC Group Canada Inc. and have begun
              communications with them, you must contact KLC Group Canada Inc. directly to
              withdraw consent for any further communications from them. Their contact
              information will be provided when they reach out, or upon your request to us.
            </p>
          </section>

          {/* 7. How we share personal information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              7. How we share personal information
            </h2>
            <p>
              We do not sell your personal information. We do not rent or trade your personal
              information. We share personal information only in the following circumstances:
            </p>

            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Recipient</th>
                  <th className={TH}>Information shared</th>
                  <th className={TH}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}>
                    <strong>KLC Group Canada Inc.</strong>
                  </td>
                  <td className={TD}>
                    Identity Data, Contact Data, Inquiry Data, and Consent Data submitted
                    through our life insurance referral form.
                  </td>
                  <td className={TD}>
                    To enable KLC Group Canada Inc.&rsquo;s licensed advisors to contact you
                    about the insurance products you indicated interest in.
                  </td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Sanity (CMS hosting)</strong>
                  </td>
                  <td className={TD}>
                    Form submission records (Identity, Contact, Inquiry, Consent, Technical
                    Data).
                  </td>
                  <td className={TD}>
                    To store form submissions on hosted database infrastructure.
                  </td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Resend (email delivery)</strong>
                  </td>
                  <td className={TD}>
                    Identity Data, Contact Data, and the body of referral emails forwarded to
                    KLC Group Canada Inc.
                  </td>
                  <td className={TD}>To deliver referral emails reliably.</td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Vercel (hosting / infrastructure)</strong>
                  </td>
                  <td className={TD}>
                    Technical Data, in the form of standard request logs.
                  </td>
                  <td className={TD}>To operate the website infrastructure.</td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Mortgage brokerage referral partner</strong>
                  </td>
                  <td className={TD}>
                    Identity, Contact, Inquiry Data, where you submit a mortgage inquiry
                    through our contact form. (Disclosed on the relevant page where this
                    referral is offered.)
                  </td>
                  <td className={TD}>
                    To refer mortgage inquiries under the MBLAA referral arrangement exemption.
                  </td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Credit card issuers (affiliate links)</strong>
                  </td>
                  <td className={TD}>
                    No personal information is transferred by us. If you click an affiliate
                    link and proceed to apply, your information is collected directly by the
                    card issuer under their own privacy practices.
                  </td>
                  <td className={TD}>Affiliate compensation tracking only.</td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Legal authorities</strong>
                  </td>
                  <td className={TD}>
                    Categories of information as required, for compliance with valid legal
                    process or to protect our legal rights.
                  </td>
                  <td className={TD}>Legal compliance.</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg font-bold text-[#1a365d] mt-6 mb-3">
              Independent controllers
            </h3>
            <p>
              When we forward your information to KLC Group Canada Inc., to a mortgage
              brokerage referral partner, or to any other regulated third party, that recipient
              becomes an independent controller of your information for the purposes of
              providing their licensed services. Each such recipient is responsible for its own
              privacy practices, communications, and compliance obligations once it receives
              your information. You may need to contact the recipient directly to exercise
              privacy rights regarding the information they hold about you.
            </p>
          </section>

          {/* 8. Cookies and analytics */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">8. Cookies and analytics</h2>
            <p>
              TopRates.ca uses limited cookies and analytics to operate the website, understand
              how visitors use it, and improve content over time.
            </p>

            <h3 className="text-lg font-bold text-[#1a365d] mt-6 mb-3">
              Strictly necessary cookies
            </h3>
            <p>
              These cookies are required for the website to function properly. They include
              session cookies and cookies that remember your interaction with our forms during
              a single visit. You cannot opt out of these cookies if you wish to use our
              website.
            </p>

            <h3 className="text-lg font-bold text-[#1a365d] mt-6 mb-3">Analytics</h3>
            <p>
              We use privacy-respecting analytics to understand traffic patterns and content
              performance. Where possible we use tools that do not collect personally
              identifiable information and do not require consent banners under PIPEDA.
            </p>
            <p>
              If we add more invasive analytics or advertising cookies in the future, we will
              update this Privacy Policy and present a cookie consent banner to obtain your
              consent before doing so.
            </p>
          </section>

          {/* 9. How long we keep your information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              9. How long we keep your information
            </h2>
            <p>
              We retain personal information only as long as necessary for the purposes for
              which it was collected, or as required by applicable law. Specific retention
              periods are described below.
            </p>

            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Type of record</th>
                  <th className={TH}>Retention period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}>
                    <strong>Life insurance referral submissions</strong>
                  </td>
                  <td className={TD}>
                    Twenty-four (24) months from the date of submission, after which records
                    are purged unless you have asked for earlier deletion or the record has
                    been retained as part of a converted customer relationship.
                  </td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>General contact-form inquiries</strong>
                  </td>
                  <td className={TD}>
                    Ninety (90) days from the date of submission if no further response is
                    needed; longer where an active conversation is in progress.
                  </td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Consent withdrawal records</strong>
                  </td>
                  <td className={TD}>
                    Retained for the same period as the underlying record (e.g., 24 months for
                    referrals), as proof of consent withdrawal under CASL.
                  </td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Server logs</strong>
                  </td>
                  <td className={TD}>
                    Up to thirty (30) days, for security and operational purposes.
                  </td>
                </tr>
                <tr>
                  <td className={TD}>
                    <strong>Records subject to legal hold</strong>
                  </td>
                  <td className={TD}>
                    Retained for as long as required by applicable law or legal process.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              When we no longer have a legitimate business or legal reason to retain your
              personal information, we will securely delete or anonymize it.
            </p>
          </section>

          {/* 10. How we protect your information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              10. How we protect your information
            </h2>
            <p>
              We use reasonable physical, organizational, and technological safeguards to
              protect personal information against loss, theft, unauthorized access,
              disclosure, copying, use, or modification. These measures include:
            </p>
            <ul>
              <li>Encrypted transmission of personal information using HTTPS / TLS.</li>
              <li>Encrypted storage of form submissions on hosted database infrastructure.</li>
              <li>Access controls limiting who can view personal information.</li>
              <li>Audit logging of administrative access to personal information.</li>
              <li>
                Periodic review of vendors and service providers that handle personal
                information.
              </li>
            </ul>
            <p>
              No method of transmission over the internet or electronic storage is fully
              secure. While we strive to use commercially reasonable means to protect your
              personal information, we cannot guarantee absolute security. If a privacy breach
              occurs that creates a real risk of significant harm, we will notify affected
              individuals and the Office of the Privacy Commissioner of Canada in accordance
              with PIPEDA.
            </p>
          </section>

          {/* 11. International data transfers */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              11. International data transfers
            </h2>
            <p>
              Some of the service providers we use to operate TopRates.ca process or store data
              outside of Canada, including in the United States and the European Union. When
              personal information is transferred outside of Canada, it may become subject to
              the laws of the destination country, including the laws of any government, court,
              regulator, or law enforcement agency in that country.
            </p>
            <p>
              We use service providers that are contractually obligated to protect personal
              information in accordance with our standards. By using TopRates.ca and submitting
              personal information to us, you acknowledge that your information may be
              transferred and processed outside of Canada.
            </p>
          </section>

          {/* 12. Your rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">12. Your rights</h2>
            <p>
              Subject to applicable Canadian privacy law, you have the following rights
              regarding your personal information:
            </p>
            <ul>
              <li>
                <strong>Right of access:</strong> to request a copy of the personal information
                we hold about you and information about how it is used and disclosed.
              </li>
              <li>
                <strong>Right of correction:</strong> to request that we correct inaccurate or
                incomplete information about you.
              </li>
              <li>
                <strong>Right of consent withdrawal:</strong> to withdraw consent for our use
                of your personal information at any time, subject to legal or contractual
                restrictions.
              </li>
              <li>
                <strong>Right of deletion:</strong> to request the deletion of your personal
                information, subject to retention obligations under applicable law.
              </li>
              <li>
                <strong>Right to file a complaint:</strong> to file a complaint with our
                Privacy Officer or with the Office of the Privacy Commissioner of Canada.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact our Privacy Officer at{' '}
              <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] underline">
                privacy@toprates.ca
              </a>
              . We may need to verify your identity before responding to a request, and we will
              respond within thirty (30) days as required by PIPEDA.
            </p>
          </section>

          {/* 13. Children and minors */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">13. Children and minors</h2>
            <p>
              TopRates.ca is not directed at children under the age of thirteen (13). We do not
              knowingly collect personal information from children under thirteen. If you
              become aware that a child under thirteen has provided personal information
              through TopRates.ca, please contact us at{' '}
              <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] underline">
                privacy@toprates.ca
              </a>{' '}
              and we will take steps to delete the information.
            </p>
          </section>

          {/* 14. Changes to this Privacy Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              14. Changes to this Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, technology, legal obligations, or other operational factors. The
              &ldquo;Last updated&rdquo; date at the top of this policy indicates the most
              recent revision.
            </p>
            <p>
              When we make material changes that affect how we handle your personal
              information, we will provide notice through TopRates.ca, by email if we have your
              contact information, or both. Your continued use of TopRates.ca after a Privacy
              Policy update constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* 15. Filing a complaint */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">15. Filing a complaint</h2>
            <p>
              If you have a concern or complaint about how we have handled your personal
              information, please contact our Privacy Officer first at{' '}
              <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] underline">
                privacy@toprates.ca
              </a>
              . We will investigate your concern and respond within thirty (30) days.
            </p>
            <p>
              If you are not satisfied with our response, you may file a complaint with the
              Office of the Privacy Commissioner of Canada:
            </p>
            <ul>
              <li>
                Website:{' '}
                <a
                  href="https://priv.gc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0d9488] underline"
                >
                  priv.gc.ca
                </a>
              </li>
              <li>Telephone: 1-800-282-1376</li>
              <li>Address: 30 Victoria Street, Gatineau, Quebec, K1A 1H3</li>
            </ul>
          </section>

          {/* 16. Contact us */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">16. Contact us</h2>
            <p>For questions or concerns about this Privacy Policy or our privacy practices:</p>
            <ul>
              <li>
                <strong>Privacy and data protection inquiries:</strong>{' '}
                <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] underline">
                  privacy@toprates.ca
                </a>
              </li>
              <li>
                <strong>General inquiries:</strong>{' '}
                <a href="mailto:contact@toprates.ca" className="text-[#0d9488] underline">
                  contact@toprates.ca
                </a>
              </li>
              <li>
                <strong>Editorial complaints or corrections:</strong>{' '}
                <a href="mailto:editorial@toprates.ca" className="text-[#0d9488] underline">
                  editorial@toprates.ca
                </a>
              </li>
              <li>
                <strong>Consent withdrawal:</strong> visit{' '}
                <Link href="/withdraw-consent" className="text-[#0d9488] underline">
                  /withdraw-consent
                </Link>{' '}
                on our website, or email{' '}
                <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] underline">
                  privacy@toprates.ca
                </a>
                .
              </li>
            </ul>
          </section>

          <hr className="border-t-2 border-[#0d9488] my-8" />

          <p className="text-sm text-gray-500 italic">
            TopRates.ca is operated by <WebhubLink />.
          </p>
          <p className="text-sm text-gray-500 italic">
            Insurance referral partner: KLC Group Canada Inc., licensed under FSRA.
          </p>
        </div>
      </PageWrapper>
    </>
  );
}
