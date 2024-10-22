import NavigationBar from '@/app/(site)/_components/NavigationBar';
import QueryProvider from '@/app/(site)/QueryProvider';
import PaletteProvider from '@/app/(site)/_components/PaletteProvider';
import '@/app/globals.css';

export const metadata = {
  title: 'Anja Zgodic',
  description: 'Anja Zgodic is a software engineer and data scientist based in the United States.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <PaletteProvider> {/* Ensure the random theme is applied */}
            {/* Mobile header */}
            <div className="sm:hidden fixed top-0 left-0 right-0 z-50 bg-white">
              <NavigationBar />
            </div>

            <div className="sm:grid grid-cols-5 justify-between h-screen w-full mx-auto">
              <main className="flex-1 overflow-auto col-span-3 h-full border-r border-primary border-opacity-10 pt-16 sm:pt-0">
                {children}
              </main>
              {/* Desktop Navigation */}
              <div className="hidden sm:flex flex-col justify-center items-center col-span-2">
                <NavigationBar />
              </div>
            </div>
          </PaletteProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
