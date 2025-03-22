import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MessageList({ messages = [] }) {
  return (
    <div className="space-y-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${
            msg.role === 'user' ? 'bg-[#343541]' : 'bg-[#444654]'
          }`}
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#19C37D]/10 flex items-center justify-center">
              {msg.role === 'user' ? '👤' : '🤖'}
            </div>
            <div className="prose prose-invert max-w-none text-gray-100">
              <Markdown remarkPlugins={[remarkGfm]}>
                {msg.content || ' '} {/* Fallback for empty content */}
              </Markdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
