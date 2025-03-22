// src/components/ChatWindow.js
import { useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      const botMessage = { role: "bot", content: data.reply || "Error: No response" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "bot", content: "Error contacting API" }]);
    }
  };

  return (
    <div className="flex flex-col bg-white shadow-xl rounded-lg w-full max-w-2xl">
      <header className="bg-blue-600 text-white py-4 px-6 rounded-t-lg">
        <h1 className="text-xl font-bold">Advanced AI Chatbot</h1>
      </header>
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
}
