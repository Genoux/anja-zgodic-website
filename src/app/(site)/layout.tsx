import NavigationBar from '@/app/(site)/_components/NavigationBar';
import QueryProvider from '@/app/(site)/QueryProvider';
import ClientWrapper from '@/app/(site)/ClientWrapper';
import '@/app/globals.css';

const palettes = [
  { primary: '#C6D5E2', background: '#7199AC' },
  { primary: '#9EE9FF', background: '#449BD1' },
  { primary: '#378769', background: '#D1E6CA' },
];

function getRandomPalette() {
  return palettes[Math.floor(Math.random() * palettes.length)];
}

export const metadata = {
  title: 'Anja Zgodic',
  description: 'Anja Zgodic is a software engineer and data scientist based in the United States.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const palette = getRandomPalette();

  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --primary: ${palette.primary};
            --background: ${palette.background};
          }
        `}</style>
      </head>
      <body>
        <QueryProvider>
          <div className="sm:hidden fixed top-0 left-0 right-0 z-50 bg-white">
            <NavigationBar />
          </div>
          <ClientWrapper>
            <main className="flex-1 overflow-auto col-span-3 h-full border-r border-primary border-opacity-10 pt-16 sm:pt-0">
              {children}
            </main>
            <div className="hidden sm:flex flex-col justify-center items-center col-span-2">
              <NavigationBar />
            </div>
          </ClientWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
