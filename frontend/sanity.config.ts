'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';
import { projectId, dataset } from './src/sanity/env';

export default defineConfig({
  basePath: '/studio',
  name: 'visionspring-cms',
  title: 'VisionSpring Agency CMS',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
