'use client';

import { useQuery } from '@tanstack/react-query';
import { groq } from 'next-sanity';
import { Media } from '@/types';
import { useRef } from 'react';
import ScrollTitle from '@/app/(site)/_components/ScrollTitle';
import { client } from '@/sanity/lib/client';
import { Loader } from '@/app/(site)/_components/Loader';
import Image from 'next/image';
import FadeInWrapper from '@/app/(site)/_components/FadeInWrapper';
import { urlFor } from '@/sanity/lib/image';

const mediaQuery = groq`*[_type == "media"] | order(orderRank)`;

async function fetchMedia(): Promise<Media[]> {
  return await client.fetch(mediaQuery) as Media[];
}

export default function MediaPage() {
  const { data: mediaItems, isLoading, error } = useQuery({
    queryKey: ['media'],
    queryFn: fetchMedia
  });

  const containerRef = useRef<HTMLDivElement>(null);

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading media data.</div>;

  return (
    <div ref={containerRef} className="h-full overflow-auto scrollbar-blue">
      <ScrollTitle title="In The Media" containerRef={containerRef} />
      <FadeInWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8">
          {mediaItems?.map((item) => (
            <MediaItem key={item._id} item={item} />
          ))}
      </div>

        </FadeInWrapper>
    </div>
  );
}

function MediaItem({ item }: { item: Media }) {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="relative border border-primary border-opacity-10 rounded-md overflow-hidden transition-shadow duration-300 group-hover:shadow-lg">
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
            <div className="bg-primary bg-opacity-10 h-full w-full flex items-center justify-center">
              <span className="text-primary text-xs text-center px-2">{item.title}</span>
            </div>
          )}
        </div>

        <div className="absolute inset-0 backdrop-blur-sm bg-primary text-white flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <h2 className="text-sm text-center px-4 font-semibold text-background">{item.title}</h2>
        </div>
      </div>
    </a>
  );
}

