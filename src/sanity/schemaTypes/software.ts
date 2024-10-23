import { defineField, defineType } from 'sanity';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default defineType({
  name: 'software',
  title: 'Software',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
        },
      ],
    }),
    orderRankField({ type: 'software' }), // Add orderRank field
  ],
  orderings: [orderRankOrdering], // Enable ordering by rank
});
