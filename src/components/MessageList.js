import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MessageList({ messages }) {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[90%] rounded-lg p-4 ${
              msg.role === 'user'
                ? 'bg-chatgpt-light-gray text-white'
                : 'bg-chatgpt-gray text-gray-100'
            }`}
          >
            <Markdown
              remarkPlugins={[remarkGfm]}
              className="prose prose-invert prose-sm"
            >
              {msg.content}
            </Markdown>
          </div>
        </div>
      ))}
    </div>
  )
}
