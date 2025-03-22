import { useState, useEffect, useRef } from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import TypingIndicator from './TypingIndicator'
import { saveConversation, loadConversation } from '../utils/storage'

export default function ChatWindow() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const messagesEndRef = useRef(null) // Ref for the end of the message list

  // Load conversation history
  useEffect(() => {
    const savedMessages = loadConversation()
    if (savedMessages) setMessages(savedMessages)
  }, [])

  // Auto-scroll to the bottom when messages or loading state changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isLoading]) // Trigger on messages or loading state change

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return

    setError(null)
    const userMessage = { role: 'user', content: text }
    const newMessages = [...messages, userMessage]

    try {
      setIsLoading(true)
      setMessages(newMessages)
      saveConversation(newMessages)

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)

      const data = await res.json()
      const botMessage = { role: 'bot', content: data.reply }

      setMessages((prev) => {
        const updated = [...prev, botMessage]
        saveConversation(updated)
        return updated
      })
    } catch (err) {
      console.error('Chat error:', err)
      setError('Failed to get response. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background border-b border-border shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <h1 className="text-lg font-semibold text-text-primary text-center">
            AI Assistant
          </h1>
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 overflow-y-auto scrollbar-thin">
        <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
          {/* Message List */}
          <MessageList messages={messages} />

          {/* Loading Indicator */}
          {isLoading && (
            <div className="pb-6">
              <TypingIndicator />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-error-bg text-error-text rounded-lg flex items-center justify-between">
              <span>{error}</span>
              <button
                onClick={() => setError(null)}
                className="text-error-text hover:text-red-800"
              >
                ×
              </button>
            </div>
          )}

          {/* Empty div for auto-scroll */}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Section */}
      <div className="sticky bottom-0 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="bg-background-secondary rounded-lg shadow-sm">
            <MessageInput onSend={sendMessage} isLoading={isLoading} />
          </div>
          <p className="text-center text-xs text-text-secondary mt-3">
            AI may sometimes provide inaccurate information
          </p>
        </div>
      </div>
    </div>
  )
}
