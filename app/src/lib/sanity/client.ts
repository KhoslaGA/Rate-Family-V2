import { createClient, type ClientConfig } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-10-01';
const token = process.env.SANITY_API_READ_TOKEN;

if (!projectId || !dataset) {
  throw new Error(
    'Missing Sanity environment variables: NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET',
  );
}

const baseConfig: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  // Serve cached content in production, fresh in dev/preview.
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
};

/**
 * Read-only client used by server components and static generation.
 */
export const client = createClient(baseConfig);

/**
 * Preview client — uses a read token and bypasses the CDN to return drafts.
 * Requires SANITY_API_READ_TOKEN to be set.
 */
export const previewClient = createClient({
  ...baseConfig,
  useCdn: false,
  token,
  perspective: 'previewDrafts',
});

/**
 * Pick the right client based on preview mode.
 */
export function getClient(usePreview: boolean = false) {
  return usePreview ? previewClient : client;
}

/**
 * Thin wrapper around client.fetch with Next.js caching tags.
 * Use `revalidate` (seconds) or `tags` (array) to control revalidation.
 */
export async function sanityFetch<T = unknown>({
  query,
  params = {},
  preview = false,
  revalidate = 60,
  tags,
}: {
  query: string;
  params?: Record<string, unknown>;
  preview?: boolean;
  revalidate?: number | false;
  tags?: string[];
}): Promise<T> {
  const c = getClient(preview);
  return c.fetch<T>(query, params, {
    next: {
      revalidate: preview ? 0 : revalidate,
      tags,
    },
  });
}
