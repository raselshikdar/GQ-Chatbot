import { useState } from 'react'

export default function MessageInput({ onSend, isLoading }) {
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim() || isLoading) return
    onSend(input)
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="relative">
      <textarea
        className="w-full p-3 pr-16 bg-background border border-border rounded-lg
          text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary
          resize-none scrollbar-thin"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
        disabled={isLoading}
      />
      <button
        onClick={handleSend}
        disabled={isLoading}
        className="absolute right-3 bottom-3 p-2 rounded-lg bg-primary text-white hover:bg-primary-hover
          disabled:opacity-50 disabled:hover:bg-primary transition-colors"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M22 2L11 13"></path>
          <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
        </svg>
      </button>
    </div>
  )
}
