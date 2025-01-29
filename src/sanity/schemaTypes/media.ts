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
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageDisplay',
      title: 'Image Display',
      type: 'string',
      options: {
        list: [
          { title: 'Contain', value: 'contain' },
          { title: 'Cover', value: 'cover' },
        ],
      },
      initialValue: 'contain',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    orderRankField({ type: 'media' }),
  ],
  orderings: [orderRankOrdering],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
