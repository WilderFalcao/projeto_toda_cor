// Tipos globais da aplicação

export interface Biblioteca {
  id: string
  nome: string
  descricao: string | null
  tipo: 'infantil' | 'tecnologica' | 'mecatronica'
  faixa_etaria: string | null
  competencias: string[] | null
  itens_inclusos: ItemIncluso[] | null
  preco_estimado: number | null
  imagens: string[] | null
  videos: string[] | null
  cases_sucesso: CaseSucesso[] | null
  ativo: boolean
  created_at: string
  updated_at: string
}

export interface ItemIncluso {
  nome: string
  quantidade: number
  descricao?: string
}

export interface CaseSucesso {
  titulo: string
  descricao: string
  cidade: string
  ano: number
}

export interface Pedido {
  id: string
  nome_completo: string
  email: string
  telefone: string
  cidade: string
  cargo: string
  numero_alunos: number | null
  mensagem: string | null
  bibliotecas_selecionadas: string[] | null
  status: 'pendente' | 'contatado' | 'convertido'
  created_at: string
  updated_at: string
}

export interface UsuarioAdmin {
  id: string
  email: string
  nome: string
  role: string
  ativo: boolean
  created_at: string
  updated_at: string
}

export interface Servico {
  id: string
  titulo: string
  descricao: string
  icone: string
  cor: string
}

export interface ContatoInfo {
  endereco: string
  telefone: string
  email: string
  horario: string
}

export interface SocialMedia {
  facebook?: string
  instagram?: string
  linkedin?: string
  whatsapp?: string
}

export interface FormularioContato {
  nome_completo: string
  email: string
  telefone: string
  cidade: string
  cargo: string
  numero_alunos?: number
  mensagem?: string
  bibliotecas_selecionadas?: string[]
}

export interface FiltrosProdutos {
  tipo?: 'infantil' | 'tecnologica' | 'mecatronica'
  faixa_etaria?: string
  competencia?: string
  preco_min?: number
  preco_max?: number
}

export interface DashboardStats {
  total_pedidos: number
  pedidos_pendentes: number
  pedidos_contatados: number
  pedidos_convertidos: number
  total_bibliotecas: number
  bibliotecas_ativas: number
  leads_mes_atual: number
  conversao_taxa: number
}

export interface ApiResponse<T> {
  data: T | null
  error: string | null
  success: boolean
}

export interface PaginationParams {
  page: number
  limit: number
  sort?: string
  order?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Tipos para componentes
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export interface InputProps {
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'tel' | 'number' | 'password'
  value?: string
  onChange?: (value: string) => void
  error?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export interface CardProps {
  title?: string
  description?: string
  image?: string
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

// Tipos para navegação
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

// Tipos para SEO
export interface SeoProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
}

// Tipos para analytics
export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

// Tipos para notificações
export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}
