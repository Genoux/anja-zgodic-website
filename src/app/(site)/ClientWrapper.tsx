'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';

interface ClientWrapperProps {
  children: ReactNode;
  paletteIndex: number;
}

function updateFavicon(paletteIndex: number) {
  const faviconElement = document.querySelector("link[rel='icon']");
  if (faviconElement) {
    faviconElement.setAttribute('href', `/favicon-primary${paletteIndex + 1}.ico`);
  }
}

export default function ClientWrapper({ children, paletteIndex }: ClientWrapperProps) {
  useEffect(() => {
    updateFavicon(paletteIndex);
  }, [paletteIndex]);

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
