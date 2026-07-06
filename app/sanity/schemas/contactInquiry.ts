import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactInquiry',
  title: 'Contact Inquiry',
  type: 'document',
  fields: [
    defineField({ name: 'product', type: 'string', title: 'Product Interest', readOnly: true }),
    defineField({ name: 'name', type: 'string', title: 'Name', readOnly: true }),
    defineField({ name: 'email', type: 'string', title: 'Email', readOnly: true }),
    defineField({ name: 'phone', type: 'string', title: 'Phone', readOnly: true }),
    defineField({ name: 'postalCode', type: 'string', title: 'Postal Code', readOnly: true }),
    defineField({ name: 'message', type: 'text', title: 'Message', readOnly: true }),
    defineField({ name: 'consent', type: 'boolean', title: 'Consent given', readOnly: true }),
    defineField({
      name: 'consentText',
      type: 'text',
      title: 'Consent text shown',
      description:
        'The exact text the user agreed to at submission. Required for CASL/PIPEDA audit.',
      readOnly: true,
    }),
    defineField({
      name: 'routedTo',
      type: 'string',
      title: 'Routed to',
      description:
        'Where this inquiry is routed for follow-up: KLC Group Canada Inc. (life/health), Future P&C list (auto/home/business — RIBO 2027), MBLAA referral partner (mortgages), Editorial response (general).',
      readOnly: true,
    }),
    defineField({ name: 'ipAddress', type: 'string', title: 'IP address', readOnly: true }),
    defineField({ name: 'userAgent', type: 'string', title: 'User agent', readOnly: true }),
    defineField({ name: 'submittedAt', type: 'datetime', title: 'Submitted at', readOnly: true }),
    defineField({
      name: 'retentionUntil',
      type: 'datetime',
      title: 'Retain until',
      description:
        'Default: submittedAt + 90 days for unconverted inquiries. Extend to 7 years if status moves to "converted".',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Converted', value: 'converted' },
          { title: 'Declined', value: 'declined' },
          { title: 'Lost', value: 'lost' },
        ],
      },
      initialValue: 'new',
    }),
    defineField({ name: 'notes', type: 'text', title: 'Internal notes' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'product', description: 'email' },
    prepare({ title, subtitle, description }) {
      return {
        title: title ? `${title} — ${description}` : '(no name)',
        subtitle: subtitle || 'unknown',
      };
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
