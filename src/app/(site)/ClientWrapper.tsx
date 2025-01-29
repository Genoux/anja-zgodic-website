'use client';
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { palettes } from './constants';

export function DevPaletteSelector() {
  const [currentPalette, setCurrentPalette] = useState<string | null>(null);

  useEffect(() => {
    setCurrentPalette(sessionStorage.getItem('paletteIndex'));
  }, []);

  const setPalette = (index: number) => {
    sessionStorage.setItem('paletteIndex', index.toString());
    window.location.reload();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white p-2 rounded shadow">
      <div>Current: {currentPalette}</div>
      <div className="grid gap-2 mt-2">
        {palettes.map((_, index) => (
          <button
            key={index}
            onClick={() => setPalette(index)}
            className={`px-3 py-1 rounded ${
              currentPalette === index.toString()
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200'
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
}

function getRandomPalette() {
  return Math.floor(Math.random() * palettes.length);
}

function updateFavicon(paletteIndex: number) {
  const faviconElement = document.querySelector("link[rel='icon']");
  if (faviconElement) {
    faviconElement.setAttribute(
      'href',
      `/favicon-primary${paletteIndex + 1}.ico`
    );
  }
}

function updatePaletteStyles(index: number) {
  const palette = palettes[index];
  document.documentElement.style.setProperty('--primary', palette.primary);
  document.documentElement.style.setProperty(
    '--background',
    palette.background
  );
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [paletteIndex, setPaletteIndex] = useState<number | null>(null);

  useEffect(() => {
    let finalIndex: number;

    try {
      const stored = sessionStorage.getItem('paletteIndex');
      if (stored !== null) {
        finalIndex = parseInt(stored);
      } else {
        finalIndex = getRandomPalette();
        sessionStorage.setItem('paletteIndex', finalIndex.toString());
      }
    } catch (e) {
      finalIndex = getRandomPalette();
      console.error('Session storage error:', e);
    }

    setPaletteIndex(finalIndex);
    updatePaletteStyles(finalIndex);
    updateFavicon(finalIndex);
  }, []);

  if (paletteIndex === null) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: [0.65, 0, 0.35, 1] }}
      className="sm:grid grid-cols-6 justify-between h-screen w-full mx-auto"
    >
      {children}
      {process.env.NODE_ENV === 'development' && <DevPaletteSelector />}
    </motion.div>
  );
}
