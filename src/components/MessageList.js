export default function MessageList({ messages }) {
  return (
    <div className="max-w-3xl mx-auto pt-8 px-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`group w-full text-gray-100 ${
            msg.role === 'user' ? 'bg-secondary-dark' : 'bg-secondary'
          }`}
        >
          <div className="flex gap-4 p-4 m-auto text-base max-w-3xl">
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center 
              bg-gray-700 text-white font-bold">
              {msg.role === 'user' ? '👤' : '🤖'}
            </div>
            <div className="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
              <div className="prose prose-invert w-full break-words">
                <Markdown remarkPlugins={[remarkGfm]}>
                  {msg.content}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
