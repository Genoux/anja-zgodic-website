'use client';
import { useQuery } from '@tanstack/react-query';
import { groq } from 'next-sanity';
import { useRef } from 'react';
import { Media } from '@/types';
import ScrollTitle from '@/app/(site)/_components/ScrollTitle';
import { client } from '@/sanity/lib/client';
import { Loader } from '@/app/(site)/_components/Loader';
import Image from 'next/image';
import Link from 'next/link';
import FadeInWrapper from '@/app/(site)/_components/FadeInWrapper';
import { urlFor } from '@/sanity/lib/image';

const mediaQuery = groq`*[_type == "media"] | order(orderRank)`;

async function fetchMedia() {
  return await client.fetch(mediaQuery);
}

export default function MediaPage() {
  const {
    data: mediaItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['media'],
    queryFn: fetchMedia,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading media data.</div>;

  return (
    <div ref={containerRef} className="h-full overflow-auto scrollbar-blue">
      <ScrollTitle title="In The Media" containerRef={containerRef} />
      <FadeInWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8">
          {mediaItems?.map((item: Media) => (
            <MediaItem key={item._id} item={item} />
          ))}
        </div>
      </FadeInWrapper>
    </div>
  );
}

function MediaItem({ item }: { item: Media }) {
  return (
    <Link
      href={item.link || ''}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative bg-white border border-primary border-opacity-10 rounded-md overflow-hidden transition-shadow duration-300 group-hover:shadow-lg">
        <div className="relative h-48 w-full">
          {item.image ? (
            <Image
              src={urlFor(item.image).url()}
              alt={item.title || 'Media Item'}
              className={`w-full h-full ${
                item.imageDisplay === 'contain' ? 'object-contain' : 'object-cover'
              }`}
              fill
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-primary bg-opacity-10">
              <span className="text-primary text-xs text-center px-2">
                {item.title}
              </span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 backdrop-blur-sm bg-primary text-white flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <h2 className="text-sm text-center px-4 font-semibold text-background">
            {item.title}
          </h2>
        </div>
      </div>
    </Link>
  );
}
