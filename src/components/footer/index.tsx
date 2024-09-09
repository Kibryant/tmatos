'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
} from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#incio' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Contato', href: '/contato' },
  { name: 'Blog', href: '/blog' },
]

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="flex flex-col items-start" {...fadeInUp}>
            <Image
              src="/logo-white.png"
              alt="Logo da Agência Digital"
              width={200}
              height={60}
              className="mb-4"
            />
            <p className="text-sm mt-2">
              Transformando ideias em realidade digital desde 2023.
            </p>
          </motion.div>

          {/* Links de Navegação */}
          <motion.nav
            className="flex flex-col items-center md:items-start"
            {...fadeInUp}
          >
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className=" hover:text-white transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contato e Redes Sociais */}
          <motion.div className="flex flex-col items-end" {...fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="flex flex-col items-end space-y-2">
              <a
                href="mailto:contato@agenciadigital.com"
                className="flex items-center  hover:text-white transition duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                contato@agenciadigital.com
              </a>
              <a
                href="tel:+551199999999"
                className="flex items-center  hover:text-white transition duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                (11) 9999-9999
              </a>
              <div className="flex items-center ">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <address className="not-italic">
                  Rua da Inovação, 123 - Tech Valley
                  <br />
                  São Paulo - SP, 01234-567
                </address>
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-white transition duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-gray-800 text-center text-sm "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>
            &copy; 2024 T|MATOS Agência Digital. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Desenvolvido com ❤️ por{' '}
            <a
              href="https://www.agenciadigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              Equipe Agência Digital
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
