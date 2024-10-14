'use client'

import { useEffect, useState, useRef } from 'react'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { Experience } from '@/types'
import ScrollTitle from '@/app/(site)/_components/ScrollTitle'

const experienceQuery = groq`*[_type == "experience"] | order(startYear desc) {
  _id,
  title,
  company,
  startYear,
  endYear,
  description,
  url,
  responsibilities
}`

async function getExperienceItems(): Promise<Experience[]> {
  return await client.fetch(experienceQuery)
}

export default function ExperiencePage() {
  const [experienceItems, setExperienceItems] = useState<Experience[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchExperienceItems = async () => {
      const data = await getExperienceItems()
      setExperienceItems(data)
    }
    fetchExperienceItems()
  }, [])

  return (
    <div ref={containerRef} className="h-full overflow-auto scrollbar-blue">
      {/* Use ScrollTitle with the scrollable container */}
      <ScrollTitle title="Experience" containerRef={containerRef} />
      <div className="px-8">
        {experienceItems.map((item: Experience) => (
          <div key={item._id}>
            <ExperienceItem key={item._id} item={item} />
        </div>
        ))}
      </div>
    </div>
  )
}

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="flex flex-col gap-4 py-8 border-b border-primary border-opacity-10">
      <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
      <p className="text-lg mb-1">{item.company}</p>
      <p className="text-sm mb-2">
        {item.startYear} - {item.endYear}
      </p>
      <p className="mb-2">{item.description}</p>
      {item.url && (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary underline mb-2 block">
          Company Website
        </a>
      )}
      {item.responsibilities && item.responsibilities.length > 0 && (
        <div className="mt-2">
          <h3 className="text-lg font-semibold mb-1">Accomplishments & Responsibilities:</h3>
          <ul className="list-disc list-inside">
            {item.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
