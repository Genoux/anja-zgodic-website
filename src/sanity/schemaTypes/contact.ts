// schemas/contact.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ]
})