import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MessageList({ messages = [] }) {
  return (
    <div className="space-y-6">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${
            msg.role === 'user' ? 'bg-background-secondary' : 'bg-background'
          } border border-border`}
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {msg.role === 'user' ? '👤' : '🤖'}
            </div>
            <div className="flex-1 min-w-0 text-text-primary">
              <Markdown remarkPlugins={[remarkGfm]} className="prose">
                {msg.content}
              </Markdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
