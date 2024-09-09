'use client'

import { ChevronDown, TargetIcon } from 'lucide-react'
import { Navbar } from '../navbar'
import { Section } from '../section'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HeaderTitle } from './header-title'

export function Header() {
  return (
    <motion.header
      id="inicio"
      className="relative min-h-screen mb-20 md:mb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar />

      <Section className="flex flex-col justify-center items-center px-4 md:flex-row md:justify-center md:items-center md:h-screen">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="lg:w-1/2 lg:pr-8"
        >
          <Badge variant="outline" className="flex items-center justify-center">
            <span className="text-[10px]">
              Procurando uma empresa completa para marketing?
            </span>
            <TargetIcon className="ml-2 text-primary" />
          </Badge>
          <HeaderTitle>
            Tenha um time feito{' '}
            <span className="text-primary">sob medida </span>
            para atender{' '}
            <span className="text-primary font-extrabold">sua empresa</span>
          </HeaderTitle>
          <motion.div
            className="mt-4 w-full lg:w-auto lg:mt-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button className="w-full lg:w-auto uppercase font-bold button-shadow dark:text-secondary-foreground">
              Quero mais informações
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 w-full lg:w-1/2 lg:mt-0 lg:flex lg:justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Image
            src="/golden-lion.jpg"
            alt="Marketing Image"
            width={600}
            height={400}
          />
        </motion.div>
      </Section>

      <a
        href="#services"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:bottom-0"
      >
        <ChevronDown className="text-primary w-20 h-20 animate-bounce" />
      </a>
    </motion.header>
  )
}
