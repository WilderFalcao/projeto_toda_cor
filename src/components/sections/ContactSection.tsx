'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { usePedidos } from '@/hooks/useSupabase'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle,
  MessageCircle
} from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    cargo: '',
    numeroAlunos: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  
  const { createPedido } = usePedidos()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      // Criar pedido no banco de dados
      await createPedido({
        nome_completo: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        cidade: formData.cidade,
        cargo: formData.cargo,
        numero_alunos: formData.numeroAlunos ? parseInt(formData.numeroAlunos) : null,
        mensagem: formData.mensagem || null,
        status: 'pendente'
      })
      
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          cidade: '',
          cargo: '',
          numeroAlunos: '',
          mensagem: ''
        })
      }, 3000)
      
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Erro ao enviar formulário')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Fortaleza, Ceará, Brasil',
      description: 'Atendemos todo o estado do Ceará'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(85) 3000-0000',
      description: 'Segunda a Sexta: 8h às 18h'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@todacor.com.br',
      description: 'Resposta em até 24h'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: '8h às 18h',
      description: 'Segunda a Sexta-feira'
    }
  ]

  return (
    <section id="contato" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Pronto para transformar a educação da sua prefeitura? 
            Agende uma demonstração e descubra como podemos ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Agendar Demonstração
              </CardTitle>
              <p className="text-gray-600">
                Preencha o formulário para agendar uma demonstração personalizada das nossas soluções educacionais.
              </p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-gray-600">
                    Obrigado pelo seu interesse. Entraremos em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Nome Completo *"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      placeholder="Seu nome completo"
                    />
                    <Input
                      label="E-mail *"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Telefone *"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      placeholder="(85) 99999-9999"
                    />
                    <Input
                      label="Cidade/Prefeitura *"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleInputChange}
                      required
                      placeholder="Sua cidade"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Cargo *"
                      name="cargo"
                      value={formData.cargo}
                      onChange={handleInputChange}
                      required
                      placeholder="Ex: Coordenador Pedagógico"
                    />
                    <Input
                      label="Número de Alunos"
                      name="numeroAlunos"
                      value={formData.numeroAlunos}
                      onChange={handleInputChange}
                      placeholder="Quantidade aproximada"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem (Opcional)
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      className="input-field resize-none"
                      placeholder="Conte-nos mais sobre suas necessidades..."
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <p className="text-red-600 text-sm">{submitError}</p>
                    </div>
                  )}
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    loading={isSubmitting}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Enviando...' : 'Agendar Demonstração'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card key={index} className="text-center hover:shadow-medium transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-primary-600 font-medium mb-1">{info.content}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-whatsapp-600 text-white">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fale Conosco no WhatsApp</h3>
                <p className="text-whatsapp-100 mb-4">
                  Resposta mais rápida e atendimento personalizado
                </p>
                <Button 
                  variant="secondary" 
                  className="bg-white text-whatsapp-600 hover:bg-gray-50"
                  onClick={() => window.open('https://wa.me/5585987122328?text=Olá! Gostaria de agendar uma demonstração das soluções educacionais da Toda Cor', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
