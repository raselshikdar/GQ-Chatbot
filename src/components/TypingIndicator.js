export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 p-4 max-w-3xl mx-auto text-gray-400">
      <div className="flex space-x-1.5">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
      </div>
      <span className="text-sm">Generating response...</span>
    </div>
  )
}
