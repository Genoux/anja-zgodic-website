// app/LayoutWrapper.tsx
'use client'
import { usePathname } from 'next/navigation'
import NavigationBar from '@/app/_components/NavigationBar'
import './globals.css'

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isStudioPage = pathname?.startsWith('/studio')

  if (isStudioPage) {
    return <>{children}</>
  }

  return (
    <div className="grid grid-cols-3 justify-between h-screen w-full max-w-[1440px] mx-auto">
      <main className="flex-1 overflow-auto col-span-2">{children}</main>
      <div className="flex flex-col p-8 justify-center border">
        <NavigationBar />
      </div>
    </div>
  )
}