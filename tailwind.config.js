module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#10A37F',
        'primary-hover': '#0D8466',
        'secondary': '#343541',
        'secondary-dark': '#202123',
        'border-light': '#565869',
        'message-ai': '#444654',
        'message-user': '#343541',
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
