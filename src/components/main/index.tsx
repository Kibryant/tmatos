'use client'

import { useEffect } from 'react'
import { Section } from '../section'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code,
  BarChart,
  MessageSquare,
  Zap,
  RocketIcon,
  Mail,
  ShieldCheck,
} from 'lucide-react'
import Image from 'next/image'
import { ServicesCards } from '../services-cards'
import { MarketingTools } from '../marketing-tools'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'Desenvolvimento de Sites',
    description:
      'Criamos sites modernos e responsivos que convertem visitantes em clientes.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: 'Tráfego Pago',
    description:
      'Gerenciamos suas campanhas para maximizar o ROI e alcançar seu público-alvo.',
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: 'Social Media',
    description:
      'Estratégias de conteúdo que engajam e fortalecem sua marca nas redes sociais.',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Automação',
    description:
      'Otimizamos seus processos para aumentar a eficiência e produtividade.',
  },
]

const results = [
  { number: '500+', description: 'Projetos Entregues' },
  { number: '98%', description: 'Clientes Satisfeitos' },
  { number: '200%', description: 'Aumento Médio em Conversões' },
]

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'CEO, TechStart',
    content:
      'A equipe da Agência Digital transformou completamente nossa presença online. Nosso tráfego aumentou em 300% em apenas 3 meses!',
  },
  {
    name: 'João Santos',
    role: 'Diretor de Marketing, InnovateCorp',
    content:
      'A automação implementada pela equipe economizou horas de trabalho manual e melhorou significativamente nossa eficiência.',
  },
]

const portfolio = [
  {
    title: 'E-commerce de Moda',
    description:
      'Desenvolvimento de plataforma de e-commerce com integração de pagamentos e gestão de estoque.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'App de Delivery',
    description:
      'Aplicativo móvel para entrega de alimentos com rastreamento em tempo real.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'Campanha de Marketing Digital',
    description:
      'Estratégia omnichannel que aumentou as vendas em 150% em 6 meses.',
    image: '/placeholder.svg?height=300&width=400',
  },
]

const team = [
  {
    name: 'Ana Rodrigues',
    role: 'CEO & Estrategista Digital',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Carlos Mendes',
    role: 'Diretor de Tecnologia',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Juliana Costa',
    role: 'Gerente de Marketing',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Ricardo Alves',
    role: 'Designer UX/UI',
    image: '/placeholder.svg?height=200&width=200',
  },
]

export function Main() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <main ref={ref}>
      <Section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Entre <span className="text-primary">em Contato</span>
          </h2>
          <div className="grid grid-cols-1 justify-center items-center lg:grid-cols-2 gap-12">
            <motion.div
              className="p-8 rounded-md shadow-md"
              initial="hidden"
              animate={controls}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-semibold mb-6">
                Envie-nos uma mensagem
              </h3>
              <form className="space-y-4">
                <div>
                  <Input type="text" placeholder="Nome" />
                </div>
                <div>
                  <Input type="email" placeholder="E-mail" />
                </div>
                <div>
                  <Textarea placeholder="Mensagem" />
                </div>
                <Button
                  type="submit"
                  className="w-full text-secondary-foreground"
                >
                  Enviar
                </Button>
              </form>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={controls}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Entraremos em contato{' '}
                  <span className="text-primary">em até 24 horas!</span>
                </h3>
                <p className="text-lg">
                  Preencha o formulário e nossa equipe retornará o mais breve
                  possível. Garantimos uma resposta rápida e confiável!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-md text-center bg-gradient-to-r from-primary to-primary-foreground">
                  <ShieldCheck className="w-8 h-8 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Seguro</h4>
                  <p>Seus dados estão protegidos e seguros conosco.</p>
                </div>
                <div className="p-6 rounded-md text-center bg-gradient-to-r from-primary to-primary-foreground">
                  <Mail className="w-8 h-8 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Retorno rápido</h4>
                  <p>Responderemos sua mensagem por e-mail em até 24 horas.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section className="container mx-auto px-4 mb-20 text-center">
        <div className="flex items-center justify-center gap-x-2">
          <RocketIcon size={20} className="text-primary" />
          <h1 className="font-bold bg-gradient-to-r from-primary via-primary/95 to-background bg-clip-text text-transparent">
            T|MATOS
          </h1>
        </div>
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Transforme sua <span className="text-primary">presença digital</span>
        </motion.h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="border border-primary p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                whileHover={{ y: -5 }}
                initial="hidden"
                animate={controls}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
          <MarketingTools />
        </div>
      </Section>

      <Section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Resultados <span className="text-primary">Comprovados</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial="hidden"
                animate={controls}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2 text-primary">
                  {result.number}
                </div>
                <div className="text-xl">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-md shadow-md border border-primary"
                initial="hidden"
                animate={controls}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <p className="mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <Image
                    src={`/placeholder.svg?height=50&width=50`}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                className="rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-primary"
                initial="hidden"
                animate={controls}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="border border-primary rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out text-center"
                initial="hidden"
                animate={controls}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="services" className="mb-20">
        <h2 className="text-4xl font-bold text-center">
          Nossos <span className="text-primary">Serviços</span>
        </h2>
        <ServicesCards />
      </Section>
    </main>
  )
}
