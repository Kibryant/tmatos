import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HeaderTitleProps {
  children: ReactNode
}

export function HeaderTitle({ children }: HeaderTitleProps) {
  return (
    <motion.h1
      className="text-5xl font-bold text-center mt-4 lg:text-left"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {children}
    </motion.h1>
  )
}
