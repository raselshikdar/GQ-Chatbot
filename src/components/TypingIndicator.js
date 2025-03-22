export default function TypingIndicator() {
  return (
    <div className="flex items-center space-x-2 p-4 max-w-3xl mx-auto">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
      </div>
      <span className="text-gray-400 text-sm">AI is typing...</span>
    </div>
  )
}
