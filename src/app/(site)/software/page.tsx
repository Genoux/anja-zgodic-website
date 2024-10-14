'use client'

import { useEffect, useState, useRef } from 'react'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { Software } from '@/types'
import ScrollTitle from '@/app/(site)/_components/ScrollTitle'

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

export default function SoftwarePage() {
  const [softwareItems, setSoftwareItems] = useState<Software[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchSoftwareItems = async () => {
      const data = await getSoftwareItems()
      setSoftwareItems(data)
    }
    fetchSoftwareItems()
  }, [])

  return (
    <div ref={containerRef} className="h-full overflow-auto scrollbar-blue">
      <ScrollTitle title="Software" containerRef={containerRef} />
      <div className='px-8'>
        {softwareItems.map((item: Software) => (
          <SoftwareItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  )
}

function SoftwareItem({ item }: { item: Software }) {
  return (
    <div  className="flex flex-col gap-4 py-8 border-b border-primary border-opacity-10">
      <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
      {item.shortDescription && (
        <p className="mb-2 text-sm">{item.shortDescription}</p>
      )}
      {item.url && (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary underline block">
          View Project
        </a>
      )}
      {item.content && (
        <div>
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
