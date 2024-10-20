'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'
import { media } from 'sanity-plugin-media'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
  ],
  cors: {
    origin: [
      'https://anja-zgodic-website.netlify.app',
      'http://localhost:3000'
    ],
    credentials: true,
  },
})