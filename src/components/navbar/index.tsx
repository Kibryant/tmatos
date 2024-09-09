'use client'

import Image from 'next/image'
import { useState } from 'react'
import { NavbarLink } from './navbar-link'
import { useScroll } from '@/hooks/useScroll'
import { ModeTheme } from '../mode-theme'

export function Navbar() {
  const { backgroundColor } = useScroll()

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <div
      className={`w-full border-b border-primary flex justify-between items-center transition duration-500 py-2 z-50 sm:fixed sm:top-0 sm:left-0 ${backgroundColor === 'bg-background' && backgroundColor}`}
    >
      <div
        className={`${
          isOpen ? 'fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md' : ''
        } transition-all duration-300`}
      ></div>

      <div className="w-full px-10 py-4 flex justify-between items-center">
        <Image src="/logo-blue.png" alt="logo" width={60} height={60} />

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links (desktop) */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <ModeTheme />
          <NavbarLink href="#inicio">Inicio</NavbarLink>
          <NavbarLink href="#servicos">About</NavbarLink>
          <a
            href="#services"
            className="block py-2 md:inline md:py-0 hover:text-gray-400 transition-all"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block py-2 md:inline md:py-0 hover:text-gray-400 transition-all"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Navbar links (mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 border-l bg-background border-primary z-30 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } duration-300 ease-in-out`}
      >
        <div className="absolute top-4 right-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="#home"
            className="text-2xl hover:text-gray-400 transition-all"
            onClick={toggleMenu}
          >
            Inicio
          </a>
          <a
            href="#about"
            className="text-2xl hover:text-gray-400 transition-all"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#services"
            className="text-2xl hover:text-gray-400 transition-all"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-2xl hover:text-gray-400 transition-all"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <ModeTheme />
        </nav>
      </div>
    </div>
  )
}
