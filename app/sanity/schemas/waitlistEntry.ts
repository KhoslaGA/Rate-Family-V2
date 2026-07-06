import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'waitlistEntry',
  title: 'Waitlist Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
      readOnly: true,
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Which form on the site captured this entry',
      options: {
        list: [
          { title: 'Homepage hero', value: 'home_hero' },
          { title: 'Homepage bottom CTA', value: 'home_bottom_cta' },
          { title: 'Coming-soon page', value: 'coming_soon' },
          { title: 'Other', value: 'other' },
        ],
      },
      readOnly: true,
    }),
    defineField({
      name: 'consentText',
      title: 'Consent text shown to user',
      type: 'text',
      description:
        'The exact text the user agreed to at signup. Required for CASL compliance — must be retrievable to demonstrate the user agreed to receive commercial messages.',
      readOnly: true,
    }),
    defineField({
      name: 'consentScope',
      title: 'Consent scope',
      type: 'string',
      description: 'What classes of message the user has consented to receive.',
      options: {
        list: [
          { title: 'Waitlist updates only', value: 'waitlist' },
          { title: 'Waitlist + insurance content', value: 'waitlist_insurance' },
          { title: 'Waitlist + insurance + financial offers', value: 'waitlist_full' },
        ],
      },
      readOnly: true,
    }),
    defineField({
      name: 'consentMethod',
      title: 'Consent method',
      type: 'string',
      options: {
        list: [
          { title: 'Express opt-in (checkbox or signup form)', value: 'express_opt_in' },
          { title: 'Implied (form submission)', value: 'implied' },
        ],
      },
      readOnly: true,
    }),
    defineField({
      name: 'withdrawnAt',
      title: 'Consent withdrawn at',
      type: 'datetime',
      description:
        'Set when user unsubscribes. Do not delete the record — mark as withdrawn (CASL requires the audit trail).',
    }),
    defineField({
      name: 'withdrawnReason',
      title: 'Withdrawal reason',
      type: 'string',
    }),
    defineField({
      name: 'ipAddress',
      title: 'IP address at signup',
      type: 'string',
      description:
        'Captured for consent record-keeping. Treat as personal information under PIPEDA.',
      readOnly: true,
    }),
    defineField({
      name: 'userAgent',
      title: 'User Agent',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'referer',
      title: 'Referer',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'retentionUntil',
      title: 'Retain until',
      type: 'datetime',
      description:
        'PIPEDA principle 5 — limiting retention. Date after which this entry should be purged unless the user has converted to a customer or extended consent.',
      readOnly: true,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  preview: {
    select: { title: 'email', subtitle: 'source', media: 'submittedAt' },
    prepare({ title, subtitle }) {
      return { title: title || '(no email)', subtitle: subtitle || 'unknown' };
    },
  },
  orderings: [
    {
      title: 'Newest first',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
});
