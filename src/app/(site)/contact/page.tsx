import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { Contact } from '@/types'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { Key } from 'react'
import { UrlObject } from 'url'

const ContactQuery = groq`*[_type == "contact"][0]`

async function getSiteSettings(): Promise<Contact> {
  return await client.fetch(ContactQuery)
}

export default async function ContactPage() {
  const contact = await getSiteSettings()
  console.log(contact)

  return (
    <div className="h-full p-8 overflow-auto scrollbar-blue flex flex-col items-center justify-center">
      <div className='flex flex-col items-start justify-center gap-2 w-full h-full border border-primary border-opacity-10 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg'>
        <h1 className="text-primary text-6xl font-bold mb-8">Contact</h1>
        <div className="flex gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
              {contact.email}
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Address</h2>
            <div className="prose prose-blue">
              {contact.address ? <PortableText value={contact.address} /> : null}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Social Links</h2>
          <div className="flex space-x-4">
            {contact.socialLinks?.map((link: { url?: string; platform?: string; _key: string }, index: number) => (
              link.url && link.platform ? (
                <Link key={link._key} href={link.url} className="text-primary hover:text-primary-dark transition-colors duration-300">
                  <Image
                    src={`/images/${link.platform.toLowerCase()}.svg`}
                    alt={link.platform}
                    width={24}
                    height={24}
                    className="text-primary"
                  />
                </Link>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}