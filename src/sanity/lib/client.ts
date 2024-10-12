import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


client.create({
  _type: 'siteSettings',
  _id: 'siteSettings',
  title: 'Site Settings',
  contactEmail: 'default@example.com',
  contactAddress: [{ _type: 'block', children: [{ _type: 'span', text: 'Default Address' }] }]
}).then(res => {
  console.log(`Site settings created, document ID is ${res._id}`)
})
