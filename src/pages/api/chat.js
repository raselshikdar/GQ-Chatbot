// src/pages/api/chat.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    // Call Groq API for chat completions (endpoint assumed similar to others)
    const response = await axios.post(
      "https://api.groq.com/v1/chat/completions",
      {
        model: "llama-3", // or any other model you prefer from Groq
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Adjust based on actual API response structure
    const botReply = response.data.choices[0].message.content;
    res.status(200).json({ reply: botReply });
  } catch (error) {
    console.error("Groq API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "API request failed" });
  }
}
