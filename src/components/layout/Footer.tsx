'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  MessageCircle
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        const headerHeight = 64
        const elementPosition = element.offsetTop - headerHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    } else if (href.startsWith('http')) {
      window.open(href, '_blank')
    }
  }

  const footerLinks = {
    empresa: [
      { name: 'Sobre Nós', href: '#sobre' },
      { name: 'Serviços', href: '#servicos' },
      { name: 'Produtos', href: '#produtos' },
      { name: 'Contato', href: '#contato' }
    ],
    servicos: [
      { name: 'Bibliotecas Infantis', href: '#produtos' },
      { name: 'Bibliotecas Tecnológicas', href: '#produtos' },
      { name: 'Bibliotecas Mecatrônicas', href: '#produtos' },
      { name: 'Consultoria Educacional', href: '#servicos' }
    ],
    suporte: [
      { name: 'WhatsApp', href: 'https://wa.me/5585987122328' },
      { name: 'Contato', href: '#contato' },
      { name: 'Sobre Nós', href: '#sobre' },
      { name: 'Produtos', href: '#produtos' }
    ]
  }

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/TodaCorEducacao', 
      icon: Facebook 
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/todacor_educacao', 
      icon: Instagram 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/todacor-educacao', 
      icon: Linkedin 
    }
  ]

  return (
    <footer className="bg-dark-800 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
            <button 
              onClick={() => scrollToSection('#inicio')}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="text-2xl font-script text-accent-400 font-bold">
                Toda Cor
              </div>
            </button>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transformando a educação nas prefeituras do Ceará através de 
                materiais educacionais de qualidade e soluções especializadas 
                para o desenvolvimento educacional municipal.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent-400" />
                  <span className="text-gray-300">Fortaleza, Ceará, Brasil</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent-400" />
                  <span className="text-gray-300">(85) 3000-0000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent-400" />
                  <span className="text-gray-300">contato@todacor.com.br</span>
                </div>
              </div>
            </div>

            {/* Empresa */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Serviços */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Serviços</h3>
              <ul className="space-y-3">
                {footerLinks.servicos.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Suporte</h3>
              <ul className="space-y-3">
                {footerLinks.suporte.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Receba Nossas Novidades</h3>
              <p className="text-gray-300">
                Fique por dentro das últimas tendências em educação municipal
              </p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 lg:w-80 px-4 py-3 bg-gray-700 border border-gray-600 rounded-l-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-gray-900 font-medium rounded-r-lg transition-colors duration-200">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Toda Cor. Todos os direitos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 hover:bg-accent-500 rounded-full flex items-center justify-center transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5 text-gray-300 group-hover:text-gray-900" />
                  </a>
                )
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                href="/privacidade" 
                className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
              >
                Política de Privacidade
              </Link>
              <Link 
                href="/termos" 
                className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5585987122328"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-whatsapp-600 hover:bg-whatsapp-700 rounded-full flex items-center justify-center shadow-strong hover:shadow-strong transition-all duration-300 hover:scale-110 group"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
