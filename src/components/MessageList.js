// src/components/MessageList.js
export default function MessageList({ messages }) {
  return (
    <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-96">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-3 rounded-lg max-w-[80%] ${
            msg.role === "user"
              ? "bg-blue-100 self-end text-right"
              : "bg-gray-100 self-start text-left"
          }`}
        >
          <p>{msg.content}</p>
        </div>
      ))}
    </div>
  );
}
