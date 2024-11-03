'use client';

import { useQuery } from '@tanstack/react-query';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { About as AboutType } from '@/types';
import FadeInWrapper from '@/app/(site)/_components/FadeInWrapper';
import { client } from '@/sanity/lib/client';
import { Loader } from '@/app/(site)/_components/Loader';
import { TypedObject } from '@portabletext/types';
import Link from 'next/link';

const aboutQuery = groq`*[_type == "about"][0]`;

async function fetchAbout(): Promise<AboutType> {
  return (await client.fetch(aboutQuery)) as AboutType;
}

export default function AboutPage() {
  const {
    data: about,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['about'],
    queryFn: fetchAbout,
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading about data.</div>;

  return (
    <div className="h-full p-6 md:p-12 overflow-auto scrollbar-blue flex flex-col justify-start sm:justify-center">
      <FadeInWrapper>
        <h1 className="text-primary text-4xl md:text-6xl font-bold mb-6">
          About Me
        </h1>
        <div className="flex flex-col gap-3">
          <PortableText
            value={about?.description as TypedObject[]}
            components={{
              types: {},
              marks: {
                link: ({ value, children }) => (
                  <Link
                    href={value.href}
                    className="text-primary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </Link>
                ),
              },
              block: {
                normal: ({ children }) => (
                  <p className="text-base opacity-90 tracking-wide leading-6">
                    {children}
                  </p>
                ),
              },
            }}
          />
        </div>
      </FadeInWrapper>
    </div>
  );
}
