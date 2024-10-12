// app/research/page.tsx
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { Research } from '@/types'

const researchQuery = groq`*[_type == "research"] | order(_createdAt desc) {
  _id,
  title,
  content
}`

async function getResearchItems(): Promise<Research[]> {
  return await client.fetch(researchQuery)
}

export default async function ResearchPage() {
  const researchItems = await getResearchItems()

  return (
    <div className="h-full p-8 overflow-auto scrollbar-blue">
      <h1 className="text-primary text-6xl font-bold mb-8">Research</h1>
      <div className="flex flex-col gap-4">
        {researchItems.map((item: Research) => (
          <>
            <ResearchItem key={item._id} item={item} />
            <hr className="border-t border-primary border-opacity-10" />
          </>
        ))}
      </div>
    </div>
  )
}

function ResearchItem({ item }: { item: Research }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
      {item.content && (
        <div className="flex flex-col">
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