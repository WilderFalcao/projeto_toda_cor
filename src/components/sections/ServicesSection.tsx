'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { 
  BookOpen, 
  Library, 
  Users, 
  Laptop, 
  Truck, 
  Shield 
} from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Materiais Didáticos',
      description: 'Livros atualizados conforme BNCC, apostilas pedagógicas e recursos educacionais de alta qualidade para todas as disciplinas.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Library,
      title: 'Bibliotecas Completas',
      description: 'Implementação completa com acervo diversificado, mobiliário adequado e organização sistemática para máxima utilização.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Users,
      title: 'Consultoria Educacional',
      description: 'Assessoria especializada para gestores educacionais, planejamento pedagógico e acompanhamento de projetos.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Laptop,
      title: 'Tecnologia Educacional',
      description: 'Equipamentos tecnológicos, recursos digitais, robótica educacional e ferramentas de ensino inovadoras.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Truck,
      title: 'Logística Especializada',
      description: 'Entrega, instalação e montagem completa em todo o Ceará, com equipe técnica especializada e suporte local.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Shield,
      title: 'Garantia e Suporte',
      description: 'Acompanhamento contínuo, treinamento de professores, manutenção preventiva e suporte técnico especializado.',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ]

  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Oferecemos soluções completas e integradas para transformar a educação municipal, 
            desde o planejamento até a implementação e acompanhamento contínuo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-soft p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para Transformar sua Educação?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco e descubra como podemos ajudar sua prefeitura 
              a implementar uma educação de qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Solicitar Orçamento
              </button>
              <button className="btn-whatsapp">
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
