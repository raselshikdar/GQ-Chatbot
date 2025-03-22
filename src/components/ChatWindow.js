// src/components/ChatWindow.js

import { useState } from 'react';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (message) => {
    const newMessage = { text: message, type: 'user' };
    setMessages([...messages, newMessage]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (data.response) {
        const botMessage = { text: data.response, type: 'bot' };
        setMessages([...messages, newMessage, botMessage]);
      } else {
        const botMessage = { text: 'Error: No response', type: 'bot' };
        setMessages([...messages, newMessage, botMessage]);
      }
    } catch (error) {
      console.error('Error:', error);
      const botMessage = { text: 'Error: Something went wrong!', type: 'bot' };
      setMessages([...messages, newMessage, botMessage]);
    }
  };

  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
}
