'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import clsx from 'clsx';
import { useQuery } from '@tanstack/react-query';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { motion } from 'framer-motion';

const resumeQuery = groq`*[_type == "resume"][0]{
 "url": file.asset->url,
 updatedAt
}`;

async function fetchResume() {
  return await client.fetch(resumeQuery);
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.65, 0, 0.35, 1]
    }
  }
};

const nameVariants = {
  hidden: { height: 0, opacity: 0, marginBottom: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    marginBottom: "1rem",
    transition: {
      height: { duration: 0.3, ease: [0.65, 0, 0.35, 1] },
      opacity: { duration: 0.3, ease: [0.65, 0, 0.35, 1] }
    }
  }
};

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const { data: resume } = useQuery({
    queryKey: ['resume'],
    queryFn: fetchResume,
  });

  const navItems = [
    { name: 'ABOUT', href: '/about' },
    { name: 'RESEARCH', href: '/research' },
    { name: 'SOFTWARE', href: '/software' },
    { name: 'EXPERIENCE', href: '/experience' },
    { name: 'IN THE MEDIA', href: '/media' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Mobile Header */}
      <header className="justify-between sm:hidden flex items-center px-8 py-4 bg-primary text-white fixed top-0 left-0 right-0 z-50">
        <Link href={'/'}>
          <h1 className="text-2xl font-bold text-background">AZ</h1>
        </Link>
        <button
          className="relative w-8 h-8 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu
            className={clsx(
              'absolute inset-0 transition-opacity duration-300 text-background',
              { 'opacity-0': menuOpen, 'opacity-100': !menuOpen }
            )}
            size={28}
          />
          <X
            className={clsx(
              'absolute inset-0 transition-opacity duration-300 text-background',
              { 'opacity-100': menuOpen, 'opacity-0': !menuOpen }
            )}
            size={28}
          />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-primary min-h-screen flex flex-col justify-center items-center text-secondary">
          <nav className="flex flex-col text-center text-background">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'text-lg font-bold p-2 w-full hover:opacity-75 transition-all duration-200 ease-in-out',
                  { 'opacity-50': pathname === item.href }
                )}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={resume?.url || ''}
              className="mt-4 border border-secondary text-secondary px-4 py-2 font-bold hover:bg-background hover:text-primary transition-all duration-200 ease-in-out border-background"
              target="_blank"
            >
              Download CV
            </Link>
          </nav>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex justify-center px-8 flex-col space-y-2 items-center w-full sm:max-w-[300px] h-full">
        <motion.div
          className="flex flex-col items-start gap-3 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={nameVariants}
            initial="hidden"
            animate={!isHomePage ? "visible" : "hidden"}
            className="w-full overflow-hidden"
          >
            <Link href="/">
              <h1 className="text-primary text-4xl font-bold leading-[92%]">
                ANJA
                <br />
                ZGODIC
              </h1>
            </Link>
          </motion.div>

          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants} className="w-full">
              <Link
                href={item.href}
                className={clsx(
                  'bg-primary w-full text-background px-4 py-3 text-sm text-left transition-all duration-125 ease-in-out border border-primary hover:bg-background hover:text-primary hover:w-[105%] block',
                  {
                    'bg-transparent text-primary px-6 w-[110%] cursor-auto pointer-events-none':
                      pathname === item.href,
                    'w-full': pathname !== item.href,
                  }
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div variants={itemVariants} className="w-full">
            <Link
              target="_blank"
              href={resume?.url || ''}
              className="border uppercase border-primary text-primary w-full px-6 py-4 text-sm text-center font-bold hover:bg-primary hover:text-background transition-all duration-125 ease-in-out block"
            >
              Download CV
            </Link>
          </motion.div>
        </motion.div>
      </nav>
    </>
  );
};

export default NavigationBar;