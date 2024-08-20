import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Providers } from '@/components/providers'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'T|MATOS',
  description:
    'T|Matos é uma empresa de marketing digital especializada em design, tráfego pago e orgânico, criação de sites e softwares, e automação de processos. Oferecemos soluções inovadoras para alavancar a presença online e impulsionar o crescimento de negócios.s',
}

interface RootLayoutProps {
  readonly children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
