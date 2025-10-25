# 🔧 Configuração do Supabase - Toda Cor

## ✅ Banco de Dados Criado com Sucesso!

O banco de dados foi configurado e está funcionando perfeitamente. Aqui estão as informações:

### 📊 Tabelas Criadas

1. **bibliotecas** - 3 registros inseridos
2. **pedidos** - Pronta para receber agendamentos
3. **usuarios_admin** - 1 usuário administrativo criado

### 🔑 Configuração das Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# Supabase Configuration - Toda Cor
NEXT_PUBLIC_SUPABASE_URL=https://bqrpykaiyfmcdwpsmlsc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxcnB5a2FpeWZtY2R3cHNtbHNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzNTI2ODgsImV4cCI6MjA3NjkyODY4OH0.z5UFo33GA6XsGfmb5M4M4UZB3qwv9ezhVN0z9BQj37o
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=5585999999999
```

### 📋 Dados de Exemplo Inseridos

#### Bibliotecas Disponíveis:
1. **Biblioteca Infantil Completa** - R$ 15.000
2. **Biblioteca Tecnológica** - R$ 45.000  
3. **Biblioteca Mecatrônica** - R$ 65.000

#### Usuário Administrativo:
- **Email**: admin@todacor.com.br
- **Nome**: Administrador Toda Cor
- **Role**: admin

### 🚀 Próximos Passos

1. **Configurar variáveis de ambiente** no arquivo `.env.local`
2. **Testar conexão** com o banco de dados
3. **Implementar funcionalidades** que usam o Supabase:
   - Formulário de contato (salvar pedidos)
   - Painel administrativo (gerenciar pedidos e bibliotecas)
   - Carregar produtos do banco de dados

### 🔍 Estrutura das Tabelas

#### bibliotecas
- id (UUID)
- nome (VARCHAR)
- descricao (TEXT)
- tipo (infantil, tecnologica, mecatronica)
- faixa_etaria (VARCHAR)
- competencias (TEXT[])
- itens_inclusos (JSONB)
- preco_estimado (DECIMAL)
- imagens (TEXT[])
- videos (TEXT[])
- cases_sucesso (JSONB)
- ativo (BOOLEAN)
- created_at, updated_at (TIMESTAMP)

#### pedidos
- id (UUID)
- nome_completo (VARCHAR)
- email (VARCHAR)
- telefone (VARCHAR)
- cidade (VARCHAR)
- cargo (VARCHAR)
- numero_alunos (INTEGER)
- mensagem (TEXT)
- bibliotecas_selecionadas (JSONB)
- status (pendente, contatado, convertido)
- created_at, updated_at (TIMESTAMP)

#### usuarios_admin
- id (UUID)
- email (VARCHAR, UNIQUE)
- nome (VARCHAR)
- role (VARCHAR)
- ativo (BOOLEAN)
- created_at, updated_at (TIMESTAMP)

### ✅ Status: Pronto para Uso!

O banco de dados está configurado e pronto para ser usado pelo site. Todas as tabelas foram criadas com os dados de exemplo e estão funcionando perfeitamente.
