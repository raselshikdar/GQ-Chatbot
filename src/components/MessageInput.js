import { useState, useEffect } from 'react'

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
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex items-center gap-2 bg-chatgpt-gray rounded-lg border border-chatgpt-border">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Send a message..."
          className="flex-1 bg-transparent text-white p-4 resize-none outline-none"
          rows={1}
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="p-2 mr-2 rounded-md hover:bg-chatgpt-light-gray disabled:opacity-50"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-chatgpt-green"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 2L11 13"></path>
            <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
