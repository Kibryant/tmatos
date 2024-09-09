import { Button } from '../ui/button'
import { SparkleIcon } from 'lucide-react'

const PLANS = [
  {
    title: 'BÁSICO',
    option: 'OPÇÃO 1',
    services: [
      '10 artes por mês (2 carrossel)',
      'Gestão das redes sociais (2 plataformas)',
      'Basic SEO otimizador',
      'Performance em dados',
      'Email suporte',
    ],
    buttonText: 'CONSULTAR DISPONIBILIDADE',
    popular: false,
  },
  {
    title: 'MAIS POPULAR',
    option: 'OPÇÃO 2',
    services: [
      '10 artes por mês (2 carrossel)',
      'Gestão das redes sociais (2 plataformas)',
      'Basic SEO otimizador',
      'Performance em dados',
      'Email suporte',
      '4 edições de vídeos',
    ],
    buttonText: 'CONSULTAR DISPONIBILIDADE',
    popular: true,
  },
  {
    title: 'PREMIUM',
    option: 'OPÇÃO 3',
    services: [
      '10 artes por mês (2 carrossel)',
      'Gestão das redes sociais (2 plataformas)',
      'Basic SEO otimizador',
      'Performance em dados',
      'Email suporte',
      '4 edições de vídeos',
    ],
    buttonText: 'CONSULTAR DISPONIBILIDADE',
    popular: false,
  },
]

export function ServicesCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-6 p-6 mt-10">
      {PLANS.map((plan, index) => (
        <div
          key={index}
          className={`flex flex-col relative justify-between px-6 py-12 rounded-md border ${plan.popular ? 'text-secondary bg-service-card-gradient-light dark:text-secondary dark:bg-service-card-gradient-dark h-[560px]' : 'border-primary h-[500px]'} w-full max-w-xs`}
        >
          <div
            className={`flex py-2 px-4 rounded-md text-sm font-bold absolute -top-3 ${plan.popular ? 'bg-primary dark:text-secondary-foreground' : 'bg-secondary-foreground border border-primary text-secondary'}`}
          >
            <span>{plan.title}</span>
            {plan.popular && <SparkleIcon size={20} className="ml-2" />}
          </div>
          <h2 className="text-3xl font-bold mt-4">{plan.option}</h2>
          <hr
            className={`border-t ${plan.popular ? 'border-secondary' : 'border-secondary-foreground'} mt-2`}
          />
          <h3 className="text-xl font-semibold mt-4">Serviços:</h3>
          <ul className="mt-2 space-y-2">
            {plan.services.map((service, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <span className="text-lg">✔</span>
                <span className="text-sm">{service}</span>
              </li>
            ))}
          </ul>
          <Button
            className={`mt-6 py-2 rounded text-sm font-semibold transition-colors duration-300 ${
              plan.popular
                ? 'bg-primary dark:text-secondary-foreground'
                : 'bg-secondary-foreground border border-primary text-secondary'
            }`}
          >
            {plan.buttonText}
          </Button>
        </div>
      ))}
    </div>
  )
}
