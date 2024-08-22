'use client'

import { ReactNode, useEffect, useState } from 'react'

interface NavbarLinkProps {
  href: string
  children: ReactNode
}

export function NavbarLink({ href, children }: NavbarLinkProps) {
  const [currentHash, setCurrentHash] = useState('#inicio')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentHash(window.location.hash)
    }
  }, [currentHash])

  const isCurrentHash = currentHash === href

  return (
    <a
      href={href}
      className={`${
        isCurrentHash ? 'text-primary' : 'text-secondary-foreground'
      } trasition font-medium hover:text-primary flex gap-2 items-center`}
    >
      {children}
    </a>
  )
}
