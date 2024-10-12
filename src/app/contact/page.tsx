// app/contact/page.tsx
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'

interface SiteSettings {
  contactEmail: string;
  contactAddress: any[]; // This is for the Portable Text content
}

const settingsQuery = groq`*[_type == "siteSettings"][0]{
  contactEmail,
  contactAddress
}`

async function getSiteSettings(): Promise<SiteSettings> {
  return await client.fetch(settingsQuery)
}

export default async function ContactPage() {
  const settings = await getSiteSettings()

  return (
    <div className="h-full p-8 overflow-auto scrollbar-blue">
      <h1 className="text-primary text-6xl font-bold mb-8">Contact</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Email</h2>
          <a href={`mailto:${settings.contactEmail}`} className="text-primary hover:underline">
            {settings.contactEmail}
          </a>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Address</h2>
          <div className="prose prose-blue">
            <PortableText value={settings.contactAddress} />
          </div>
        </div>
      </div>
    </div>
  )
}