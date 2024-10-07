import { defineField, defineType } from 'sanity'

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
      name: 'company',
      title: 'Company',
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
      type: 'string', // Using string to allow "present" or a year
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => [Rule.required(), Rule.max(100)],
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'responsibilities',
      title: 'Accomplishments & Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})