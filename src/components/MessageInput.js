// src/components/MessageInput.js
import { useState } from 'react'

export default function MessageInput({ onSend, isLoading }) {
  const [input, setInput] = useState('') // Initialize input state

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
    <div className="absolute bottom-0 left-0 w-full border-t border-border-light bg-secondary-dark">
      <div className="max-w-3xl mx-auto pt-2 pb-4 px-4">
        <div className="flex items-end gap-2 relative">
          <textarea
            className="w-full resize-none bg-secondary-dark border border-border-light rounded-xl 
              py-3.5 pl-5 pr-14 text-gray-100 placeholder-gray-400 focus:outline-none 
              focus:border-primary max-h-64 overflow-y-auto"
            placeholder="Send a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-3 bottom-3.5 p-1 rounded-md hover:bg-secondary 
              disabled:hover:bg-transparent disabled:opacity-40"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-primary"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 2L11 13"></path>
              <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
          </button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">
          AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  )
}
