import { z } from 'zod'

// Schema para formulário de contato/agendamento
export const contactFormSchema = z.object({
  nome_completo: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: z
    .string()
    .email('Email inválido')
    .min(1, 'Email é obrigatório'),
  telefone: z
    .string()
    .min(10, 'Telefone deve ter pelo menos 10 dígitos')
    .max(15, 'Telefone deve ter no máximo 15 caracteres')
    .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Formato de telefone inválido'),
  cidade: z
    .string()
    .min(2, 'Cidade deve ter pelo menos 2 caracteres')
    .max(100, 'Cidade deve ter no máximo 100 caracteres'),
  cargo: z
    .string()
    .min(2, 'Cargo deve ter pelo menos 2 caracteres')
    .max(100, 'Cargo deve ter no máximo 100 caracteres'),
  numero_alunos: z
    .number()
    .min(1, 'Número de alunos deve ser pelo menos 1')
    .max(100000, 'Número de alunos deve ser no máximo 100.000')
    .optional(),
  mensagem: z
    .string()
    .max(500, 'Mensagem deve ter no máximo 500 caracteres')
    .optional(),
  bibliotecas_selecionadas: z
    .array(z.string())
    .optional(),
})

// Schema para login administrativo
export const loginSchema = z.object({
  email: z
    .string()
    .email('Email inválido')
    .min(1, 'Email é obrigatório'),
  password: z
    .string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .max(100, 'Senha deve ter no máximo 100 caracteres'),
})

// Schema para cadastro de biblioteca
export const bibliotecaSchema = z.object({
  nome: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  descricao: z
    .string()
    .min(10, 'Descrição deve ter pelo menos 10 caracteres')
    .max(1000, 'Descrição deve ter no máximo 1000 caracteres'),
  tipo: z.enum(['infantil', 'tecnologica', 'mecatronica'], {
    errorMap: () => ({ message: 'Tipo deve ser infantil, tecnologica ou mecatronica' }),
  }),
  faixa_etaria: z
    .string()
    .min(1, 'Faixa etária é obrigatória')
    .max(50, 'Faixa etária deve ter no máximo 50 caracteres'),
  competencias: z
    .array(z.string())
    .min(1, 'Pelo menos uma competência deve ser selecionada'),
  itens_inclusos: z
    .array(z.object({
      nome: z.string(),
      quantidade: z.number().min(1),
      descricao: z.string().optional(),
    }))
    .min(1, 'Pelo menos um item deve ser incluído'),
  preco_estimado: z
    .number()
    .min(0, 'Preço deve ser positivo')
    .max(1000000, 'Preço deve ser no máximo R$ 1.000.000'),
  imagens: z
    .array(z.string().url())
    .min(1, 'Pelo menos uma imagem é obrigatória')
    .max(10, 'Máximo de 10 imagens'),
  videos: z
    .array(z.string().url())
    .max(5, 'Máximo de 5 vídeos')
    .optional(),
  cases_sucesso: z
    .array(z.object({
      titulo: z.string(),
      descricao: z.string(),
      cidade: z.string(),
      ano: z.number().min(2020).max(new Date().getFullYear()),
    }))
    .optional(),
  ativo: z.boolean().default(true),
})

// Schema para filtros de produtos
export const productFiltersSchema = z.object({
  tipo: z.enum(['infantil', 'tecnologica', 'mecatronica']).optional(),
  faixa_etaria: z.string().optional(),
  competencia: z.string().optional(),
  preco_min: z.number().min(0).optional(),
  preco_max: z.number().min(0).optional(),
})

// Schema para atualização de status de pedido
export const updatePedidoStatusSchema = z.object({
  status: z.enum(['pendente', 'contatado', 'convertido']),
  observacoes: z.string().max(500).optional(),
})

// Tipos derivados dos schemas
export type ContactFormData = z.infer<typeof contactFormSchema>
export type LoginData = z.infer<typeof loginSchema>
export type BibliotecaData = z.infer<typeof bibliotecaSchema>
export type ProductFilters = z.infer<typeof productFiltersSchema>
export type UpdatePedidoStatus = z.infer<typeof updatePedidoStatusSchema>
