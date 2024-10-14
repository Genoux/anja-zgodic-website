'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'
import clsx from 'clsx'

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const navItems = [
    { name: 'ABOUT', href: '/about' },
    { name: 'RESEARCH', href: '/research' },
    { name: 'SOFTWARE', href: '/software' },
    { name: 'EXPERIENCE', href: '/experience' },
    { name: 'IN THE MEDIA', href: '/media' },
    { name: 'CONTACT', href: '/contact' }
  ]

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header className={clsx("z-99 md:hidden flex items-center px-8 py-4 bg-primary text-white fixed top-0 left-0 right-0 z-50", { 'justify-end': isHomePage, 'justify-between': !isHomePage })}>
        {!isHomePage && 
          <h1 className="text-2xl font-bold">Anja Zgodic</h1> 
        }
        <button
          className="relative w-8 h-8 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu
            className={`absolute inset-0 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
            size={28}
          />
          <X
            className={`absolute inset-0 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
            size={28}
          />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-primary flex flex-col justify-center items-center text-secondary">
          <nav className="flex flex-col space-y-4 text-center text-background">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "text-2xl font-bold px-8 transition-all duration-300 ease-in-out w-full",
                  {
                    'opacity-50': pathname === item.href,
                  }
                )}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/resume.pdf"
              className="border border-secondary text-secondary px-4 py-2 font-bold"
              onClick={toggleMenu}
            >
              DOWNLOAD RESUME
            </Link>
          </nav>
        </div>
      )}

      <nav className="hidden md:flex flex-col space-y-2 justify-center items-center w-full md:max-w-[300px] h-full px-8">
        <div className="flex flex-col items-start justify-center gap-3 w-full">
          {!isHomePage && (
            <h1 className="text-primary text-4xl font-bold -tracking-tighter leading-[92%] mb-4">
              <Link href="/">
                ANJA<br />ZGODIC
              </Link>
            </h1>
          )}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "bg-primary text-white px-4 py-3 text-sm text-left transition-all duration-125 ease-in-out hover:bg-[#2742CB]",
                {
                  'opacity-50 px-6 w-[110%] hover:bg-primary': pathname === item.href,
                  'w-full': pathname !== item.href
                }
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            className="border border-primary text-primary w-full px-6 py-4 text-sm text-center font-bold"
          >
            DOWNLOAD RESUME
          </Link>
        </div>
      </nav>
    </>
  )
}

export default NavigationBar
