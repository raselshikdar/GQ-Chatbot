import { useState, useEffect } from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import TypingIndicator from './TypingIndicator'
import { saveConversation, loadConversation } from '../utils/storage'

export default function ChatWindow() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Initialize with empty array if no messages
  useEffect(() => {
    const saved = loadConversation() || []
    setMessages(saved)
  }, [])

  return (
    <div className="flex flex-col h-screen bg-[#343541]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#343541] border-b border-[#40414F]">
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-lg font-semibold text-gray-200 text-center">
            AI Chat Assistant
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-4">
          <MessageList messages={messages} />
          
          {/* Loading State */}
          {isLoading && (
            <div className="p-4">
              <TypingIndicator />
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="p-4 mb-4 text-red-400 bg-red-900/20 rounded-lg">
              {error}
              <button 
                onClick={() => setError(null)}
                className="ml-3 text-gray-300 hover:text-white"
              >
                ×
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Input Area */}
      <div className="sticky bottom-0 bg-gradient-to-b from-transparent to-[#343541]/80">
        <div className="max-w-3xl mx-auto p-4 pt-6">
          <MessageInput onSend={() => {}} isLoading={false} />
          <p className="text-xs text-center text-gray-400 mt-3">
            AI may produce inaccurate information
          </p>
        </div>
      </div>
    </div>
  )
}
