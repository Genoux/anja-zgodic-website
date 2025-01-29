'use client';
import { useQuery } from '@tanstack/react-query';
import { groq } from 'next-sanity';
import Link from 'next/link';
import FadeInWrapper from '@/app/(site)/_components/FadeInWrapper';
import { client } from '@/sanity/lib/client';
import { Loader } from '@/app/(site)/_components/Loader';
import LinkedInIcon from '@/app/(site)/_components/icons/Linkedin';
import XIcon from '@/app/(site)/_components/icons/XIcon';
import GitHubIcon from '@/app/(site)/_components/icons/GitHub';

const contactQuery = groq`*[_type == "contact"][0]{
  email,
  socialLinks[]{
    platform,
    url,
    _key
  }
}`;

async function fetchContact() {
  return await client.fetch(contactQuery);
}

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'github':
      return <GitHubIcon className="w-6 h-6" />;
    case 'linkedin':
      return <LinkedInIcon className="w-6 h-6" />;
    case 'x':
      return <XIcon className="w-6 h-6" />;
    default:
      return null;
  }
};

export default function ContactPage() {
  const {
    data: contact,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['contact'],
    queryFn: fetchContact,
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading contact data.</div>;

  return (
    <FadeInWrapper>
      <div className="h-screen flex justify-center">
        <div className="w-full flex flex-col items-center md:p-8 justify-center gap-2 -mt-16 sm:-mt-0">
          <h1 className="text-primary text-5xl font-bold mb-6 text-center sm:text-left">
            Contact
          </h1>
          <div className="flex flex-col w-fit items-center sm:items-start justify-center gap-6">
            <Link
              href={`mailto:${contact?.email}`}
              className="text-primary hover:underline"
            >
              {contact?.email}
            </Link>
            <div className="flex space-x-4 w-full justify-center">
              {contact?.socialLinks?.map(
                (link: { platform: string; url: string; _key: string }) => (
                  <Link
                    key={link._key}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors duration-300"
                    aria-label={link.platform}
                  >
                    {getSocialIcon(link.platform)}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
}
