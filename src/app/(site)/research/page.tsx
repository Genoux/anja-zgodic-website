'use client';

import { useQuery } from '@tanstack/react-query';
import { groq } from 'next-sanity';
import { Research } from '@/types';
import { useRef } from 'react';
import ScrollTitle from '@/app/(site)/_components/ScrollTitle';
import FadeInWrapper from '@/app/(site)/_components/FadeInWrapper';
import { client } from '@/sanity/lib/client';
import { Loader } from '@/app/(site)/_components/Loader';
import { PortableText } from '@portabletext/react';
import { TypedObject } from '@portabletext/types';
import { PortableTextMarkComponentProps } from '@portabletext/react';
import Link from 'next/link';

const researchQuery = groq`*[_type == "research"] | order(orderRank)`;

const resumeQuery = groq`*[_type == "resume"][0]{
  "url": file.asset->url,
  updatedAt
}`;

async function fetchResearch(): Promise<Research[]> {
  return await client.fetch(researchQuery) as Research[];
}

async function fetchResume() {
  return await client.fetch(resumeQuery);
}

export default function ResearchPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: researchItems, isLoading, error } = useQuery({
    queryKey: ['research'],
    queryFn: fetchResearch,
  });

  const { data: resume, isLoading: isLoadingResume } = useQuery({
    queryKey: ['resume'],
    queryFn: fetchResume,
  });

  if (isLoading || isLoadingResume) return <Loader />;
  if (error) return <div>Error loading research data.</div>;

  return (
    <div ref={containerRef as React.RefObject<HTMLDivElement>} className="h-full overflow-auto scrollbar-blue flex flex-col">
      <ScrollTitle title="Research" containerRef={containerRef as React.RefObject<HTMLDivElement>} />
      <FadeInWrapper>
        <div className='px-8 py-4 font-semibold text-sm bg-primary bg-opacity-10'>
          <p className='text-background '>
            A complete list of published work can be seen in my{' '}
            {resume?.url ? (
              <Link
                href={resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background underline"
              >
                CV
              </Link>
            ) : (
              'CV'
            )}
          </p>
        </div>
        {researchItems?.map((item: Research, index) => (
          <div key={item._id} className="px-8">
            <ResearchItem 
              item={item} 
              isLast={index === researchItems.length - 1}
            />
          </div>
        ))}
      </FadeInWrapper>
    </div>
  );
}

const URL = {
  types: {},
  marks: {
    link: ({ value, children }: PortableTextMarkComponentProps<{ href: string; _type: string }>) => {
      const target = value?.href.startsWith('http') ? '_blank' : undefined;
      const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
      return (
        <a href={value?.href} target={target} rel={rel} className="text-primary underline">
          {children}
        </a>
      );
    },
  },
};

function ResearchItem({ item, isLast }: { item: Research, isLast: boolean }) {
  return (
    <div className={`flex flex-col py-8 ${!isLast ? 'border-b border-primary border-opacity-20' : ''}`}>
      <h2 className="text-2xl font-semibold mb-6">{item.title}</h2>
      {item.content && (
        <PortableText value={item.content as TypedObject[]} components={URL} />
      )}
    </div>
  );
}
