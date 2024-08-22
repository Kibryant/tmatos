import Image from 'next/image'
import { Section } from '../section'
import { MailIcon, PhoneIcon } from 'lucide-react'
import { InstagramIcon } from '../icons/instagram-icon'

export function Footer() {
  return (
    <footer className="bg-primary w-screen pb-2">
      <Section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4">
        <div className="flex flex-col items-start justify-center">
          <Image src="/logo-white.png" alt="Logo" width={100} height={100} />
          <p className="font-medium text-lg mt-2">
            Somos um grupo que é composto por uma Software House especialista no
            desenvolvimento Web e App.
          </p>
          <p className="font-medium text-lg mt-2">
            Nosso objetivo é ajudar empresas a crescerem e se destacarem no
            mercado.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-2xl font-bold">Contato</h3>
          <div className="flex items-center justify-start mt-2">
            <PhoneIcon size={24} />
            <p className="text-lg ml-2">(11) 99999-9999</p>
          </div>
          <div className="flex items-center justify-start mt-2">
            <MailIcon size={24} />
            <p className="text-lg ml-2">tmatos@gmaio.com</p>
          </div>
          <div className="flex items-center justify-start mt-2">
            <InstagramIcon className="w-6 h-6 fill-secondary-foreground" />
            <p className="text-lg ml-2">@tmatos</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold">Endereço</h3>
          <p className="text-lg">Rua Teste, 123</p>
          <p className="text-lg">São Paulo - SP</p>
        </div>
      </Section>
      <div>
        <p className="font-medium text-center">
          © 2024 | T|Matos - Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
