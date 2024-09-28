'use client'

import React, { useEffect, useRef } from 'react'
import Slider, { type Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  GoogleAnalytics,
  Nextjs,
  ReactIcon,
  Android,
  Gmail,
  Apple,
  Instagram,
  Linkedin,
  Figma,
  Python,
} from '../icons'

const ICONS = [
  { Icon: GoogleAnalytics, name: 'Google Analytics' },
  { Icon: Nextjs, name: 'Next.js' },
  { Icon: ReactIcon, name: 'React Native' },
  { Icon: Apple, name: 'iOS' },
  { Icon: Android, name: 'Android' },
  { Icon: ReactIcon, name: 'React' },
  { Icon: Instagram, name: 'Instagram' },
  { Icon: Linkedin, name: 'LinkedIn' },
  { Icon: Gmail, name: 'Email Marketing' },
  { Icon: Figma, name: 'Figma' },
  { Icon: Python, name: 'Python' },
]

export function MarketingTools() {
  const sliderRef = useRef<Slider>(null)

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      const handleMouseEnter = () => {
        slider.slickPause()
      }
      const handleMouseLeave = () => {
        slider.slickPlay()
      }

      const sliderNode = slider.innerSlider?.list
      sliderNode?.addEventListener('mouseenter', handleMouseEnter)
      sliderNode?.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        sliderNode?.removeEventListener('mouseenter', handleMouseEnter)
        sliderNode?.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className="relative">
      <Slider
        ref={sliderRef}
        {...settings}
        className="icon-carousel mt-20 py-4"
      >
        {ICONS.map(({ Icon, name }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center px-4 transition-transform transform hover:scale-110"
          >
            <div className="bg-background rounded-full w-20 h-20 shadow-lg flex items-center justify-center dark:border dark:border-primary dark:shadow-none">
              <Icon className="fill-primary size-10 text-primary" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
