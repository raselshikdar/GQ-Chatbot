// src/pages/api/chat.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const response = await axios.post('https://api.groq.ai/chat', {
        apiKey: process.env.GROQ_API_KEY,  // Make sure this is your correct API key
        query: message,
      });

      // Assuming the response from the Groq API is in response.data
      const chatResponse = response.data.response; // Adjust based on the API response structure

      res.status(200).json({ response: chatResponse });
    } catch (error) {
      console.error('Error with Groq API:', error);
      res.status(500).json({ error: 'Error: No response' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
