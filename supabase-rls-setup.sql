-- =============================================
-- RLS (Row Level Security) Setup para Toda Cor
-- =============================================

-- 1. ATIVAR RLS NAS TABELAS
-- =============================================

-- Ativar RLS na tabela bibliotecas
ALTER TABLE bibliotecas ENABLE ROW LEVEL SECURITY;

-- Ativar RLS na tabela pedidos  
ALTER TABLE pedidos ENABLE ROW LEVEL SECURITY;

-- Ativar RLS na tabela usuarios_admin
ALTER TABLE usuarios_admin ENABLE ROW LEVEL SECURITY;

-- 2. POLÍTICAS PARA TABELA BIBLIOTECAS
-- =============================================

-- Política para leitura pública das bibliotecas ativas
CREATE POLICY "Bibliotecas públicas podem ser lidas por todos" 
ON bibliotecas FOR SELECT 
USING (ativo = true);

-- Política para administradores (CRUD completo)
CREATE POLICY "Administradores podem gerenciar bibliotecas" 
ON bibliotecas FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM usuarios_admin 
    WHERE usuarios_admin.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND usuarios_admin.ativo = true
  )
);

-- 3. POLÍTICAS PARA TABELA PEDIDOS
-- =============================================

-- Política para inserção de novos pedidos (qualquer um pode criar)
CREATE POLICY "Qualquer um pode criar pedidos" 
ON pedidos FOR INSERT 
WITH CHECK (true);

-- Política para administradores gerenciarem pedidos
CREATE POLICY "Administradores podem gerenciar pedidos" 
ON pedidos FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM usuarios_admin 
    WHERE usuarios_admin.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND usuarios_admin.ativo = true
  )
);

-- 4. POLÍTICAS PARA TABELA USUARIOS_ADMIN
-- =============================================

-- Política para administradores gerenciarem usuários admin
CREATE POLICY "Administradores podem gerenciar usuários admin" 
ON usuarios_admin FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM usuarios_admin 
    WHERE usuarios_admin.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND usuarios_admin.ativo = true
  )
);

-- 5. FUNÇÃO AUXILIAR PARA VERIFICAR ADMIN
-- =============================================

-- Função para verificar se o usuário atual é admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM usuarios_admin 
    WHERE usuarios_admin.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND usuarios_admin.ativo = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. POLÍTICAS ALTERNATIVAS (SE NECESSÁRIO)
-- =============================================

-- Política mais permissiva para bibliotecas (se necessário)
-- CREATE POLICY "Bibliotecas podem ser lidas por todos" 
-- ON bibliotecas FOR SELECT 
-- USING (true);

-- Política para permitir que usuários vejam seus próprios pedidos
-- CREATE POLICY "Usuários podem ver seus próprios pedidos" 
-- ON pedidos FOR SELECT 
-- USING (email = current_setting('request.jwt.claims', true)::json->>'email');

-- 7. VERIFICAÇÕES E TESTES
-- =============================================

-- Verificar se RLS está ativo
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename IN ('bibliotecas', 'pedidos', 'usuarios_admin');

-- Listar políticas criadas
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('bibliotecas', 'pedidos', 'usuarios_admin');

-- 8. COMENTÁRIOS E DOCUMENTAÇÃO
-- =============================================

COMMENT ON POLICY "Bibliotecas públicas podem ser lidas por todos" ON bibliotecas IS 
'Permite que qualquer usuário leia bibliotecas ativas para exibição no site';

COMMENT ON POLICY "Administradores podem gerenciar bibliotecas" ON bibliotecas IS 
'Permite que administradores façam CRUD completo nas bibliotecas';

COMMENT ON POLICY "Qualquer um pode criar pedidos" ON pedidos IS 
'Permite que visitantes do site criem pedidos de demonstração';

COMMENT ON POLICY "Administradores podem gerenciar pedidos" ON pedidos IS 
'Permite que administradores gerenciem todos os pedidos';

COMMENT ON POLICY "Administradores podem gerenciar usuários admin" ON usuarios_admin IS 
'Permite que administradores gerenciem outros usuários administrativos';

COMMENT ON FUNCTION is_admin() IS 
'Função auxiliar para verificar se o usuário atual é administrador';
