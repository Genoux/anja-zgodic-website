'use client';
import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { groq } from 'next-sanity';
import ScrollTitle from '@/app/(site)/_components/ScrollTitle';
import FadeInWrapper from '@/app/(site)/_components/FadeInWrapper';
import { client } from '@/sanity/lib/client';
import { Loader } from '@/app/(site)/_components/Loader';
import Link from 'next/link';
import { Experience } from '@/types';

const experienceQuery = groq`*[_type == "experience"] | order(orderRank)`;

async function fetchExperience(): Promise<Experience[]> {
  return (await client.fetch(experienceQuery)) as Experience[];
}

export default function ExperiencePage() {
  const {
    data: experienceItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['experience'],
    queryFn: fetchExperience,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading experience data.</div>;

  return (
    <div
      ref={containerRef}
      className="h-full overflow-auto scrollbar-blue relative"
    >
      <ScrollTitle title="Experience" containerRef={containerRef} />
      <div className="px-8">
        <FadeInWrapper>
          {experienceItems?.map((item, index) => (
            <div key={item._id}>
              <ExperienceItem
                item={item}
                isLast={index === experienceItems.length - 1}
              />
            </div>
          ))}
        </FadeInWrapper>
      </div>
    </div>
  );
}

function ExperienceItem({
  item,
  isLast,
}: {
  item: Experience;
  isLast: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-4 py-8 ${
        !isLast ? 'border-b border-primary border-opacity-20' : ''
      }`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
        <p className="text-base">
          {item.startYear} - {item.endYear || 'Present'}
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            {item.department && (
              item.department.url ? (
                <Link
                  href={item.department.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  <p className="text-lg">{item.department.name}</p>
                </Link>
              ) : (
                <p className="text-lg">{item.department.name}</p>
              )
            )}
            {item.company && (
              item.company.url ? (
                <Link
                  href={item.company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  <p className="text-md text-primary mt-2">{item.company.name}</p>
                </Link>
              ) : (
                <p className="text-md text-primary mt-2">{item.company.name}</p>
              )
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">
          Accomplishments & Responsibilities:
        </h3>
        {item.responsibilities && item.responsibilities.length > 0 && (
          <ul className="list-disc ml-5 space-y-1">
            {item.responsibilities.map((responsibility: string, index: number) => (
              <li key={index} className="text-base">
                {responsibility}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
