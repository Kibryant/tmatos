import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="w-full mt-10 flex justify-center items-center">
      <div className={'w-full max-w-7xl'}>{children}</div>
    </section>
  )
}

export { Section }
