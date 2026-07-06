import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import post from './sanity/schemas/post';
import author from './sanity/schemas/author';
import category from './sanity/schemas/category';
import blockContent from './sanity/schemas/blockContent';
import waitlistEntry from './sanity/schemas/waitlistEntry';
import contactInquiry from './sanity/schemas/contactInquiry';
import lifeReferral from './sanity/schemas/lifeReferral';
import labBriefing from './sanity/schemas/labBriefing';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-10-01';

export default defineConfig({
  name: 'toprates_ca',
  title: 'TopRates.ca',
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [blockContent, post, labBriefing, author, category, contactInquiry, waitlistEntry, lifeReferral],
  },
});
