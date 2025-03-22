import axios from 'axios'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { message } = req.body

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({ error: 'Server misconfiguration' })
  }

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid message format' })
  }

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-70b-8192',
        messages: [{ role: 'user', content: message }],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        timeout: 30000, // 30 seconds timeout
      }
    )

    const content = response.data.choices[0]?.message?.content
    if (!content) {
      throw new Error('Empty response from API')
    }

    return res.status(200).json({ reply: content })
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message)
    
    let status = 500
    let message = 'Internal server error'

    if (error.response) {
      status = error.response.status
      message = error.response.data?.error?.message || 'API request failed'
    } else if (error.request) {
      message = 'Request timed out or failed to reach server'
    }

    return res.status(status).json({ error: message })
  }
}
