import React from 'react'
import Link from 'next/link'
import { ArrowLeft, FileText, Shield, Users, AlertTriangle, Scale, Clock, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata = {
  title: 'Termos de Uso - Toda Cor',
  description: 'Termos de Uso da Toda Cor - Condições de uso dos serviços',
}

const TermsOfUse = () => {
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
            <h1 className="text-2xl font-bold text-gray-900">Termos de Uso</h1>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          {/* Introdução */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Introdução</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Bem-vindo aos serviços da <strong>Toda Cor</strong>. Estes Termos de Uso regulam o acesso 
                e utilização de nossos serviços, produtos e plataforma digital. Ao utilizar nossos serviços, 
                você concorda com estes termos e condições.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
            </CardContent>
          </Card>

          {/* Identificação e Descrição */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Identificação e Descrição</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1.1 Identificação da Empresa:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Razão Social:</strong> Toda Cor Educação Ltda</li>
                    <li><strong>CNPJ:</strong> [CNPJ da empresa]</li>
                    <li><strong>Endereço:</strong> [Endereço completo da empresa]</li>
                    <li><strong>E-mail:</strong> contato@todacor.com.br</li>
                    <li><strong>Telefone:</strong> (85) 98712-2328</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1.2 Descrição dos Serviços:</h3>
                  <p>
                    A Toda Cor oferece soluções educacionais especializadas para prefeituras, incluindo:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Bibliotecas infantis completas</li>
                    <li>Bibliotecas tecnológicas</li>
                    <li>Bibliotecas mecatrônicas</li>
                    <li>Consultoria educacional</li>
                    <li>Materiais didáticos de qualidade</li>
                    <li>Treinamento e capacitação de educadores</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1.3 Requisitos Mínimos:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Representação oficial de prefeitura ou órgão público</li>
                    <li>Documentação comprobatória da instituição</li>
                    <li>Disponibilidade de espaço físico adequado</li>
                    <li>Compromisso com a manutenção dos equipamentos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regras e Responsabilidades */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Regras e Responsabilidades</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 Responsabilidades do Usuário:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Fornecer informações verdadeiras e atualizadas</li>
                    <li>Utilizar os serviços conforme especificações técnicas</li>
                    <li>Manter a confidencialidade de senhas e acessos</li>
                    <li>Respeitar os direitos de propriedade intelectual</li>
                    <li>Comunicar problemas técnicos prontamente</li>
                    <li>Participar de treinamentos quando necessário</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.2 Responsabilidades da Toda Cor:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Fornecer produtos e serviços conforme especificações</li>
                    <li>Oferecer suporte técnico adequado</li>
                    <li>Garantir qualidade dos materiais fornecidos</li>
                    <li>Manter confidencialidade das informações do cliente</li>
                    <li>Fornecer treinamento e capacitação</li>
                    <li>Honrar prazos de entrega acordados</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.3 Regras de Conduta:</h3>
                  <p className="text-gray-600 mb-3">É expressamente proibido:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Utilizar os serviços para atividades ilegais</li>
                    <li>Tentar acessar sistemas sem autorização</li>
                    <li>Reproduzir ou distribuir materiais sem autorização</li>
                    <li>Interferir no funcionamento dos serviços</li>
                    <li>Fornecer informações falsas ou enganosas</li>
                    <li>Utilizar os serviços para fins comerciais não autorizados</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Processo de Compra */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Processo de Compra e Contratação</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3.1 Processo de Contratação:</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Solicitação de proposta através de nossos canais</li>
                    <li>Análise das necessidades e elaboração de proposta</li>
                    <li>Apresentação da proposta detalhada</li>
                    <li>Negociação e ajustes conforme necessário</li>
                    <li>Assinatura do contrato</li>
                    <li>Planejamento e execução do projeto</li>
                    <li>Entrega e instalação dos equipamentos</li>
                    <li>Treinamento e capacitação</li>
                    <li>Acompanhamento e suporte pós-entrega</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3.2 Condições Comerciais:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Preços válidos conforme proposta apresentada</li>
                    <li>Condições de pagamento conforme contrato</li>
                    <li>Prazos de entrega conforme cronograma acordado</li>
                    <li>Garantia conforme especificações técnicas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Direitos e Proteções */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">4. Direitos e Proteções</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4.1 Direitos Autorais:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Todos os materiais desenvolvidos pela Toda Cor são de nossa propriedade</li>
                    <li>O cliente adquire direito de uso conforme contrato</li>
                    <li>É proibida a reprodução não autorizada de materiais</li>
                    <li>Materiais de terceiros respeitam direitos autorais</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4.2 Limites de Responsabilidade:</h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <span className="font-semibold text-yellow-800">Importante</span>
                    </div>
                    <p className="text-yellow-700 text-sm">
                      A Toda Cor não se responsabiliza por danos decorrentes de uso inadequado, 
                      modificações não autorizadas ou força maior.
                    </p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Danos causados por uso inadequado dos equipamentos</li>
                    <li>Modificações não autorizadas nos sistemas</li>
                    <li>Eventos de força maior (desastres naturais, etc.)</li>
                    <li>Falhas decorrentes de terceiros</li>
                    <li>Danos indiretos ou lucros cessantes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4.3 Garantias:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Garantia de 12 meses para equipamentos</li>
                    <li>Garantia de qualidade dos materiais</li>
                    <li>Suporte técnico durante período de garantia</li>
                    <li>Substituição de peças defeituosas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Encerramento e Rescisão */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">5. Encerramento e Rescisão</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5.1 Condições para Rescisão:</h3>
                  <p className="text-gray-600 mb-3">O contrato pode ser rescindido nas seguintes situações:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Descumprimento de obrigações contratuais</li>
                    <li>Uso inadequado dos serviços</li>
                    <li>Atividades que violem estes termos</li>
                    <li>Mutuo acordo entre as partes</li>
                    <li>Impossibilidade de cumprimento do objeto</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5.2 Procedimentos de Rescisão:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Comunicação formal da rescisão</li>
                    <li>Prazo de 30 dias para regularização</li>
                    <li>Devolução de materiais conforme contrato</li>
                    <li>Quitação de obrigações financeiras</li>
                    <li>Encerramento formal do contrato</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5.3 Efeitos da Rescisão:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Cessão imediata do uso dos serviços</li>
                    <li>Devolução de materiais e equipamentos</li>
                    <li>Manutenção de obrigações já cumpridas</li>
                    <li>Preservação de direitos adquiridos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Outros Elementos Importantes */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Outros Elementos Importantes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.1 Glossário de Termos:</h3>
                  <div className="space-y-3 text-gray-600">
                    <div>
                      <strong>Serviços:</strong> Conjunto de soluções educacionais oferecidas pela Toda Cor
                    </div>
                    <div>
                      <strong>Usuário:</strong> Pessoa física ou jurídica que utiliza nossos serviços
                    </div>
                    <div>
                      <strong>Plataforma:</strong> Site, aplicações e sistemas digitais da Toda Cor
                    </div>
                    <div>
                      <strong>Materiais:</strong> Conteúdo educacional, equipamentos e recursos fornecidos
                    </div>
                    <div>
                      <strong>Contrato:</strong> Acordo formal estabelecido entre as partes
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.2 Aceite dos Termos:</h3>
                  <p className="text-gray-600 mb-3">
                    O uso de nossos serviços implica na aceitação integral destes Termos de Uso. 
                    Caso não concorde com qualquer disposição, não utilize nossos serviços.
                  </p>
                  <p className="text-gray-600">
                    O aceite pode ser feito através de:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Assinatura de contrato</li>
                    <li>Utilização dos serviços</li>
                    <li>Cadastro em nossa plataforma</li>
                    <li>Contratação de produtos</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.3 Foro e Legislação:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Estes termos são regidos pela legislação brasileira</li>
                    <li>Foro competente: Comarca de Fortaleza/CE</li>
                    <li>Disputas serão resolvidas preferencialmente por mediação</li>
                    <li>Cláusulas inválidas não afetam o restante do documento</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alterações nos Termos */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Alterações nos Termos</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  A Toda Cor reserva-se o direito de alterar estes Termos de Uso a qualquer momento. 
                  As alterações serão comunicadas através de:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>E-mail enviado aos usuários cadastrados</li>
                  <li>Aviso em destaque em nosso site</li>
                  <li>Notificação durante o uso dos serviços</li>
                </ul>
                <p className="mt-4">
                  <strong>Importante:</strong> O uso continuado dos serviços após as alterações 
                  constitui aceitação dos novos termos.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">8. Contato</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Para questões relacionadas a estes Termos de Uso ou nossos serviços, 
                  entre em contato conosco:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>E-mail:</strong> contato@todacor.com.br</p>
                  <p><strong>Telefone:</strong> (85) 98712-2328</p>
                  <p><strong>WhatsApp:</strong> (85) 98712-2328</p>
                  <p><strong>Endereço:</strong> [Endereço completo da empresa]</p>
                  <p><strong>Horário de atendimento:</strong> Segunda a sexta, das 8h às 18h</p>
                </div>
                <p className="mt-4">
                  <strong>Procon:</strong> Para questões relacionadas ao Código de Defesa do Consumidor, 
                  você pode contatar o Procon através do site 
                  <a href="https://www.procon.ce.gov.br" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                    www.procon.ce.gov.br
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

export default TermsOfUse
