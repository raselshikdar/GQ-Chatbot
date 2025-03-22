import { useState, useEffect } from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import TypingIndicator from './TypingIndicator'
import { saveConversation, loadConversation } from '../utils/storage'

export default function ChatWindow() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Load conversation history from local storage
  useEffect(() => {
    const savedMessages = loadConversation()
    if (savedMessages) setMessages(savedMessages)
  }, [])

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
    <div className="flex flex-col h-screen bg-[#343541]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#343541] border-b border-[#565869]">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <h1 className="text-lg font-semibold text-[#ECECF1] text-center">
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
            <div className="p-3 bg-[#FEE2E2] text-[#B91C1C] rounded-lg flex items-center justify-between">
              <span>{error}</span>
              <button
                onClick={() => setError(null)}
                className="text-[#B91C1C] hover:text-[#991B1B]"
              >
                ×
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Input Section */}
      <div className="sticky bottom-0 bg-gradient-to-b from-transparent via-[#343541]/90 to-[#343541]">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="bg-[#40414F] rounded-xl shadow-lg">
            <MessageInput onSend={sendMessage} isLoading={isLoading} />
          </div>
          <p className="text-center text-xs text-[#ACACBE] mt-3">
            AI may sometimes provide inaccurate information
          </p>
        </div>
      </div>
    </div>
  )
}
