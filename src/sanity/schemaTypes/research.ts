import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'research',
  title: 'Research',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    }),
  ],
})