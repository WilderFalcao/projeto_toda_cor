import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, Users, Globe, Clock, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata = {
  title: 'Política de Privacidade - Toda Cor',
  description: 'Política de Privacidade da Toda Cor em conformidade com a LGPD',
}

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Voltar ao site
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-2xl font-bold text-gray-900">Política de Privacidade</h1>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          {/* Introdução */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Introdução</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A <strong>Toda Cor</strong> está comprometida com a proteção da privacidade e dos dados pessoais 
                de nossos usuários, clientes e visitantes. Esta Política de Privacidade descreve como coletamos, 
                utilizamos, armazenamos e protegemos suas informações pessoais, em conformidade com a 
                <strong> Lei Geral de Proteção de Dados (LGPD)</strong> - Lei nº 13.709/2018.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
            </CardContent>
          </Card>

          {/* Identificação do Controlador */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Identificação do Controlador</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Razão Social:</strong> Toda Cor Educação Ltda
                </p>
                <p>
                  <strong>CNPJ:</strong> [CNPJ da empresa]
                </p>
                <p>
                  <strong>Endereço:</strong> [Endereço completo da empresa]
                </p>
                <p>
                  <strong>E-mail:</strong> contato@todacor.com.br
                </p>
                <p>
                  <strong>Telefone:</strong> (85) 99670-9412
                </p>
                <p>
                  <strong>Encarregado de Dados (DPO):</strong> [Nome do DPO]
                </p>
                <p>
                  <strong>E-mail do DPO:</strong> dpo@todacor.com.br
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Tipos de Dados Coletados */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">2. Tipos de Dados Coletados</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 Dados fornecidos diretamente pelo usuário:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Nome completo</li>
                    <li>E-mail</li>
                    <li>Telefone</li>
                    <li>Cargo/função</li>
                    <li>Nome da prefeitura/município</li>
                    <li>Informações sobre projetos educacionais</li>
                    <li>Mensagens e comunicações</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.2 Dados coletados automaticamente:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Endereço IP</li>
                    <li>Informações do navegador</li>
                    <li>Dados de navegação (cookies)</li>
                    <li>Data e hora de acesso</li>
                    <li>Páginas visitadas</li>
                    <li>Tempo de permanência no site</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Finalidade do Tratamento */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalidade do Tratamento</h2>
              <div className="space-y-4 text-gray-600">
                <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Prestação de serviços:</strong> Fornecimento de soluções educacionais e consultoria</li>
                  <li><strong>Comunicação:</strong> Responder a solicitações e manter contato</li>
                  <li><strong>Marketing:</strong> Envio de informações sobre produtos e serviços (com consentimento)</li>
                  <li><strong>Melhoria do site:</strong> Análise de uso e otimização da experiência do usuário</li>
                  <li><strong>Segurança:</strong> Proteção contra fraudes e atividades maliciosas</li>
                  <li><strong>Obrigações legais:</strong> Cumprimento de obrigações legais e regulamentares</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Bases Legais */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Bases Legais para o Tratamento</h2>
              <div className="space-y-4 text-gray-600">
                <p>O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses legais:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Consentimento:</strong> Para envio de comunicações de marketing</li>
                  <li><strong>Execução de contrato:</strong> Para prestação de serviços contratados</li>
                  <li><strong>Interesse legítimo:</strong> Para melhorias no site e análise de uso</li>
                  <li><strong>Obrigação legal:</strong> Para cumprimento de obrigações legais</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Compartilhamento de Dados */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Compartilhamento de Dados</h2>
              <div className="space-y-4 text-gray-600">
                <p>Seus dados pessoais podem ser compartilhados com:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Prestadores de serviços:</strong> Empresas que nos auxiliam na prestação de serviços</li>
                  <li><strong>Autoridades competentes:</strong> Quando exigido por lei ou ordem judicial</li>
                  <li><strong>Parceiros comerciais:</strong> Apenas com seu consentimento expresso</li>
                </ul>
                <p className="mt-4">
                  <strong>Importante:</strong> Não vendemos, alugamos ou comercializamos seus dados pessoais 
                  para terceiros sem seu consentimento expresso.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Transferência Internacional */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">6. Transferência Internacional de Dados</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Atualmente, não realizamos transferência internacional de dados pessoais. 
                  Caso isso ocorra no futuro, garantiremos que os países de destino ofereçam 
                  nível adequado de proteção de dados ou que sejam implementadas salvaguardas 
                  apropriadas conforme exigido pela LGPD.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Período de Retenção */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">7. Período de Retenção</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>Mantemos seus dados pessoais pelo tempo necessário para:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cumprir as finalidades para as quais foram coletados</li>
                  <li>Atender obrigações legais e regulamentares</li>
                  <li>Resolver disputas e fazer cumprir acordos</li>
                </ul>
                <p className="mt-4">
                  <strong>Prazo geral:</strong> 5 anos após o último contato ou término do relacionamento comercial.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Segurança dos Dados */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">8. Segurança dos Dados</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>Implementamos medidas técnicas e organizacionais para proteger seus dados:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Criptografia de dados sensíveis</li>
                  <li>Controle de acesso restrito</li>
                  <li>Monitoramento de segurança</li>
                  <li>Backup regular dos dados</li>
                  <li>Treinamento da equipe em proteção de dados</li>
                  <li>Auditorias regulares de segurança</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Direitos dos Titulares */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Direitos dos Titulares</h2>
              <div className="space-y-4 text-gray-600">
                <p>Você tem os seguintes direitos em relação aos seus dados pessoais:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
                  <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li><strong>Anonimização, bloqueio ou eliminação:</strong> Solicitar a eliminação de dados desnecessários</li>
                  <li><strong>Portabilidade:</strong> Solicitar a portabilidade dos dados</li>
                  <li><strong>Eliminação:</strong> Solicitar a eliminação dos dados tratados com consentimento</li>
                  <li><strong>Informações sobre compartilhamento:</strong> Obter informações sobre compartilhamento com terceiros</li>
                  <li><strong>Revogação do consentimento:</strong> Revogar o consentimento a qualquer momento</li>
                </ul>
                <p className="mt-4">
                  <strong>Como exercer seus direitos:</strong> Entre em contato conosco através do e-mail 
                  <strong> dpo@todacor.com.br</strong> ou pelo telefone <strong>(85) 98712-2328</strong>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies e Tecnologias Similares</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Utilizamos cookies para melhorar sua experiência em nosso site. 
                  Os cookies são pequenos arquivos de texto armazenados em seu dispositivo.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tipos de cookies utilizados:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Cookies essenciais:</strong> Necessários para o funcionamento básico do site</li>
                    <li><strong>Cookies de análise:</strong> Para entender como você usa nosso site</li>
                    <li><strong>Cookies de funcionalidade:</strong> Para lembrar suas preferências</li>
                  </ul>
                </div>
                <p className="mt-4">
                  Você pode gerenciar ou desabilitar cookies através das configurações do seu navegador.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Alterações na Política */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Alterações nesta Política</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Esta Política de Privacidade pode ser atualizada periodicamente. 
                  Quando houver alterações significativas, notificaremos você através de:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>E-mail enviado para o endereço cadastrado</li>
                  <li>Aviso em destaque em nosso site</li>
                  <li>Notificação durante o uso de nossos serviços</li>
                </ul>
                <p className="mt-4">
                  Recomendamos que você revise esta política periodicamente para se manter informado 
                  sobre como protegemos seus dados.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">12. Contato</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Para questões relacionadas a esta Política de Privacidade ou para exercer seus direitos, 
                  entre em contato conosco:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>E-mail:</strong> dpo@todacor.com.br</p>
                  <p><strong>Telefone:</strong> (85) 99670-9412</p>
                  <p><strong>Endereço:</strong> [Endereço completo da empresa]</p>
                  <p><strong>Horário de atendimento:</strong> Segunda a sexta, das 8h às 18h</p>
                </div>
                <p className="mt-4">
                  <strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong><br />
                  Caso não esteja satisfeito com nossa resposta, você pode contatar a ANPD através do site 
                  <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                    www.gov.br/anpd
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
