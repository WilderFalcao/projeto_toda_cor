'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useBibliotecas } from '@/hooks/useSupabase'
import { 
  BookOpen, 
  Laptop, 
  Cpu, 
  Users, 
  MessageCircle,
  Download,
  Loader2
} from 'lucide-react'

const ProductsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('todos')
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const { bibliotecas, loading, error } = useBibliotecas()

  // Debug: Log dos dados
  console.log('ProductsSection - bibliotecas:', bibliotecas)
  console.log('ProductsSection - loading:', loading)
  console.log('ProductsSection - error:', error)

  // Função para obter imagem baseada no tipo de biblioteca
  const getImageByType = (tipo: string) => {
    switch (tipo) {
      case 'infantil':
        return 'https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Biblioteca+Infantil'
      case 'tecnologica':
        return 'https://via.placeholder.com/400x300/059669/FFFFFF?text=Biblioteca+Tecnológica'
      case 'mecatronica':
        return 'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Biblioteca+Mecatrônica'
      default:
        return 'https://via.placeholder.com/400x300/6B7280/FFFFFF?text=Biblioteca+Educacional'
    }
  }

  // Dados mock para quando não há dados do banco
  const mockProducts = [
    {
      id: '1',
      title: 'Biblioteca Infantil Completa',
      type: 'infantil',
      description: 'Acervo completo para educação infantil com livros, brinquedos educativos e materiais didáticos adequados para crianças de 3 a 6 anos.',
      image: getImageByType('infantil'),
      ageRange: '3-6 anos',
      items: 232,
      competencies: ['Linguagem', 'Matemática', 'Natureza', 'Artes'],
      price: 'Consulte valores',
      features: ['150 Livros infantis', '50 Brinquedos educativos', '30 Materiais de artes', '+2 itens adicionais']
    },
    {
      id: '2',
      title: 'Biblioteca Tecnológica',
      type: 'tecnologica',
      description: 'Equipamentos tecnológicos e recursos digitais para modernizar o ensino fundamental e médio com foco em competências do século XXI.',
      image: getImageByType('tecnologica'),
      ageRange: '6-18 anos',
      items: 37,
      competencies: ['Programação', 'Robótica', 'Ciências', 'Matemática'],
      price: 'Consulte valores',
      features: ['20 Tablets educacionais', '10 Kits de robótica', '5 Microscópios digitais', '+2 itens adicionais']
    },
    {
      id: '3',
      title: 'Biblioteca Mecatrônica',
      type: 'mecatronica',
      description: 'Solução completa para ensino de robótica, automação e engenharia, preparando estudantes para carreiras tecnológicas.',
      image: getImageByType('mecatronica'),
      ageRange: '12-18 anos',
      items: 45,
      competencies: ['Robótica', 'Automação', 'Engenharia', 'Programação'],
      price: 'Consulte valores',
      features: ['15 Kits Arduino', '8 Robôs programáveis', '20 Ferramentas', '+2 itens adicionais']
    }
  ]

  // Transformar dados do banco para o formato esperado pelo componente
  const products = bibliotecas.length > 0 ? bibliotecas.map(biblioteca => {
    const itensInclusos = biblioteca.itens_inclusos as any[] || []
    const totalItems = itensInclusos.reduce((sum, item) => sum + (item.quantidade || 0), 0)
    
    return {
      id: biblioteca.id,
      title: biblioteca.nome,
      type: biblioteca.tipo,
      description: biblioteca.descricao || '',
      image: biblioteca.imagens?.[0] || getImageByType(biblioteca.tipo),
      ageRange: biblioteca.faixa_etaria || '',
      items: totalItems,
      competencies: biblioteca.competencias || [],
      price: 'Consulte valores',
      features: itensInclusos.slice(0, 5).map(item => `${item.quantidade} ${item.nome}`)
    }
  }) : mockProducts

  const filters = [
    { id: 'todos', label: 'Todos os Produtos' },
    { id: 'infantil', label: 'Infantil' },
    { id: 'tecnologica', label: 'Tecnológica' },
    { id: 'mecatronica', label: 'Mecatrônica' }
  ]

  const filteredProducts = selectedFilter === 'todos' 
    ? products 
    : products.filter(product => product.type === selectedFilter)

  const toggleExpandedItems = (productId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(productId)) {
        newSet.delete(productId)
      } else {
        newSet.add(productId)
      }
      return newSet
    })
  }

  if (loading) {
    return (
      <section id="produtos" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary-600" />
            <p className="text-gray-600">Carregando produtos...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="produtos" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-red-600 mb-4">Erro ao carregar produtos: {error}</p>
            <Button onClick={() => window.location.reload()}>
              Tentar Novamente
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="produtos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 lg:mb-8 px-4">
            Kits pré-definidos e testados, desenvolvidos especialmente para atender 
            às necessidades educacionais das prefeituras do Ceará.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-medium'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500 mb-4">
                <BookOpen className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg">Nenhum produto encontrado</p>
                <p className="text-sm">Tente ajustar os filtros ou entre em contato conosco</p>
              </div>
            </div>
          ) : (
            filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-900">
                  {product.ageRange}
                </div>
              </div>

              <CardHeader className="flex-grow">
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 flex-grow flex flex-col">

                {/* Competencies */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Competências Desenvolvidas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.competencies.map((competency, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {competency}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-grow">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Inclui:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <>
                        {expandedItems.has(product.id) && (
                          <>
                            {product.features.slice(3).map((feature, index) => (
                              <li key={index + 3} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </>
                        )}
                        <li 
                          className="text-primary-600 font-medium cursor-pointer hover:text-primary-700 transition-colors"
                          onClick={() => toggleExpandedItems(product.id)}
                        >
                          {expandedItems.has(product.id) 
                            ? 'Ver menos itens' 
                            : `+${product.features.length - 3} itens adicionais`
                          }
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Price */}
                <div className="text-center py-4 border-t border-gray-200">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {product.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    {product.items} itens inclusos
                  </div>
                </div>

                {/* Action Buttons - Alinhados na parte inferior */}
                <div className="space-y-3 mt-auto">
                  <Button 
                    variant="whatsapp" 
                    className="w-full"
                    onClick={() => window.open(`https://wa.me/5585996709412?text=Olá! Gostaria de saber mais sobre ${product.title}`, '_blank')}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Consultar via WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(`https://wa.me/5585996709412?text=Olá! Gostaria de agendar uma demonstração do ${product.title}`, '_blank')}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Agendar Demonstração
                  </Button>
                </div>
              </CardContent>
            </Card>
            ))
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Não Encontrou o que Precisa?
          </h3>
          <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
            Nossa equipe pode desenvolver uma solução personalizada para sua prefeitura. 
            Entre em contato via WhatsApp e vamos criar o projeto ideal para sua realidade.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary-600 hover:bg-gray-50"
              onClick={() => window.open('https://wa.me/5585996709412?text=Olá! Gostaria de falar com um especialista sobre soluções educacionais', '_blank')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
