'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeTheme } from '../mode-theme'
import { TextEffect } from '../text-effect'

const phrases = [
  'Soluções Digitais Criativas',
  'Sites Personalizados',
  'Tráfego Pago de Alta Performance',
]

export function Header() {
  const [index, setIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="relative min-h-screen">
      <div
        className={`${
          isScrolled
            ? 'bg-background/70 backdrop-blur-md shadow-lg border-b border-primary'
            : 'bg-transparent'
        } fixed top-0 left-0 w-full z-20 transition-all duration-300 ease-in-out`}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between py-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo-blue.png"
                  alt="T Matos Logo"
                  width={80}
                  height={80}
                />
              </Link>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {['Serviços', 'Portfólio', 'Sobre Nós', 'Blog', 'Contato'].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ),
              )}
              <ModeTheme />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <Button>Solicite um Orçamento</Button>
            </motion.div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </nav>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background border border-primary rounded-lg shadow-lg p-4 mt-2"
            >
              {['Serviços', 'Portfólio', 'Sobre Nós', 'Blog', 'Contato'].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block py-2"
                  >
                    {item}
                  </Link>
                ),
              )}
              <ModeTheme />
              <Button
                variant="default"
                size="lg"
                className="w-full mt-4 font-semibold"
              >
                Solicite um Orçamento
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      <div className="py-56 lg:py-96">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-6"
        >
          Transforme seu Negócio com <br />
          <motion.span
            key={phrases[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-primary"
          >
            {phrases[index]}
          </motion.span>
        </motion.h1>
        <TextEffect className="text-xl sm:text-2xl text-center mb-8">
          Sites, Social Media, e Tráfego Pago para Impulsionar seu Sucesso
          Online
        </TextEffect>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Button variant="default" className="button-shadow font-bold">
            Solicite um Orçamento
          </Button>
          <Button variant="outline" size="lg">
            Conheça Nossos Projetos
          </Button>
        </motion.div>
      </div>

      <a
        href="#services"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:bottom-0"
      >
        <ChevronDown className="text-primary w-20 h-20 animate-bounce" />
      </a>
    </header>
  )
}
