# 🔒 Configuração RLS (Row Level Security) - Supabase

## 📋 Instruções para Ativar RLS

### 1. **Acessar o Supabase Dashboard**
1. Vá para [supabase.com](https://supabase.com)
2. Faça login na sua conta
3. Selecione o projeto "Toda Cor"

### 2. **Executar as Migrações SQL**
1. No dashboard, vá para **SQL Editor**
2. Clique em **New Query**
3. Copie todo o conteúdo do arquivo `supabase-rls-setup.sql`
4. Cole no editor SQL
5. Clique em **Run** para executar

### 3. **Verificar se RLS foi Ativado**
Execute esta query para verificar:
```sql
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename IN ('bibliotecas', 'pedidos', 'usuarios_admin');
```

**Resultado esperado**: Todas as tabelas devem mostrar `rowsecurity = true`

### 4. **Verificar Políticas Criadas**
Execute esta query para listar as políticas:
```sql
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('bibliotecas', 'pedidos', 'usuarios_admin');
```

## 🔐 Políticas de Segurança Configuradas

### **Tabela `bibliotecas`**
- ✅ **Leitura pública**: Qualquer um pode ler bibliotecas ativas
- ✅ **CRUD admin**: Apenas administradores podem criar/editar/deletar

### **Tabela `pedidos`**
- ✅ **Criação pública**: Qualquer um pode criar pedidos (formulário de contato)
- ✅ **CRUD admin**: Apenas administradores podem gerenciar pedidos

### **Tabela `usuarios_admin`**
- ✅ **CRUD admin**: Apenas administradores podem gerenciar usuários

## 🛡️ Benefícios do RLS

### **Segurança**
- Proteção automática contra acesso não autorizado
- Isolamento de dados por usuário/role
- Prevenção de vazamentos de dados

### **Controle de Acesso**
- Bibliotecas públicas visíveis para todos
- Pedidos criados por visitantes
- Área administrativa protegida

### **Conformidade**
- Atende requisitos de segurança
- Auditoria de acessos
- Controle granular de permissões

## 🔧 Configurações Adicionais

### **Para Desenvolvimento**
Se precisar desabilitar RLS temporariamente:
```sql
ALTER TABLE nome_da_tabela DISABLE ROW LEVEL SECURITY;
```

### **Para Produção**
- Mantenha RLS sempre ativo
- Monitore logs de acesso
- Revise políticas regularmente

## ✅ Checklist de Verificação

- [ ] RLS ativado em todas as tabelas
- [ ] Políticas criadas corretamente
- [ ] Site funcionando normalmente
- [ ] Área admin protegida
- [ ] Formulário de contato funcionando
- [ ] Bibliotecas visíveis publicamente

## 🚨 Troubleshooting

### **Erro: "permission denied"**
- Verifique se as políticas estão corretas
- Confirme se o usuário tem as permissões necessárias

### **Erro: "policy does not exist"**
- Execute novamente o script SQL
- Verifique se não há erros de sintaxe

### **Site não carrega dados**
- Verifique se as políticas permitem leitura pública
- Confirme se RLS não está bloqueando consultas legítimas

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do Supabase
2. Teste as políticas individualmente
3. Consulte a documentação oficial do Supabase RLS
