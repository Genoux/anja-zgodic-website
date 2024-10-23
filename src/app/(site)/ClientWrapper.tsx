'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
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
