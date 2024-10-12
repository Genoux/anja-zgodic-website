// app/layout.tsx
import NavigationBar from '@/app/(site)/_components/NavigationBar';
import '@/app/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-3 justify-between h-screen w-full max-w-[1440px] mx-auto">
          <main className="flex-1 overflow-auto col-span-2">{children}</main>
          <div className="flex flex-col p-8 justify-center border">
            <NavigationBar />
          </div>
        </div>
      </body>
    </html>
  )
}