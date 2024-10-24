'use client';
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { palettes } from './constants';

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
      {children}
    </motion.div>
  );
}