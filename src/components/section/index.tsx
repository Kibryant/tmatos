import { forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id }: SectionProps, ref) => {
    return (
      <section
        className="w-full mt-10 flex justify-center items-center"
        id={id || ''}
        ref={ref}
      >
        <div className={cn('w-full max-w-7xl ' + className)}>{children}</div>
      </section>
    )
  },
)

Section.displayName = 'Section'

export { Section }
