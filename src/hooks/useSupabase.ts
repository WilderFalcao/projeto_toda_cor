'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Tables, TablesInsert, TablesUpdate } from '@/types/database.types'

// Tipos para as tabelas
export type Biblioteca = Tables<'bibliotecas'>
export type Pedido = Tables<'pedidos'>
export type UsuarioAdmin = Tables<'usuarios_admin'>

export type BibliotecaInsert = TablesInsert<'bibliotecas'>
export type PedidoInsert = TablesInsert<'pedidos'>
export type UsuarioAdminInsert = TablesInsert<'usuarios_admin'>

export type BibliotecaUpdate = TablesUpdate<'bibliotecas'>
export type PedidoUpdate = TablesUpdate<'pedidos'>
export type UsuarioAdminUpdate = TablesUpdate<'usuarios_admin'>

// Hook para gerenciar bibliotecas
export function useBibliotecas() {
  const [bibliotecas, setBibliotecas] = useState<Biblioteca[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchBibliotecas = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('bibliotecas')
        .select('*')
        .eq('ativo', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      setBibliotecas(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar bibliotecas')
    } finally {
      setLoading(false)
    }
  }

  const createBiblioteca = async (biblioteca: BibliotecaInsert) => {
    try {
      const { data, error } = await supabase
        .from('bibliotecas')
        .insert(biblioteca)
        .select()
        .single()

      if (error) throw error
      setBibliotecas(prev => [data, ...prev])
      return data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar biblioteca')
      throw err
    }
  }

  const updateBiblioteca = async (id: string, updates: BibliotecaUpdate) => {
    try {
      const { data, error } = await supabase
        .from('bibliotecas')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      setBibliotecas(prev => prev.map(b => b.id === id ? data : b))
      return data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao atualizar biblioteca')
      throw err
    }
  }

  const deleteBiblioteca = async (id: string) => {
    try {
      const { error } = await supabase
        .from('bibliotecas')
        .delete()
        .eq('id', id)

      if (error) throw error
      setBibliotecas(prev => prev.filter(b => b.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao deletar biblioteca')
      throw err
    }
  }

  useEffect(() => {
    fetchBibliotecas()
  }, [])

  return {
    bibliotecas,
    loading,
    error,
    fetchBibliotecas,
    createBiblioteca,
    updateBiblioteca,
    deleteBiblioteca
  }
}

// Hook para gerenciar pedidos
export function usePedidos() {
  const [pedidos, setPedidos] = useState<Pedido[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPedidos = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('pedidos')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setPedidos(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar pedidos')
    } finally {
      setLoading(false)
    }
  }

  const createPedido = async (pedido: PedidoInsert) => {
    try {
      const { data, error } = await supabase
        .from('pedidos')
        .insert(pedido)
        .select()
        .single()

      if (error) throw error
      setPedidos(prev => [data, ...prev])
      return data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar pedido')
      throw err
    }
  }

  const updatePedido = async (id: string, updates: PedidoUpdate) => {
    try {
      const { data, error } = await supabase
        .from('pedidos')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      setPedidos(prev => prev.map(p => p.id === id ? data : p))
      return data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao atualizar pedido')
      throw err
    }
  }

  useEffect(() => {
    fetchPedidos()
  }, [])

  return {
    pedidos,
    loading,
    error,
    fetchPedidos,
    createPedido,
    updatePedido
  }
}

// Hook para autenticação administrativa
// Hook para autenticação administrativa
export function useAuth() {
  const [user, setUser] = useState<UsuarioAdmin | null>(null)
  const [loading, setLoading] = useState(true)

  const login = async (email: string, password: string) => {
    try {
      console.log('=== TENTANDO LOGIN ===')
      console.log('Email:', email)
      console.log('Password length:', password.length)
      
      // 1. Fazer login com Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      console.log('Auth Data:', authData)
      console.log('Auth Error:', authError)

      if (authError) {
        console.error('Erro de autenticação:', authError)
        throw authError
      }

      // 2. Buscar dados do admin na tabela usuarios_admin
      const { data: adminData, error: adminError } = await supabase
        .from('usuarios_admin')
        .select('*')
        .eq('email', email)
        .eq('ativo', true)
        .single()

      console.log('Admin Data:', adminData)
      console.log('Admin Error:', adminError)

      if (adminError) {
        console.error('Erro ao buscar admin:', adminError)
        throw adminError
      }
      
      setUser(adminData)
      console.log('Login bem-sucedido!')
      return adminData
    } catch (err) {
      console.error('Erro capturado no catch:', err)
      throw new Error('Email ou senha inválidos')
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  useEffect(() => {
    // Verificar sessão existente
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.email) {
        supabase
          .from('usuarios_admin')
          .select('*')
          .eq('email', session.user.email)
          .eq('ativo', true)
          .single()
          .then(({ data }) => {
            if (data) setUser(data)
          })
      }
      setLoading(false)
    })

    // Escutar mudanças na autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user?.email) {
        supabase
          .from('usuarios_admin')
          .select('*')
          .eq('email', session.user.email)
          .eq('ativo', true)
          .single()
          .then(({ data }) => {
            if (data) setUser(data)
          })
      } else {
        setUser(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return {
    user,
    loading,
    login,
    logout
  }
}