'use client';

import { useQuery } from '@tanstack/react-query';
import { groq } from 'next-sanity';
import { Software } from '@/types';
import { useRef } from 'react';
import ScrollTitle from '@/app/(site)/_components/ScrollTitle';
import FadeInWrapper from '@/app/(site)/_components/FadeInWrapper';
import { client } from '@/sanity/lib/client';
import { Loader } from '@/app/(site)/_components/Loader';
import { PortableText } from '@portabletext/react';
import { TypedObject } from '@portabletext/types';
import Link from 'next/link';

const softwareQuery = groq`*[_type == "software"] | order(orderRank)`;

async function fetchSoftware(): Promise<Software[]> {
  return await client.fetch(softwareQuery) as Software[];
}

export default function SoftwarePage() {
  const { data: softwareItems, isLoading, error } = useQuery({
    queryKey: ['software'],
    queryFn: fetchSoftware
  });

  const containerRef = useRef<HTMLDivElement>(null);

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading software data.</div>;

  return (
    <div ref={containerRef} className="h-full overflow-auto scrollbar-blue">
      <ScrollTitle title="Software" containerRef={containerRef} />
      <div className="px-8">
        <FadeInWrapper>
          {softwareItems?.map((item) => (
            <SoftwareItem key={item._id} item={item} />
          ))}
        </FadeInWrapper>
      </div>
    </div>
  );
}

function SoftwareItem({ item }: { item: Software }) {
  return (
    <div className="flex flex-col gap-4 py-8 border-b border-primary border-opacity-20">
      <div className='flex flex-col gap-2'>
      <h1 className="text-2xl font-semibold">{item.title}</h1>
      {item.shortDescription && (
        <p className="text-sm">{item.shortDescription}</p>
      )}
     </div>
      {item.content && (
        <PortableText
          value={item.content as TypedObject[]}
          components={{
            types: {},
            marks: {
              link: ({ value, children }) => (
                <Link href={value.href} className='text-primary underline' target="_blank" rel="noopener noreferrer">
                  {children}
                </Link>
              ),
            },
            block: {
              normal: ({ children }) => <p className='text-base opacity-90 tracking-wide leading-6'>{children}</p>,
            },
          }}
        />
      )}
      {item.url && (
        <Link
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-sm text-primary border py-1.5 px-2 border-primary hover:bg-primary hover:text-background block hover:px-3 transition-all duration-125 ease-in-out"
        >
          View Project
        </Link>
      )}
    </div>
  );
}
