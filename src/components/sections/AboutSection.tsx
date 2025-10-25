'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { 
  Target, 
  Users, 
  Award, 
  Heart,
  BookOpen,
  Lightbulb,
  Shield,
  Globe
} from 'lucide-react'

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Transformar a educação municipal através de soluções educacionais inovadoras e de qualidade, contribuindo para o desenvolvimento integral dos estudantes do Ceará.'
    },
    {
      icon: Lightbulb,
      title: 'Visão',
      description: 'Ser a referência em soluções educacionais para prefeituras, reconhecida pela excelência e impacto positivo na educação pública municipal.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Compromisso com a qualidade, inovação constante, parceria com gestores públicos e dedicação ao desenvolvimento educacional das comunidades.'
    }
  ]

  const team = [
    {
      name: 'Equipe Pedagógica',
      role: 'Especialistas em Educação',
      description: 'Profissionais com vasta experiência em educação municipal e conhecimento das necessidades específicas das prefeituras.'
    },
    {
      name: 'Equipe Comercial',
      role: 'Consultores Especializados',
      description: 'Consultores com mais de 20 anos de experiência no ramo educacional, especializados em gestão pública e conhecimento profundo das particularidades de cada município.'
    }
  ]

  const achievements = [
    { number: '15+', label: 'Prefeituras Atendidas' },
    { number: '100+', label: 'Bibliotecas Implementadas' },
    { number: '95%', label: 'Satisfação dos Clientes' },
    { number: '5+', label: 'Anos de Experiência' }
  ]

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Sobre a <span className="text-gradient">Toda Cor</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Fundada em 2019, transformando a educação municipal através de soluções inovadoras, 
            materiais de qualidade e tecnologia educacional de ponta.
          </p>
        </div>

        {/* Nossa História */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Nossa História
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A <strong className="text-primary-600">Toda Cor</strong> nasceu da paixão por transformar 
                  a educação pública no Ceará. Fundada por educadores experientes, 
                  nossa empresa surgiu com o propósito de democratizar o acesso a materiais educacionais 
                  de qualidade nas prefeituras.
                </p>
                <p>
                  Ao longo dos anos, desenvolvemos uma metodologia única que combina conhecimento pedagógico, 
                  tecnologia inovadora e experiência prática em gestão municipal. Cada projeto é tratado 
                  com cuidado especial, respeitando as particularidades de cada município.
                </p>
                <p>
                  Hoje, somos referência em soluções educacionais para prefeituras, com mais de 15 municípios 
                  atendidos e centenas de bibliotecas implementadas, beneficiando milhares de estudantes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Educação Transformadora
                  </h4>
                  <p className="text-gray-600">
                    Cada projeto é uma oportunidade de transformar vidas através da educação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fundador */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Nosso Fundador
          </h3>
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h4 className="text-3xl font-bold text-gray-900 mb-6">Walker Falcão</h4>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      Fundador
                    </span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      Educador
                    </span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      Empresário
                    </span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      Apaixonado por Educação
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                  <p>
                    <strong className="text-primary-600">Walker Falcão</strong> é o visionário por trás da Toda Cor. 
                    Com mais de <strong>25 anos de experiência na área educacional privada</strong> e 
                    <strong> mais de 5 anos na área educacional pública</strong>, ele desenvolveu uma 
                    compreensão profunda dos desafios e oportunidades na educação municipal.
                  </p>
                  <p>
                    Sua paixão pela educação o impulsionou a abrir sua própria empresa, com o objetivo 
                    de transformar a realidade educacional das prefeituras do Ceará. Walker acredita 
                    que cada criança merece acesso a materiais educacionais de qualidade, independentemente 
                    de onde nasça.
                  </p>
                  <p>
                    Com uma visão clara e experiência consolidada, ele lidera a Toda Cor com o compromisso 
                    de democratizar a educação e contribuir para o desenvolvimento integral dos estudantes 
                    em todo o estado.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Nossos Pilares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nossa Equipe */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Nossa Equipe
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Números e Conquistas */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Nossas Conquistas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Por que a Toda Cor */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Por que a Toda Cor?
            </h3>
            <p className="text-primary-100 text-lg max-w-3xl mx-auto">
              Somos especialistas em soluções educacionais para prefeituras, com metodologia própria e equipe altamente qualificada
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-accent-300" />
              <h4 className="text-lg font-semibold mb-2">Qualidade Certificada</h4>
              <p className="text-primary-100 text-sm">
                Materiais educacionais certificados e testados pedagogicamente, seguindo as melhores práticas do mercado
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-accent-300" />
              <h4 className="text-lg font-semibold mb-2">Especialização Regional</h4>
              <p className="text-primary-100 text-sm">
                Conhecimento profundo da realidade educacional do Ceará e das necessidades específicas de cada município
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-accent-300" />
              <h4 className="text-lg font-semibold mb-2">Consultores Experientes</h4>
              <p className="text-primary-100 text-sm">
                Equipe com mais de 20 anos de experiência em educação e gestão pública municipal
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-accent-300" />
              <h4 className="text-lg font-semibold mb-2">Parceria Estratégica</h4>
              <p className="text-primary-100 text-sm">
                Acompanhamento completo do projeto, desde o planejamento até a implementação e suporte contínuo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
