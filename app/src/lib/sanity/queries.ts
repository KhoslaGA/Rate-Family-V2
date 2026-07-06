/**
 * groq is just a tagged template literal for syntax highlighting.
 * We define it here to avoid pulling in next-sanity (which has heavy peer deps).
 */
const groq = (strings: TemplateStringsArray, ...values: unknown[]) =>
  String.raw(strings, ...values);

/**
 * Reusable GROQ projections.
 *
 * `postCardProjection` is the minimal shape needed for listing cards.
 * `postFullProjection` is the full detail shape used on article pages.
 */

const postCardProjection = `
  _id,
  title,
  "slug": slug.current,
  "routePrefix": coalesce(routePrefix, "blog"),
  excerpt,
  publishedAt,
  lastUpdated,
  readingTime,
  wordCountTarget,
  articleType,
  priority,
  featured,
  mainImage {
    ...,
    asset -> {
      _id,
      url,
      metadata { dimensions { height, width }, lqip }
    },
    alt
  },
  author -> {
    _id,
    name,
    "slug": slug.current,
    image { asset -> { url } }
  },
  "categories": categories[] -> {
    _id,
    title,
    "slug": slug.current,
    pillar
  },
  "primaryCategory": categories[0] -> {
    _id,
    title,
    "slug": slug.current,
    pillar
  }
`;

const postFullProjection = `
  ${postCardProjection},
  body,
  tags,
  searchIntent,
  seo {
    metaTitle,
    metaDescription,
    primaryKeyword,
    secondaryKeywords,
    canonicalUrl,
    noindex,
    ogImage { asset -> { url } }
  },
  faqItems[] { question, answer },
  sources[] { label, url, publishedDate },
  reviewedBy -> {
    _id,
    name,
    "slug": slug.current,
    bio
  },
  author -> {
    _id,
    name,
    "slug": slug.current,
    bio,
    image { asset -> { url } }
  },
  "relatedPosts": relatedPosts[] -> {
    _id,
    title,
    "slug": slug.current,
    "routePrefix": coalesce(routePrefix, "blog"),
    excerpt,
    publishedAt,
    readingTime,
    mainImage { asset -> { url }, alt },
    "primaryCategory": categories[0] -> { title, "slug": slug.current }
  }
`;

/* ------------------------------------------------------------------ */
/* Listing queries                                                     */
/* ------------------------------------------------------------------ */

export const getAllPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]
    | order(publishedAt desc) {
      ${postCardProjection}
    }
`;

export const getPaginatedPostsQuery = groq`
  {
    "items": *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]
      | order(publishedAt desc)[$start...$end] {
        ${postCardProjection}
      },
    "total": count(*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))])
  }
`;

export const getRecentPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]
    | order(publishedAt desc)[0...6] {
      ${postCardProjection}
    }
`;

export const getFeaturedPostQuery = groq`
  *[_type == "post" && featured == true && defined(slug.current) && !(_id in path("drafts.**"))]
    | order(publishedAt desc)[0] {
      ${postCardProjection}
    }
`;

export const getPostsByCategoryQuery = groq`
  *[_type == "post"
    && defined(slug.current)
    && !(_id in path("drafts.**"))
    && $slug in categories[]->slug.current]
    | order(publishedAt desc) {
      ${postCardProjection}
    }
`;

export const getPostsByAuthorQuery = groq`
  *[_type == "post"
    && defined(slug.current)
    && !(_id in path("drafts.**"))
    && author->slug.current == $authorSlug]
    | order(publishedAt desc) {
      ${postCardProjection}
    }
`;

/* ------------------------------------------------------------------ */
/* Detail queries                                                      */
/* ------------------------------------------------------------------ */

export const getPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    ${postFullProjection}
  }
`;

export const getAllPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] {
    "slug": slug.current,
    "routePrefix": coalesce(routePrefix, "blog")
  }
`;

export const getCategoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    pillar,
    seoGoal
  }
`;

export const getCategoriesQuery = groq`
  *[_type == "category"] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    pillar,
    description,
    seoGoal,
    order,
    "postCount": count(*[_type == "post" && references(^._id) && !(_id in path("drafts.**"))])
  }
`;

export const getAuthorBySlugQuery = groq`
  *[_type == "author" && slug.current == $authorSlug][0] {
    _id,
    name,
    "slug": slug.current,
    bio,
    image { asset -> { url } }
  }
`;

export const getBlogStatsQuery = groq`
  {
    "totalPosts": count(*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]),
    "totalCategories": count(*[_type == "category"]),
    "avgReadingTime": round(math::avg(*[_type == "post" && defined(readingTime)].readingTime))
  }
`;

export const countPostsQuery = groq`
  count(*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))])
`;

/* ------------------------------------------------------------------ */
/* Lab Briefings                                                       */
/* ------------------------------------------------------------------ */

const labBriefingCardProjection = `
  _id,
  issueNumber,
  title,
  subtitle,
  topic,
  "slug": slug.current,
  summary,
  publishedAt,
  snapshotDate,
  lastUpdated,
  readingTime,
  featured,
  mainImage {
    ...,
    asset -> {
      _id,
      url,
      metadata { dimensions { height, width }, lqip }
    },
    alt,
    caption
  },
  analyst -> {
    _id,
    name,
    "slug": slug.current,
    image { asset -> { url } }
  }
`;

const labBriefingFullProjection = `
  ${labBriefingCardProjection},
  body,
  methodology,
  keyFindings[] { finding, metric },
  dataSources[] { label, url, publishedDate, kind },
  sampleSize,
  downloadableData { asset -> { url, originalFilename, size } },
  relatedRateIndex,
  tags,
  seo {
    metaTitle,
    metaDescription,
    canonicalUrl,
    noindex,
    ogImage { asset -> { url } }
  },
  analyst -> {
    _id,
    name,
    "slug": slug.current,
    bio,
    image { asset -> { url } }
  },
  reviewedBy -> {
    _id,
    name,
    "slug": slug.current,
    bio
  },
  "relatedBriefings": relatedBriefings[] -> {
    _id,
    issueNumber,
    title,
    subtitle,
    topic,
    "slug": slug.current,
    summary,
    publishedAt,
    readingTime,
    mainImage { asset -> { url }, alt }
  }
`;

export const getAllLabBriefingsQuery = groq`
  *[_type == "labBriefing" && defined(slug.current) && !(_id in path("drafts.**"))]
    | order(issueNumber desc) {
      ${labBriefingCardProjection}
    }
`;

export const getPaginatedLabBriefingsQuery = groq`
  {
    "items": *[_type == "labBriefing" && defined(slug.current) && !(_id in path("drafts.**"))]
      | order(issueNumber desc)[$start...$end] {
        ${labBriefingCardProjection}
      },
    "total": count(*[_type == "labBriefing" && defined(slug.current) && !(_id in path("drafts.**"))])
  }
`;

export const getFeaturedLabBriefingQuery = groq`
  *[_type == "labBriefing" && featured == true && defined(slug.current) && !(_id in path("drafts.**"))]
    | order(issueNumber desc)[0] {
      ${labBriefingCardProjection}
    }
`;

export const getLabBriefingBySlugQuery = groq`
  *[_type == "labBriefing" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    ${labBriefingFullProjection}
  }
`;

export const getAllLabBriefingSlugsQuery = groq`
  *[_type == "labBriefing" && defined(slug.current) && !(_id in path("drafts.**"))] {
    "slug": slug.current
  }
`;

