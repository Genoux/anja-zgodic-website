'use client'

import { useEffect, useState, useRef } from 'react'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { Research } from '@/types'
import ScrollTitle from '@/app/(site)/_components/ScrollTitle'

const researchQuery = groq`*[_type == "research"] | order(_createdAt desc) {
  _id,
  title,
  content
}`

async function getResearchItems(): Promise<Research[]> {
  return await client.fetch(researchQuery)
}

export default function ResearchPage() {
  const [researchItems, setResearchItems] = useState<Research[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchResearchItems = async () => {
      const data = await getResearchItems()
      setResearchItems(data)
    }
    fetchResearchItems()
  }, [])

  return (
    <div ref={containerRef} className="h-full overflow-auto scrollbar-blue flex flex-col">
      <ScrollTitle title="Research" containerRef={containerRef} />
      <div>
        {researchItems.map((item: Research) => (
          <div key={item._id} className='px-8'>
            <ResearchItem item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

function ResearchItem({ item }: { item: Research }) {
  return (
    <div className="flex flex-col gap-4 py-8 border-b border-primary border-opacity-10">
      <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
      {item.content && (
        <div className="flex flex-col gap-6">
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
