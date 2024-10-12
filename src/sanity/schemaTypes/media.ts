// schemas/inTheMedia.ts

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'media',
  title: 'Media',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true // Enables the hotspot functionality for image cropping
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
})