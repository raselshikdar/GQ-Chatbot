// src/components/MessageList.js

export default function MessageList({ messages }) {
  return (
    <div className="space-y-4">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`px-4 py-2 rounded-lg max-w-xs break-words ${
              msg.sender === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
}
