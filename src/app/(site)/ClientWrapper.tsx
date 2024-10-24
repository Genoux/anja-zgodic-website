'use client';
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { palettes } from './constants';

export function DevPaletteSelector() {
  const [currentPalette, setCurrentPalette] = useState<string | null>(null);

  useEffect(() => {
    setCurrentPalette(sessionStorage.getItem('paletteIndex'));
  }, []);

  if (process.env.NODE_ENV !== 'development') return null;

  const setPalette = (index: number) => {
    sessionStorage.setItem('paletteIndex', index.toString());
    window.location.reload();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white p-2 rounded shadow">
      <div>Current: {currentPalette ?? 'Random'}</div>
      <div className="grid gap-2 mt-2">
        {palettes.map((_, index) => (
          <button
            key={index}
            onClick={() => setPalette(index)}
            className={`px-3 py-1 rounded ${
              currentPalette === index.toString() ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Palette {index}
          </button>
        ))}
        <button
          onClick={() => {
            sessionStorage.removeItem('paletteIndex');
            window.location.reload();
          }}
          className="px-3 py-1 bg-red-200 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

interface ClientWrapperProps {
  children: ReactNode;
  initialPaletteIndex: number;
}

function updateFavicon(paletteIndex: number) {
  const faviconElement = document.querySelector("link[rel='icon']");
  if (faviconElement) {
    faviconElement.setAttribute('href', `/favicon-primary${paletteIndex + 1}.ico`);
  }
}

export default function ClientWrapper({ 
  children, 
  initialPaletteIndex 
}: ClientWrapperProps) {
  const [paletteIndex, setPaletteIndex] = useState(initialPaletteIndex);
  console.log('Palette Index', paletteIndex);

  useEffect(() => {
    // Check session storage on mount
    const sessionPalette = sessionStorage.getItem('paletteIndex');
    if (sessionPalette !== null) {
      const storedIndex = parseInt(sessionPalette);
      setPaletteIndex(storedIndex);
      
      // Update CSS variables
      document.documentElement.style.setProperty('--primary', palettes[storedIndex].primary);
      document.documentElement.style.setProperty('--background', palettes[storedIndex].background);
    } else {
      // Store the initial palette index
      sessionStorage.setItem('paletteIndex', initialPaletteIndex.toString());
    }
    
    updateFavicon(sessionPalette ? parseInt(sessionPalette) : initialPaletteIndex);
  }, [initialPaletteIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.1 }}
      className="sm:grid grid-cols-5 justify-between h-screen w-full mx-auto"
    >
        {process.env.NODE_ENV === 'development' && <DevPaletteSelector />}
      {children}
    </motion.div>
  );
}