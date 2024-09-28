'use client'

import { useRef, useState } from 'react'
import { Section } from '../section'
import { useInView } from 'framer-motion'
import { AnimatedNumber } from '../animated-number'

export function ProvenResults() {
  const [deliveredProjects, setDeliveredProjects] = useState(0)
  const [happyClients, setHappyClients] = useState(0)
  const [averageIncreaseInConversion, setAverageIncreaseInConversion] =
    useState(0)

  const ref = useRef(null)
  const isInView = useInView(ref)

  if (
    isInView &&
    deliveredProjects === 0 &&
    happyClients === 0 &&
    averageIncreaseInConversion === 0
  ) {
    setDeliveredProjects(200)
    setHappyClients(100)
    setAverageIncreaseInConversion(100)
  }

  return (
    <Section className="" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Resultados <span className="text-primary">Comprovados</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <AnimatedNumber
              value={deliveredProjects}
              className="text-6xl font-light text-primary"
            >
              <span className="text-6xl font-light text-primary">+</span>
            </AnimatedNumber>
            <p className="text-lg font-semibold">Projetos entregues</p>
          </div>
          <div className="text-center">
            <AnimatedNumber
              value={happyClients}
              className="text-6xl font-light text-primary"
            >
              <span className="text-6xl font-light text-primary">+</span>
            </AnimatedNumber>
            <p className="text-lg font-semibold">Clientes felizes</p>
          </div>
          <div className="text-center">
            <AnimatedNumber
              value={averageIncreaseInConversion}
              className="text-6xl font-light text-primary"
            >
              <span className="text-6xl font-light text-primary">%</span>
            </AnimatedNumber>
            <p className="text-lg font-semibold">Aumento médio na conversão</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
