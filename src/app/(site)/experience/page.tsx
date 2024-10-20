'use client';

import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { groq } from 'next-sanity';
import { Experience } from '@/types';
import ScrollTitle from '@/app/(site)/_components/ScrollTitle';
import FadeInWrapper from '@/app/(site)/_components/FadeInWrapper';
import { client } from '@/sanity/lib/client';
import { Loader } from '@/app/(site)/_components/Loader';
import Link from 'next/link';

const experienceQuery = groq`*[_type == "experience"] | order(orderRank)`;

async function fetchExperience(): Promise<Experience[]> {
  return await client.fetch(experienceQuery) as Experience[];
}

export default function ExperiencePage() {
  const { data: experienceItems, isLoading, error } = useQuery({
    queryKey: ['experience'],
    queryFn: fetchExperience
  });

  const containerRef = useRef<HTMLDivElement>(null);

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading experience data.</div>;

  return (
    <div ref={containerRef} className="h-full overflow-auto scrollbar-blue">
      <ScrollTitle title="Experience" containerRef={containerRef} />
      <div className="px-8">
        <FadeInWrapper>
          {experienceItems?.map((item) => (
            <div key={item._id}>
              <ExperienceItem item={item} />
            </div>
          ))}
        </FadeInWrapper>
      </div>
    </div>
  );
}

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="flex flex-col gap-4 py-8 border-b border-primary border-opacity-20">
      <div className='flex flex-col gap-2'>
      <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
      <p className="text-base">{item.startYear} - {item.endYear || 'Present'}</p>
      <p>{item.description}</p>
      <Link href={item.url || '#'} target="_blank" rel="noopener noreferrer" className="text-primary underline mb-2 block">
        <p className="text-lg">{item.company}</p>
      </Link>
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-lg font-semibold '>Accomplishments & Responsibilities:</h3>
      {item.responsibilities && item.responsibilities.length > 0 && (
        <ul className="list-disc ml-5 space-y-1">
          {item.responsibilities.map((responsibility, index) => (
            <li key={index} className="text-base">{responsibility}</li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
}
