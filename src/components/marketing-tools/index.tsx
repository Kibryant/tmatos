'use client'

import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import {
  Chrome,
  Facebook,
  BarChart2,
  Code2,
  Smartphone,
  Apple,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
} from 'lucide-react'

// Importe o CSS do react-slick (você precisará instalar via npm)
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function MarketingTools() {
  const sliderRef = useRef<Slider>(null)

  const settings = {
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

  const icons = [
    { Icon: Chrome, name: 'Google Ads' },
    { Icon: Facebook, name: 'Facebook Ads' },
    { Icon: BarChart2, name: 'Google Analytics' },
    { Icon: Code2, name: 'Next.js' },
    { Icon: Smartphone, name: 'React Native' },
    { Icon: Apple, name: 'iOS' },
    { Icon: Instagram, name: 'Instagram' },
    { Icon: Linkedin, name: 'LinkedIn' },
    { Icon: Twitter, name: 'Twitter' },
    { Icon: Mail, name: 'Email Marketing' },
  ]

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
      <Slider ref={sliderRef} {...settings} className="icon-carousel mt-20">
        {icons.map(({ Icon, name }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-4 transition-transform transform hover:scale-110"
          >
            <div className="bg-white rounded-full p-6 shadow-lg flex items-center justify-center mb-2 hover:bg-gray-100 transition duration-300">
              <Icon size={40} className="text-primary" />
            </div>
            <span className="text-xs text-secondary-foreground font-medium">
              {name}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  )
}
