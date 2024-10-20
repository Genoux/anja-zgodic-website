'use client';

import { useQuery } from '@tanstack/react-query';
import { groq } from 'next-sanity';
import { Contact } from '@/types';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInWrapper from '@/app/(site)/_components/FadeInWrapper';
import { client } from '@/sanity/lib/client';
import { Loader } from '@/app/(site)/_components/Loader';

const contactQuery = groq`*[_type == "contact"][0]`;

async function fetchContact(): Promise<Contact> {
  return await client.fetch(contactQuery) as Contact;
}

export default function ContactPage() {
  const { data: contact, isLoading, error } = useQuery({
    queryKey: ['contact'],
    queryFn: fetchContact
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading contact data.</div>;

  return (
    <FadeInWrapper>
      <div className="h-screen flex justify-center">
        <div className="w-full flex flex-col items-center md:p-8 justify-center gap-2 -mt-16 sm:-mt-0">
          <h1 className="text-primary text-5xl font-bold mb-6 text-center sm:text-left">Contact</h1>
          <div className="flex flex-col w-fit items-center sm:items-start justify-center gap-6">
            <div className="prose prose-blue w-fit">
              {contact?.address && <PortableText value={contact.address} />}
            </div>
            <Link href={`mailto:${contact?.email}`} className="text-primary hover:underline">
              {contact?.email}
            </Link>
            <div className="flex space-x-4">
              {contact?.socialLinks?.map((link) => (
                link.url && link.platform && (
                  <Link key={link._key} href={link.url} className="text-primary hover:text-primary-dark transition-colors duration-300">
                    <Image
                      src={`/images/${link.platform.toLowerCase()}.svg`}
                      alt={link.platform}
                      width={24}
                      height={24}
                      className="text-primary"
                    />
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
}
