'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ScrollTitleProps {
  title: string
  containerRef: React.RefObject<HTMLDivElement>
  minFontSize?: number
  maxFontSize?: number
  scrollMultiplier?: number
}

export default function ScrollTitle({
  title,
  containerRef,
  minFontSize = 1.3,
  maxFontSize = 2.3,
  scrollMultiplier = 0.01,
}: ScrollTitleProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [containerRef])

  const fontSizeValue = Math.max(maxFontSize - scrollY * scrollMultiplier, minFontSize)

  return (
    <motion.h1
      className="backdrop-blur-md bg-opacity-80 text-primary border-b border-primary border-opacity-10 font-bold sticky top-0 z-10 bg-secondary px-8 py-2"
      style={{ fontSize: `${fontSizeValue}rem` }}
      animate={{
        fontSize: `${fontSizeValue}rem`,
      }}
      transition={{
        ease: 'linear',
        duration: 0.01,
      }}
    >
      {title}
    </motion.h1>
  )
}
