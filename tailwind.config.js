// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'primary': '#10A37F', // ChatGPT green
        'primary-hover': '#0D8466', // Darker green for hover states
        'secondary': '#343541', // ChatGPT message background
        'secondary-dark': '#202123', // ChatGPT sidebar background
        'border-light': '#565869', // Light border color
        'message-ai': '#444654', // AI message background
        'message-user': '#343541', // User message background
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Roboto', 'sans-serif'], // ChatGPT-like font stack
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Plugin for Markdown styling
  ],
}
