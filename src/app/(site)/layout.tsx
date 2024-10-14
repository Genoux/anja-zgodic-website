import NavigationBar from '@/app/(site)/_components/NavigationBar';
import '@/app/globals.css';

export const metadata = {
  title: 'Anja Zgodic',
  description: 'Anja Zgodic is a software engineer and data scientist based in the United States.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anjazgodic.com',
    title: 'Anja Zgodic',
    description: 'Anja Zgodic is a software engineer and data scientist based in the United States.',
    images: [
      {
        url: 'https://anjazgodic.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anja Zgodic'
      }
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Mobile header */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white">
          <NavigationBar />
        </div>

        <div className="md:grid md:grid-cols-3 justify-between h-screen w-full mx-auto">
          {/* Main content and navigation for larger screens */}
          <main className="flex-1 overflow-auto md:col-span-2 h-full border-r border-primary border-opacity-10 pt-16 md:pt-0">
            {children}
          </main>
          
          {/* Desktop Navigation bar */}
          <div className="hidden md:flex flex-col justify-center items-center">
            <NavigationBar />
          </div>
        </div>
      </body>
    </html>
  );
}
