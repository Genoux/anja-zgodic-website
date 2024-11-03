import { defineField, defineType } from 'sanity';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default defineType({
  name: 'media',
  title: 'In the media',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the hotspot functionality for image cropping
      },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    orderRankField({ type: 'media' }), // Add orderRank field
  ],
  orderings: [orderRankOrdering], // Enable ordering by rank
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
