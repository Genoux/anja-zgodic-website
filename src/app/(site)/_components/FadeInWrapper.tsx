'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInWrapperProps {
  children: ReactNode;
}

const FadeInWrapper = ({ children }: FadeInWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.24 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeInWrapper;
