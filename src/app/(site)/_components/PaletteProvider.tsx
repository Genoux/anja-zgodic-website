'use client';

import { useEffect } from 'react';
import { applyRandomPalette } from '@/app/(site)/utils/randomPalette';

export default function PaletteProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyRandomPalette();
  }, []);

  return <>{children}</>;
}
