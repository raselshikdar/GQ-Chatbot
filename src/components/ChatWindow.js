import { useState, useEffect } from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import TypingIndicator from './TypingIndicator'
import { saveConversation, loadConversation } from '../utils/storage'

export default function ChatWindow() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

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

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()
      const botMessage = { role: 'bot', content: data.reply }
      
      setMessages(prev => {
        const updated = [...prev, botMessage]
        saveConversation(updated)
        return updated
      })
    } catch (err) {
      console.error('Chat error:', err)
      setError('Failed to get response. Please try again.')
      setMessages(prev => prev.filter(m => m.role !== 'error'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen bg-chatgpt-dark-gray">
      <div className="flex-1 overflow-y-auto">
        <MessageList messages={messages} />
        {isLoading && <TypingIndicator />}
        {error && (
          <div className="p-4 text-red-500 text-center">
            {error} <button onClick={() => setError(null)} className="ml-2 text-white">×</button>
          </div>
        )}
      </div>
      <div className="border-t border-chatgpt-border">
        <MessageInput onSend={sendMessage} isLoading={isLoading} />
      </div>
    </div>
  )
}
