'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useAuth, usePedidos, useBibliotecas } from '@/hooks/useSupabase'
import { 
  Users, 
  BookOpen, 
  MessageSquare, 
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Eye,
  LogOut,
  Loader2
} from 'lucide-react'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [loginError, setLoginError] = useState<string | null>(null)
  
  const { user, login, logout } = useAuth()
  const { pedidos, loading: pedidosLoading, updatePedido } = usePedidos()
  const { bibliotecas, loading: bibliotecasLoading, updateBiblioteca, deleteBiblioteca } = useBibliotecas()

  // Calcular estatísticas
  const stats = {
    totalPedidos: pedidos.length,
    totalBibliotecas: bibliotecas.length,
    leadsMes: pedidos.filter(p => {
      const pedidoDate = new Date(p.created_at || '')
      const now = new Date()
      return pedidoDate.getMonth() === now.getMonth() && pedidoDate.getFullYear() === now.getFullYear()
    }).length,
    conversao: pedidos.length > 0 ? Math.round((pedidos.filter(p => p.status === 'convertido').length / pedidos.length) * 100) : 0
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError(null)
    
    try {
      await login(loginData.email, loginData.password)
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : 'Erro ao fazer login')
    }
  }

  const handleUpdatePedidoStatus = async (id: string, status: 'pendente' | 'contatado' | 'convertido') => {
    try {
      await updatePedido(id, { status })
    } catch (error) {
      console.error('Erro ao atualizar status:', error)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Login Administrativo</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {loginError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-600 text-sm">{loginError}</p>
                </div>
              )}
              
              <Input
                label="Email"
                type="email"
                placeholder="admin@todacor.com.br"
                value={loginData.email}
                onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
              <Input
                label="Senha"
                type="password"
                placeholder="••••••••"
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                required
              />
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full"
              >
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Olá, {user.nome}</span>
              <Button 
                variant="outline" 
                onClick={logout}
                size="sm"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'pedidos', label: 'Pedidos' },
              { id: 'bibliotecas', label: 'Bibliotecas' },
              { id: 'configuracoes', label: 'Configurações' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total de Pedidos</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalPedidos}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Bibliotecas</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalBibliotecas}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Users className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Leads este Mês</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.leadsMes}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Taxa de Conversão</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.conversao}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Pedidos Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pedidos.map((pedido) => (
                    <div key={pedido.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{pedido.nome_completo}</h3>
                        <p className="text-sm text-gray-600">{pedido.cargo} - {pedido.cidade}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          pedido.status === 'pendente' ? 'bg-yellow-100 text-yellow-800' :
                          pedido.status === 'contatado' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {pedido.status}
                        </span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => console.log('Ver detalhes do pedido:', pedido.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Pedidos Tab */}
        {activeTab === 'pedidos' && (
          <Card>
            <CardHeader>
              <CardTitle>Gestão de Pedidos</CardTitle>
            </CardHeader>
            <CardContent>
              {pedidosLoading ? (
                <div className="text-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary-600" />
                  <p className="text-gray-600">Carregando pedidos...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {pedidos.map((pedido) => (
                    <div key={pedido.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{pedido.nome_completo}</h3>
                        <p className="text-sm text-gray-600">{pedido.email}</p>
                        <p className="text-sm text-gray-600">{pedido.cargo} - {pedido.cidade}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(pedido.created_at || '').toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select
                          value={pedido.status || 'pendente'}
                          onChange={(e) => handleUpdatePedidoStatus(pedido.id, e.target.value as any)}
                          className="px-2 py-1 rounded text-xs border"
                        >
                          <option value="pendente">Pendente</option>
                          <option value="contatado">Contatado</option>
                          <option value="convertido">Convertido</option>
                        </select>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => console.log('Ver detalhes do pedido:', pedido.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  {pedidos.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      Nenhum pedido encontrado
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Bibliotecas Tab */}
        {activeTab === 'bibliotecas' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Gestão de Bibliotecas</h2>
              <Button 
                variant="primary"
                onClick={() => console.log('Criar nova biblioteca')}
              >
                <Plus className="h-4 w-4 mr-2" />
                Nova Biblioteca
              </Button>
            </div>
            
            {bibliotecasLoading ? (
              <div className="text-center py-8">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary-600" />
                <p className="text-gray-600">Carregando bibliotecas...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bibliotecas.map((biblioteca) => (
                  <Card key={biblioteca.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{biblioteca.nome}</CardTitle>
                      <p className="text-sm text-gray-600 capitalize">{biblioteca.tipo}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary-600">
                        {biblioteca.preco_estimado ? `R$ ${biblioteca.preco_estimado.toLocaleString('pt-BR')}` : 'Consulte valores'}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">{biblioteca.faixa_etaria}</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          biblioteca.ativo ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {biblioteca.ativo ? 'Ativo' : 'Inativo'}
                        </span>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => console.log('Editar biblioteca:', biblioteca.id)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => deleteBiblioteca(biblioteca.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {bibliotecas.length === 0 && (
                  <div className="col-span-full text-center py-8 text-gray-500">
                    Nenhuma biblioteca encontrada
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Configurações Tab */}
        {activeTab === 'configuracoes' && (
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Informações da Empresa</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Nome da Empresa" defaultValue="Toda Cor" />
                    <Input label="Email de Contato" defaultValue="contato@todacor.com.br" />
                    <Input label="Telefone" defaultValue="(85) 3000-0000" />
                    <Input label="WhatsApp" defaultValue="(85) 99999-9999" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Configurações de Email</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="SMTP Host" />
                    <Input label="SMTP Port" />
                    <Input label="Email de Envio" />
                    <Input label="Senha do Email" type="password" />
                  </div>
                </div>

                <Button 
                  variant="primary"
                  onClick={() => console.log('Salvar configurações')}
                >
                  Salvar Configurações
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
