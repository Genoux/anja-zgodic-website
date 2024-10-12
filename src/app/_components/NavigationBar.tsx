'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavigationBar = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const navItems = [
    {
      name: 'ABOUT',
      href: '/about'
    },
    {
      name: 'RESEARCH',
      href: '/research'
    },
    {
      name: 'EXPERIENCE',
      href: '/experience'
    },
    {
      name: 'IN THE MEDIA',
      href: '/media'
    },
    {
      name: 'CONTACT',
      href: '/contact'
   }
  ]

  return (
    <nav className="flex flex-col space-y-2 justify-center items-center h-full">
      <div className='flex flex-col items-start justify-center gap-3'>
      {!isHomePage && (
          <h1 className="text-primary text-[24px] font-bold -tracking-tighter leading-[80%] mb-8">
            <Link href="/">
              ANJA<br />ZGODIC
            </Link>
          </h1>
        )}
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="bg-primary text-white text-sm py-2 px-4 w-full md:w-64 text-left"
        >
          {item.name}
        </Link>
      ))}
      <Link
        href="/resume.pdf"
        className="border border-primary text-primary py-2 px-4 text-sm w-full md:w-64 text-center font-bold"
      >
        DOWNLOAD RESUME
      </Link>
      </div>
    </nav>
  )
}

export default NavigationBar