import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section
      className="w-full mt-10 flex justify-center items-center"
      id={id || ''}
    >
      <div className={cn('w-full max-w-7xl ' + className)}>{children}</div>
    </section>
  )
}

export { Section }
