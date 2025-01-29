'use client';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { Contact } from '@/types';
import { motion } from 'framer-motion';
import { UrlObject } from 'url';
import LinkedInIcon from '@/app/(site)/_components/icons/Linkedin';
import XIcon from '@/app/(site)/_components/icons/XIcon';
import GitHubIcon from '@/app/(site)/_components/icons/GitHub';
import { useQuery } from '@tanstack/react-query';

const settingsQuery = groq`*[_type == "contact"][0]{
  email,
  address,
  socialLinks[]{
    platform,
    url,
    icon
  }
}`;

const getSocialIcon = (platform: string | undefined) => {
  switch (platform?.toLowerCase()) {
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export default function Home() {
  const { data: contact } = useQuery<Contact>({
    queryKey: ['contact'],
    queryFn: () => client.fetch(settingsQuery),
  });

  if (!contact) return null;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center sm:items-start gap-12 h-screen justify-center py-0 sm:py-8">
        <div className="flex flex-col items-center gap-8">
          <div className="text-primary text-center sm:text-left font-bold leading-[80%] -tracking-tighter text-7xl sm:text-[15vw]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.2,
              }}
            >
              ANJA
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.4,
              }}
            >
              ZGODIC
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: [0.65, 0, 0.35, 1],
              delay: 0.5,
            }}
            className="sm:hidden hover:px-6 flex text-md items-center md:items-start gap-4"
          >
            <Link
              className="hover:opacity-70 bg-primary py-2 px-4 text-background transition-all duration-150 ease-in-out"
              href={'/about'}
            >
              About me
            </Link>
            <Link
              className="border border-primary py-2 px-4 text-primary hover:bg-primary hover:text-background transition-all duration-150 ease-in-out"
              href={'/contact'}
            >
              Contact
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex space-x-4"
        >
          {contact.socialLinks?.map(
            (link: {
              url?: string | UrlObject;
              platform?: string;
              _key: string;
            }) => (
              <motion.div key={link._key} variants={itemVariants}>
                <Link
                  href={link.url || '#'}
                  className="text-primary hover:text-primary-dark transition-colors duration-300"
                  aria-label={link.platform}
                >
                  {getSocialIcon(link.platform)}
                </Link>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
