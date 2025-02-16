import { defineField, defineType } from 'sanity';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'startYear',
      title: 'Start Year',
      type: 'number',
    }),
    defineField({
      name: 'endYear',
      title: 'End Year',
      type: 'string',
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'responsibilities',
      title: 'Accomplishments & Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    orderRankField({ type: 'experience' }),
  ],
  orderings: [orderRankOrdering],
});