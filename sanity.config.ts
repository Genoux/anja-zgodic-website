'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';
import { media } from 'sanity-plugin-media';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    media(),
  ],
  cors: {
    origin: [
      'https://anja-zgodic-website.netlify.app',
      'http://localhost:3000',
      'https://anjazgodic.com',
      'https://www.anjazgodic.com',
    ],
    credentials: true,
  },
});
