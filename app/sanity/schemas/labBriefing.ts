import { defineType, defineField, defineArrayMember } from 'sanity';

/**
 * TopRates Lab Briefing — research-grade publication.
 *
 * Distinct from `post` (editorial/news). Lab Briefings are signed analyst
 * pieces with mandatory methodology, data sources, and a snapshot date so
 * findings can be reproduced and time-stamped.
 */
export default defineType({
  name: 'labBriefing',
  title: 'Lab Briefing',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identity', default: true },
    { name: 'content', title: 'Content' },
    { name: 'research', title: 'Research' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'issueNumber',
      title: 'Issue Number',
      type: 'number',
      description: 'Sequential briefing number. Displayed as "Briefing No. 04".',
      validation: (Rule) => Rule.required().positive().integer(),
      group: 'identity',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
      group: 'identity',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      group: 'identity',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Deck',
      type: 'string',
      description: 'One-line framing under the title (e.g., "Q2 2026 Ontario Auto Snapshot").',
      group: 'identity',
    }),
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'string',
      description: 'Short tag shown on cards (e.g., "Auto", "Rate Index", "Methodology").',
      options: {
        list: [
          { title: 'Auto', value: 'auto' },
          { title: 'Home', value: 'home' },
          { title: 'Life', value: 'life' },
          { title: 'Rate Index', value: 'rate-index' },
          { title: 'Reform', value: 'reform' },
          { title: 'Methodology', value: 'methodology' },
          { title: 'Market', value: 'market' },
        ],
      },
      validation: (Rule) => Rule.required(),
      group: 'identity',
    }),
    defineField({
      name: 'analyst',
      title: 'Analyst (Author)',
      type: 'reference',
      to: [{ type: 'author' }],
      description: 'Signed byline — research is always attributed to a person.',
      validation: (Rule) => Rule.required(),
      group: 'identity',
    }),
    defineField({
      name: 'reviewedBy',
      title: 'Reviewed By',
      type: 'reference',
      to: [{ type: 'author' }],
      description: 'Optional second analyst who peer-reviewed the methodology.',
      group: 'identity',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      group: 'identity',
    }),
    defineField({
      name: 'snapshotDate',
      title: 'Data Snapshot Date',
      type: 'date',
      description:
        'The date the underlying data was pulled. Findings are valid as of this date.',
      validation: (Rule) => Rule.required(),
      group: 'research',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      group: 'identity',
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Chart / Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Lead chart or image. Charts preferred over stock photography.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
      group: 'content',
    }),
    defineField({
      name: 'summary',
      title: 'Executive Summary',
      type: 'text',
      rows: 4,
      description: '2–4 sentence top-line summary. Surfaced on cards and listing pages.',
      validation: (Rule) => Rule.required().max(400),
      group: 'content',
    }),
    defineField({
      name: 'keyFindings',
      title: 'Key Findings',
      type: 'array',
      description: '3–6 bulletable takeaways. Shown above the body.',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'finding', title: 'Finding', type: 'string', validation: (R) => R.required() }),
            defineField({ name: 'metric', title: 'Headline Metric', type: 'string', description: 'Optional — e.g., "+12.4%"' }),
          ],
          preview: {
            select: { title: 'finding', subtitle: 'metric' },
          },
        }),
      ],
      validation: (Rule) => Rule.min(3).max(8),
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'methodology',
      title: 'Methodology',
      type: 'blockContent',
      description:
        'How the data was collected, sample size, time range, assumptions, caveats. Required — surfaces in footer.',
      validation: (Rule) => Rule.required(),
      group: 'research',
    }),
    defineField({
      name: 'dataSources',
      title: 'Data Sources',
      type: 'array',
      description: 'Datasets, regulators, internal systems used to produce findings.',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string', validation: (R) => R.required() }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
            defineField({ name: 'publishedDate', title: 'Source Date', type: 'date' }),
            defineField({
              name: 'kind',
              title: 'Kind',
              type: 'string',
              options: {
                list: [
                  { title: 'Internal (TopRates)', value: 'internal' },
                  { title: 'Regulator', value: 'regulator' },
                  { title: 'Industry / Insurer', value: 'industry' },
                  { title: 'Government / StatCan', value: 'government' },
                  { title: 'Academic', value: 'academic' },
                  { title: 'Other', value: 'other' },
                ],
              },
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'kind' },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
      group: 'research',
    }),
    defineField({
      name: 'sampleSize',
      title: 'Sample Size / N',
      type: 'string',
      description: 'Optional. E.g., "8,412 quotes" or "Ontario FSRA filings, 2020–2025".',
      group: 'research',
    }),
    defineField({
      name: 'downloadableData',
      title: 'Downloadable Dataset',
      type: 'file',
      description: 'Optional CSV / XLSX export so readers can verify findings.',
      group: 'research',
    }),
    defineField({
      name: 'relatedRateIndex',
      title: 'Linked Rate Index Page',
      type: 'url',
      description: 'Optional anchor to the live /rate-index slice this briefing analyzes.',
      group: 'research',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
      group: 'identity',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Pin to top of /lab index.',
      initialValue: false,
      group: 'identity',
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (min)',
      type: 'number',
      validation: (Rule) => Rule.positive().integer(),
      group: 'identity',
    }),
    defineField({
      name: 'relatedBriefings',
      title: 'Related Briefings',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'labBriefing' }] })],
      validation: (Rule) => Rule.max(3),
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
        defineField({ name: 'canonicalUrl', title: 'Canonical URL', type: 'url' }),
        defineField({ name: 'noindex', title: 'No-index', type: 'boolean', initialValue: false }),
        defineField({
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Issue Number (newest first)',
      name: 'issueDesc',
      by: [{ field: 'issueNumber', direction: 'desc' }],
    },
    {
      title: 'Published (newest first)',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      issue: 'issueNumber',
      analyst: 'analyst.name',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const { title, issue, analyst } = selection;
      return {
        title: `No. ${String(issue ?? '?').padStart(2, '0')} — ${title}`,
        subtitle: analyst ? `by ${analyst}` : undefined,
        media: selection.media,
      };
    },
  },
});
