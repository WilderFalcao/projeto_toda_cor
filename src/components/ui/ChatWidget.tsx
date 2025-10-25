'use client'

import React, { useState } from 'react'
import { MessageCircle, X, Send, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/5585987122328?text=${whatsappMessage}`
      window.open(whatsappUrl, '_blank')
      setMessage('')
      setIsOpen(false)
    }
  }

  const quickMessages = [
    'Gostaria de agendar uma demonstração',
    'Preciso de mais informações sobre os produtos',
    'Quero falar sobre um projeto personalizado',
    'Como funciona o processo de implementação?'
  ]

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-6 left-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center shadow-strong hover:shadow-strong transition-all duration-300 hover:scale-110 group"
            aria-label="Abrir chat"
          >
            <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 left-4 right-4 sm:left-6 sm:right-auto z-50 w-full sm:w-80 max-w-[calc(100vw-2rem)]">
          <div className="bg-white rounded-2xl shadow-strong border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-primary-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Toda Cor</h3>
                  <p className="text-sm text-primary-100">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-700">
                    👋 Olá! Como podemos ajudar sua prefeitura a transformar a educação?
                  </p>
                </div>
                
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600 mb-3">
                    Escolha uma opção ou digite sua mensagem:
                  </p>
                  
                  {/* Quick Messages */}
                  <div className="space-y-2">
                    {quickMessages.map((msg, index) => (
                      <button
                        key={index}
                        onClick={() => setMessage(msg)}
                        className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        {msg}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  rows={3}
                />
                
                <div className="flex space-x-2">
                  <Button
                    onClick={handleSendMessage}
                    variant="primary"
                    size="sm"
                    className="flex-1"
                    disabled={!message.trim()}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar
                  </Button>
                  
                  <Button
                    onClick={() => window.open('https://wa.me/5585987122328', '_blank')}
                    variant="whatsapp"
                    size="sm"
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Sua mensagem será enviada via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatWidget
