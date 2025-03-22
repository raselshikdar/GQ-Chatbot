// src/components/MessageList.js

export default function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.type}`}>
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
}
