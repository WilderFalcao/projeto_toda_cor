# Toda Cor - MVP Plataforma Educacional

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

> **Transformando a Educação nas Prefeituras do Ceará** através de materiais educacionais de qualidade e soluções especializadas para o desenvolvimento educacional municipal.

## Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Objetivos do MVP](#-objetivos-do-mvp)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Arquitetura Técnica](#-arquitetura-técnica)
- [Design e Interface](#-design-e-interface)
- [Modelo de Dados](#-modelo-de-dados)
- [Personas e Stakeholders](#-personas-e-stakeholders)
- [Fluxo de Conversão](#-fluxo-de-conversão)
- [Requisitos Não-Funcionais](#-requisitos-não-funcionais)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Roadmap Futuro](#-roadmap-futuro)
- [Contribuição](#-contribuição)
- [Contato](#-contato)

## Sobre o Projeto

### Problema Principal
As prefeituras enfrentam dificuldades significativas para adquirir materiais educacionais tecnológicos e de robótica, incluindo:
- Dificuldade de encontrar fornecedores especializados
- Propostas complexas e pouco claras
- Falta de clareza sobre o que comprar para atender às necessidades pedagógicas
- Dificuldade de viabilizar melhor a verba para implementação dos projetos

### Proposta de Valor
A **Toda Cor** oferece uma solução completa que vai além de produtos:

- **Produtos Especializados**: Kits educacionais pré-definidos e testados
- **Implementação Completa**: Suporte técnico e logístico
- **Assessoria Pedagógica**: Acompanhamento especializado nos projetos
- **Formação Continuada**: Treinamento para professores e coordenadores
- **Cases de Sucesso**: Comprovação de resultados em outras prefeituras

### Diferenciais Competitivos
1. **Soluções Integradas**: Não vendemos apenas produtos, oferecemos serviços completos
2. **Especialização Regional**: Foco nas necessidades específicas do Ceará
3. **Suporte Pedagógico**: Acompanhamento contínuo na implementação
4. **Formação de Educadores**: Capacitação para sustentabilidade dos projetos

## Objetivos do MVP

### Meta Principal
**Gerar leads qualificados** através de pedidos de agendamento de demonstração

### KPIs Esperados
- Taxa de conversão de visitantes em leads
- Número de agendamentos por mês
- Qualificação dos leads (cargo, número de alunos)
- Engajamento com o catálogo de produtos

### Público-Alvo
- **Primário**: Coordenadores Pedagógicos e Professores
- **Secundário**: Secretários de Educação e Prefeitos

## Funcionalidades Principais

### 4.1. Landing Page (Pública)

#### Hero Section
- **Headline**: "Transformando a Educação nas Prefeituras do Ceará"
- **Subheadline**: Descrição dos serviços e soluções oferecidas
- **CTAs**: "Solicitar Orçamento" e "Ver Produtos"
- **Background**: Imagem de biblioteca moderna com overlay

#### Seção de Serviços
Grid com 6 cards principais:
1. **Materiais Didáticos** - Livros atualizados conforme BNCC
2. **Bibliotecas Completas** - Implementação com acervo diversificado
3. **Consultoria Educacional** - Assessoria para gestores
4. **Tecnologia Educacional** - Equipamentos e recursos digitais
5. **Logística Especializada** - Entrega e instalação
6. **Garantia e Suporte** - Acompanhamento contínuo

#### Seção de Produtos
- **Biblioteca Infantil**: Acervo completo para crianças
- **Biblioteca Tecnológica**: Equipamentos tecnológicos
- **Biblioteca Mecatrônica**: Robótica e engenharia

### 4.2. Catálogo de Bibliotecas (Produtos)

#### Kits Pré-definidos
- **Tamanho único** por tipo de biblioteca
- **Informações detalhadas** para cada produto:
  - Nome e descrição completa
  - Fotos e vídeos demonstrativos
  - Lista de itens inclusos com quantidades
  - Faixa etária recomendada
  - Competências desenvolvidas (alinhamento BNCC)
  - Cases de sucesso de outras prefeituras

#### Filtros Disponíveis
- Por faixa etária
- Por área de conhecimento (robótica, tecnologia, etc.)

#### CTAs por Produto
- "Consultar Valores"
- "WhatsApp" (contato direto)
- "Solicitar Catálogo Completo"

### 4.3. Sistema de Agendamento

#### CTA Principal
**"Agendar Demonstração"** (não "Solicitar Orçamento")

#### Formulário de Captura
Campos obrigatórios:
- Nome completo
- E-mail para contato
- Telefone
- Nome da cidade/prefeitura
- Cargo
- Número de alunos a serem atendidos
- Mensagem (opcional)

#### Carrinho de Orçamento
- Usuário pode adicionar múltiplos kits antes de enviar
- Visualização resumida dos produtos selecionados
- Cálculo estimado de investimento

### 4.4. Painel Administrativo

#### Autenticação
- Login exclusivo para administradores
- Controle de acesso baseado em roles

#### Dashboard
Métricas principais:
- Número total de pedidos/agendamentos
- Número de bibliotecas cadastradas
- Leads por período
- Conversão por fonte

#### Gestão de Bibliotecas (CRUD)
- Adicionar nova biblioteca
- Editar biblioteca existente
- Excluir biblioteca
- Upload de imagens/vídeos
- Gerenciamento de conteúdo

#### Gestão de Pedidos
- Visualizar todos os agendamentos
- Filtrar por status, data, cidade
- Exportar dados para análise
- Detalhes completos de cada lead
- Histórico de interações

### 4.5. Páginas Essenciais

- **Início**: Landing page completa
- **Sobre Nós**: História e missão da Toda Cor
- **Como Funciona**: Processo de aquisição para prefeituras
- **Contato**: Formulário + informações (endereço, telefone, email, horário)
- **Login**: Acesso ao painel administrativo

## Arquitetura Técnica

### Stack Principal
- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS + Headless UI
- **Backend**: Next.js API Routes + Node.js
- **Banco de Dados**: Supabase (PostgreSQL)
- **Autenticação**: Supabase Auth
- **Hospedagem**: Vercel
- **Armazenamento**: Supabase Storage (imagens/vídeos)
- **Deploy**: Vercel (CI/CD automático)

### Dependências Principais
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "typescript": "^5.0.0",
    "@supabase/supabase-js": "^2.0.0",
    "@supabase/auth-helpers-nextjs": "^0.8.0",
    "tailwindcss": "^3.3.0",
    "@headlessui/react": "^1.7.0",
    "@heroicons/react": "^2.0.0",
    "react-hook-form": "^7.45.0",
    "zod": "^3.22.0"
  }
}
```

## Design e Interface

### Identidade Visual

#### Logo
- **"Toda Cor"** em azul estilo handwriting/script
- Fonte personalizada para destaque

#### Paleta de Cores
- **Azul Primário**: `#2563EB` (botões principais, links)
- **Amarelo Destaque**: `#FCD34D` (headlines importantes)
- **Verde WhatsApp**: `#25D366` (CTAs de contato)
- **Backgrounds**: 
  - Branco: `#FFFFFF`
  - Cinza claro: `#F8F9FA`
  - Azul claro: `#E0F2FE`
- **Footer**: Dark `#1A202C`

#### Tipografia
- **Títulos**: Bold, sans-serif moderna (Inter/Poppins)
- **Corpo**: Regular, alta legibilidade
- **Hierarquia**: H1 grande, subtítulos médios, corpo padrão

### Componentes Principais

#### Header
- Fixo no topo, fundo branco
- Navegação horizontal: Início, Serviços, Produtos, Sobre, Contato
- Logo à esquerda, menu à direita

#### Hero Section
- Full-width com imagem de biblioteca
- Overlay azul semi-transparente
- Headline em branco/amarelo
- CTAs centralizados

#### Cards de Serviços
- Ícones coloridos em quadrados arredondados
- Backgrounds pastéis
- Hover effects suaves

#### Cards de Produtos
- Imagens grandes de alta qualidade
- Sombras suaves
- Botões de ação (Consultar, WhatsApp)

#### Formulários
- Inputs limpos com labels claras
- Validação visual em tempo real
- Feedback de erro/sucesso

#### Footer
- Fundo dark com 4 colunas
- Redes sociais em azul
- Informações de contato organizadas

### Padrões de Design
- Cards com sombra suave e border-radius
- Espaçamento generoso entre seções
- Ícones em círculos/quadrados coloridos
- Imagens de alta qualidade (bibliotecas, crianças estudando)
- Layout em grid (3 colunas para produtos/serviços)
- Responsivo mobile-first

## Modelo de Dados

### Principais Entidades

#### Bibliotecas
```sql
CREATE TABLE bibliotecas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  tipo VARCHAR(100) NOT NULL, -- 'infantil', 'tecnologica', 'mecatronica'
  faixa_etaria VARCHAR(50),
  competencias TEXT[], -- Array de competências BNCC
  itens_inclusos JSONB, -- Lista de itens com quantidades
  preco_estimado DECIMAL(10,2),
  imagens TEXT[], -- URLs das imagens
  videos TEXT[], -- URLs dos vídeos
  cases_sucesso JSONB, -- Cases de sucesso
  ativo BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Pedidos/Agendamentos
```sql
CREATE TABLE pedidos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome_completo VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  cidade VARCHAR(255) NOT NULL,
  cargo VARCHAR(255) NOT NULL,
  numero_alunos INTEGER,
  mensagem TEXT,
  bibliotecas_selecionadas JSONB, -- Array de IDs das bibliotecas
  status VARCHAR(50) DEFAULT 'pendente', -- 'pendente', 'contatado', 'convertido'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Usuários Administrativos
```sql
CREATE TABLE usuarios_admin (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  nome VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  ativo BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## Personas e Stakeholders

### Persona Principal: Coordenador Pedagógico
- **Perfil**: Responsável pela implementação de projetos educacionais
- **Necessidades**: 
  - Alinhamento com BNCC
  - Descrição detalhada dos itens
  - Faixa etária clara
  - Vídeos de demonstração
  - Cases de sucesso em outras cidades
- **Comportamento**: Busca informações detalhadas antes de decidir

### Stakeholders Secundários
- **Professores**: Usuários finais dos materiais
- **Secretários de Educação**: Aprovadores de orçamento
- **Prefeitos**: Tomadores de decisão final

## Fluxo de Conversão

### Jornada do Usuário
1. **Descoberta**: Acesso via busca ou indicação
2. **Exploração**: Navegação no catálogo de produtos
3. **Filtragem**: Uso de filtros por necessidade
4. **Avaliação**: Visualização de cases de sucesso
5. **Seleção**: Adição de produtos ao carrinho
6. **Preenchimento**: Formulário de contato
7. **Conversão**: Agendamento de demonstração

### Pontos de Conversão
- Hero section (CTAs principais)
- Cards de produtos (botões de ação)
- Formulário de contato
- Chat widget
- Links WhatsApp

## Requisitos Não-Funcionais

### Segurança
- **LGPD Compliance**: Conformidade total com a Lei Geral de Proteção de Dados
- **Criptografia**: Dados sensíveis criptografados
- **Autenticação**: Sistema seguro de login
- **Backup**: Backup automático dos dados

### Performance
- **Otimização**: Carregamento rápido mesmo em conexões lentas
- **CDN**: Distribuição global de conteúdo
- **Lazy Loading**: Carregamento sob demanda de imagens
- **Compressão**: Otimização de assets

### Usabilidade
- **Navegação Simples**: Interface intuitiva para usuários com pouca habilidade tecnológica
- **Responsivo**: Funcionamento perfeito em todos os dispositivos
- **Acessibilidade**: Conformidade com WCAG 2.1
- **Feedback Visual**: Indicações claras de ações e estados

### Confiabilidade
- **Uptime**: 99.9% de disponibilidade
- **Monitoramento**: Alertas automáticos de problemas
- **Recuperação**: Plano de recuperação de desastres

## Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Conta no Supabase
- Conta no Vercel (para deploy)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/todacor/mvp-plataforma.git
cd mvp-plataforma
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local`:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=5585999999999
```

4. **Configure o banco de dados**
```bash
# Execute as migrações no Supabase
npm run db:migrate
```

5. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm run start

# Linting
npm run lint

# Type checking
npm run type-check

# Testes
npm run test
```

### Deploy

#### Vercel (Recomendado)
1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

#### Outras Plataformas
- Netlify
- Railway
- DigitalOcean App Platform

## Estrutura de Pastas

```
mvp-plataforma/
├── public/                 # Assets estáticos
│   ├── images/            # Imagens do projeto
│   ├── icons/             # Ícones
│   └── favicon.ico        # Favicon
├── src/
│   ├── app/               # App Router (Next.js 13+)
│   │   ├── (auth)/        # Rotas de autenticação
│   │   ├── admin/         # Painel administrativo
│   │   ├── api/           # API Routes
│   │   ├── contato/       # Página de contato
│   │   ├── produtos/      # Catálogo de produtos
│   │   ├── sobre/         # Página sobre nós
│   │   ├── globals.css    # Estilos globais
│   │   ├── layout.tsx     # Layout principal
│   │   └── page.tsx       # Página inicial
│   ├── components/        # Componentes reutilizáveis
│   │   ├── ui/            # Componentes base (botões, inputs)
│   │   ├── forms/         # Formulários
│   │   ├── layout/        # Componentes de layout
│   │   └── sections/      # Seções da página
│   ├── lib/               # Utilitários e configurações
│   │   ├── supabase.ts    # Cliente Supabase
│   │   ├── utils.ts       # Funções utilitárias
│   │   └── validations.ts # Schemas de validação
│   ├── hooks/             # Custom hooks
│   ├── types/             # Definições TypeScript
│   └── styles/            # Estilos adicionais
├── .env.example           # Exemplo de variáveis de ambiente
├── .gitignore
├── next.config.js         # Configuração do Next.js
├── tailwind.config.js     # Configuração do Tailwind
├── tsconfig.json          # Configuração do TypeScript
└── package.json
```

## Roadmap Futuro

### Fase 2 (Pós-MVP)
- **Área de Login para Gestores**: Acompanhamento do status do pedido
- **Sistema de Notificações**: Email/SMS automáticos
- **Relatórios Avançados**: Analytics detalhados
- **Integração CRM**: Conexão com sistemas externos

### Fase 3
- **Personalização de Kits**: Montagem customizada
- **Blog Educativo**: Conteúdo sobre educação
- **Sistema de Avaliações**: Feedback de clientes
- **Marketplace**: Múltiplos fornecedores

### Melhorias Contínuas
- Otimização de performance
- Novos recursos de acessibilidade
- Integração com redes sociais
- Sistema de chat em tempo real

## Contribuição

### Como Contribuir
1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha versão`)
3. Commit suas mudanças (`git commit -m 'Add some minha versão'`)
4. Push para a branch (`git push origin feature/minha versão`)
5. Abra um Pull Request

### Padrões de Código
- Use TypeScript para type safety
- Siga as convenções do ESLint/Prettier
- Escreva testes para novas funcionalidades
- Documente APIs e componentes complexos

### Issues
- Use templates para bugs e features
- Adicione labels apropriadas
- Referencie issues em commits

## Contato

### Toda Cor
- **Website**: [https://todacor.vercel.app/](https://https://todacor.vercel.app/)
- **Email**: contato@todacor.com.br
- **Telefone**: (85) 3000-0000
- **Endereço**: Fortaleza, Ceará, Brasil
- **Horário**: Segunda a Sexta: 8h às 18h

### Redes Sociais
- **Facebook**: [@TodaCorEducacao](https://facebook.com/TodaCorEducacao)
- **Instagram**: [@todacor_educacao](https://instagram.com/todacor_educacao)
- **LinkedIn**: [Toda Cor Educação](https://linkedin.com/company/todacor-educacao)

---

<div align="center">

**Transformando a Educação nas Prefeituras do Ceará** 🎨

[![Powered by Vercel](https://img.shields.io/badge/Powered%20by-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

</div>
