'use client'

import React from 'react'
import Button from '@/components/ui/Button'
import { ArrowRight, Play } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary-600 to-primary-800"></div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse"></span>
            Transformando a Educação Municipal
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Transformando a</span>
            <span className="block text-gradient bg-gradient-to-r from-white to-accent-300">
              Educação nas Prefeituras
            </span>
            <span className="block">do Ceará</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Fornecemos materiais educacionais de qualidade, bibliotecas completas e soluções especializadas 
            para fortalecer a educação pública municipal com tecnologia e inovação.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-accent-500 hover:bg-accent-600 text-gray-900 font-semibold shadow-strong"
              onClick={() => {
                const contactSection = document.getElementById('contato')
                if (contactSection) {
                  const headerHeight = 64
                  const elementPosition = contactSection.offsetTop - headerHeight
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  })
                }
              }}
            >
              Agendar Demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => {
                const productsSection = document.getElementById('produtos')
                if (productsSection) {
                  const headerHeight = 64
                  const elementPosition = productsSection.offsetTop - headerHeight
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  })
                }
              }}
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Produtos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-300 mb-2">15+</div>
              <div className="text-sm sm:text-base text-gray-300">Prefeituras Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-300 mb-2">100+</div>
              <div className="text-sm sm:text-base text-gray-300">Bibliotecas Implementadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-300 mb-2">95%</div>
              <div className="text-sm sm:text-base text-gray-300">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
