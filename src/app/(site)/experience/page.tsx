// app/experience/page.tsx
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { Experience } from '@/types'

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

export default async function ExperiencePage() {
  const experienceItems = await getExperienceItems()

  return (
    <div className="h-full p-8 overflow-auto scrollbar-blue">
      <h1 className="text-primary text-6xl font-bold mb-8">Experience</h1>
      <div className="space-y-8">
        {experienceItems.map((item: Experience) => (
          <ExperienceItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  )
}

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="border-b border-primary border-opacity-10 pb-4">
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