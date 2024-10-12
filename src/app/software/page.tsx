// app/software/page.tsx
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { Software } from '@/types'

const softwareQuery = groq`*[_type == "software"] | order(_createdAt desc) {
  _id,
  title,
  shortDescription,
  url,
  content
}`

async function getSoftwareItems(): Promise<Software[]> {
  return await client.fetch(softwareQuery)
}

export default async function SoftwarePage() {
  const softwareItems = await getSoftwareItems()

  return (
    <div className="h-full p-8 overflow-auto scrollbar-blue">
      <h1 className="text-primary text-6xl font-bold mb-8">Software</h1>
      <div className="space-y-8">
        {softwareItems.map((item: Software) => (
          <SoftwareItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  )
}

function SoftwareItem({ item }: { item: Software }) {
  return (
    <div className="border-b border-primary border-opacity-10 pb-4">
      <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
      {item.shortDescription && (
        <p className="mb-2 text-sm">{item.shortDescription}</p>
      )}
      {item.url && (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary underline mb-2 block">
          View Project
        </a>
      )}
      {item.content && (
        <div className="mb-2">
          {item.content.map((block) => (
            <div key={block._key}>
              {block.children?.map((child) => (
                <span key={child._key}>{child.text}</span>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}