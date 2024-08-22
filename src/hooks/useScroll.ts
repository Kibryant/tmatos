'use client'

import { useEffect, useState } from 'react'

export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const threshold = 400

  const backgroundColor =
    scrollPosition >= threshold ? 'bg-background' : 'transparent'

  return {
    backgroundColor,
  }
}
