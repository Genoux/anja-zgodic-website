import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { Contact } from '@/types';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { UrlObject } from 'url';

const settingsQuery = groq`*[_type == "contact"][0]{
  email,
  address,
  socialLinks[]{
    platform,
    url,
    icon
  }
}`;

async function getSiteSettings(): Promise<Contact> {
  return await client.fetch(settingsQuery);
}

export default async function Home() {
  const contact = await getSiteSettings();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center sm:items-start gap-12 h-screen justify-center py-0 sm:py-8">
        <div className='flex flex-col items-center gap-8'>
        <h1 className="text-primary text-center sm:text-left font-bold leading-[80%] -tracking-tighter responsive-heading">
            ANJA<br />ZGODIC
          </h1>
        <div className='sm:hidden hover:px-6 transition-all duration-150 ease-in-out flex flex-col text-md items-center md:items-start gap-4 bg-primary py-2 px-4 text-background'>
          <Link href={'/about'}>About me</Link>
        </div>
        </div>
        <div className="flex space-x-4">
          {contact.socialLinks?.map((link: { url?: string | UrlObject; icon?: SanityImageSource; platform?: string; _key: string }) => (
            <Link key={link._key} href={link.url || '#'} className="text-primary hover:text-primary-dark transition-colors duration-300">
              {link.icon && (
                <Image
                  src={urlFor(link.icon).url()}
                  alt={link.platform || "Icon"}
                  width={24}
                  height={24}
                  className="text-primary"
                />
              )}
            </Link>
          ))}
        </div>
       
      </div>
    </div>
  );
}
