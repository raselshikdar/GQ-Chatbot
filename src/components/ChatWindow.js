// src/components/ChatWindow.js

import { useState, useEffect, useRef } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // Append user's message
    const userMsg = { text, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      const data = await res.json();

      // Append bot's response or error message
      const botMsg = { text: data.response || "Error: No response", sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const botMsg = { text: "Error: Something went wrong!", sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    }
  };

  return (
    <div className="flex flex-col bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg w-full max-w-2xl h-[80vh]">
      <header className="bg-blue-600 text-white py-4 px-6 rounded-t-xl">
        <h1 className="text-xl font-bold">GQ-Chatbot</h1>
      </header>
      <div className="flex-1 overflow-y-auto p-6">
        <MessageList messages={messages} />
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t border-gray-200 p-4">
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  );
}
