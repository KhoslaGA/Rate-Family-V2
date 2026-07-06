import { defineType, defineField } from 'sanity';

/**
 * Life insurance referral document.
 *
 * Captures the minimum-necessary information from a /life-insurance lead
 * form submission, plus full CASL consent metadata, plus handoff tracking
 * for the forward-to-KLC-Group step.
 *
 * Fields not collected here (medical history, financial details, current
 * coverage, beneficiary designations) are collected by KLC Group Canada
 * Inc. directly under their FSRA-regulated framework, NOT through
 * TopRates.ca.
 *
 * Retention: 24 months from submission, per PIPEDA principle 5. Withdrawal
 * sets withdrawnAt; the record is NOT deleted (compliance proof).
 */
export default defineType({
  name: 'lifeReferral',
  title: 'Life Insurance Referral',
  type: 'document',
  fields: [
    // Identity (minimum-necessary collected by Webhub4u Inc.)
    defineField({
      name: 'name',
      type: 'string',
      validation: (r) => r.required().min(2).max(100),
    }),
    defineField({
      name: 'email',
      type: 'string',
      validation: (r) => r.required().email(),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      description: 'Normalized to 10 digits, no formatting. Empty if no phone provided.',
    }),
    defineField({
      name: 'preferredContact',
      type: 'string',
      description: 'How the prospect prefers to be reached.',
      options: { list: ['email', 'phone'] },
    }),
    defineField({
      name: 'province',
      type: 'string',
      validation: (r) => r.required(),
    }),

    // Inquiry context
    defineField({
      name: 'ageRange',
      type: 'string',
      options: {
        list: ['18-29', '30-44', '45-59', '60-69', '70+'],
      },
    }),
    defineField({
      name: 'coverageInterest',
      type: 'string',
      options: {
        list: [
          'term_life',
          'whole_universal_life',
          'no_medical',
          'super_visa',
          'critical_illness',
          'disability_income',
          'long_term_care',
          'segregated_funds',
          'annuities',
          'group_retirement',
          'not_sure',
        ],
      },
    }),
    defineField({
      name: 'contactTimes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'weekday_mornings',
          'weekday_afternoons',
          'weekday_evenings',
          'weekends',
        ],
      },
    }),
    defineField({ name: 'message', type: 'text' }),

    // Source tracking (which page/component generated the lead)
    defineField({
      name: 'source',
      type: 'string',
      description: 'e.g., life_insurance_hero, life_insurance_sidebar.',
    }),
    defineField({ name: 'subPillar', type: 'string' }),
    defineField({ name: 'referer', type: 'string' }),

    // CASL consent metadata
    defineField({
      name: 'consentText',
      type: 'text',
      validation: (r) => r.required(),
      description: 'Verbatim consent text the user agreed to.',
    }),
    defineField({
      name: 'consentTimestamp',
      type: 'datetime',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'ipAddress', type: 'string' }),
    defineField({ name: 'userAgent', type: 'string' }),

    // Handoff tracking (Webhub4u Inc. → KLC Group Canada Inc.)
    defineField({
      name: 'forwardedToKlcAt',
      type: 'datetime',
      description: 'Timestamp when this lead was forwarded to KLC Group.',
    }),
    defineField({
      name: 'klcGroupReceiptConfirmed',
      type: 'boolean',
      description: 'KLC Group has confirmed receipt of the lead.',
    }),

    // Retention + withdrawal
    defineField({
      name: 'retentionUntil',
      type: 'datetime',
      description: 'Computed at submit: submittedAt + 24 months.',
    }),
    defineField({
      name: 'withdrawnAt',
      type: 'datetime',
      description: 'Set when user withdraws consent. Do NOT delete record.',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'coverageInterest' },
  },
});
