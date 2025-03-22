module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chatgpt-gray': '#343541',
        'chatgpt-dark-gray': '#202123',
        'chatgpt-light-gray': '#40414F',
        'chatgpt-border': '#555767',
        'chatgpt-green': '#19C37D',
      },
    },
  },
  plugins: [],
}
