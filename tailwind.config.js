module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Direct ChatGPT color codes
        'chatgpt-dark': '#343541',
        'chatgpt-darker': '#202123',
        'chatgpt-border': '#40414F',
        'chatgpt-green': '#19C37D',
        'chatgpt-message-ai': '#444654'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
