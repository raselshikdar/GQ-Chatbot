// src/pages/api/chat.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    try {
      const response = await axios.post(
        'https://api.groq.ai/chat/completions', // Adjust if the endpoint differs
        {
          prompt: message,
          model: 'llama-3' // Change the model as needed
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      // Assume the response data has a property "text" containing the answer
      const botResponse = response.data?.text || "No response from API";
      res.status(200).json({ response: botResponse });
    } catch (error) {
      console.error("API error:", error.response ? error.response.data : error.message);
      res.status(500).json({ error: 'Error: No response' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
