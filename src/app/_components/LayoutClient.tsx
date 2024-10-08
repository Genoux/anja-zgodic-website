'use client'

import { usePathname } from 'next/navigation';
import NavigationBar from './NavigationBar';

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="flex px-24 justify-between items-center h-screen w-full max-w-[1440px] mx-auto">
      <main className="flex-1">{children}</main>
      <div className="flex flex-col">
        {!isHomePage && (
          <h1 className="text-primary text-[24px] font-bold -tracking-tighter leading-[80%] mb-8">
            ANJA<br />ZGODIC
          </h1>
        )}
        <NavigationBar />
      </div>
    </div>
  );
}