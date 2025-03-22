// src/pages/index.js
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <ChatWindow />
    </div>
  );
}
