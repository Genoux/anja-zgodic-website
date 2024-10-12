// schemas/siteSettings.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'contactAddress',
      title: 'Contact Address',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ]
})