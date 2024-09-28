'use client'
import { cn } from '@/lib/utils'
import {
  motion,
  type SpringOptions,
  useSpring,
  useTransform,
} from 'framer-motion'
import { type ReactNode, useEffect } from 'react'

type AnimatedNumber = {
  value: number
  className?: string
  springOptions?: SpringOptions
  children?: ReactNode
}

export function AnimatedNumber({
  value,
  className,
  springOptions,
  children,
}: AnimatedNumber) {
  const spring = useSpring(value, springOptions)
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  )

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  return (
    <>
      <motion.span className={cn('tabular-nums', className)}>
        {display}
      </motion.span>
      {children}
    </>
  )
}
