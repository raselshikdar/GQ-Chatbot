export const saveConversation = (messages) => {
  try {
    localStorage.setItem('chat-conversation', JSON.stringify(messages))
  } catch (error) {
    console.error('Error saving conversation:', error)
  }
}

export const loadConversation = () => {
  try {
    const saved = localStorage.getItem('chat-conversation')
    return saved ? JSON.parse(saved) : null
  } catch (error) {
    console.error('Error loading conversation:', error)
    return null
  }
}
