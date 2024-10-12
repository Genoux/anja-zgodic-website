import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import Image from 'next/image'
import { Media } from '@/types'
import { urlFor } from '@/sanity/lib/image'

const mediaQuery = groq`*[_type == "media"] | order(publishedAt desc) {
  _id,
  title,
  image,
  link,
}`

async function getMediaItems(): Promise<Media[]> {
  return await client.fetch(mediaQuery)
}

export default async function MediaPage() {
  const mediaItems = await getMediaItems()

  return (
    <div className="h-full p-8 overflow-auto scrollbar-blue">
      <h1 className="text-primary text-6xl font-bold mb-8">In The Media</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaItems.map((item) => (
          <MediaItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  )
}

function MediaItem({ item }: { item: Media }) {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="border border-primary border-opacity-10 rounded-lg overflow-hidden transition-shadow duration-300 group-hover:shadow-lg">
        <div className="relative h-48">
          {item.image ? (
            <Image
              src={urlFor(item.image).url()}
              alt={item.title || 'Media Item'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="bg-gray-300 h-full w-full flex items-center justify-center">
              <span className="text-gray-700">No Image Available</span>
            </div>
          )}
        </div>
      </div>
    </a>
  )
}