module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode color palette
        'primary': '#10A37F', // Green for accents
        'primary-hover': '#0D8466', // Darker green for hover states
        'background': '#FFFFFF', // White background
        'background-secondary': '#F9FAFB', // Light gray for secondary backgrounds
        'text-primary': '#1F2937', // Dark gray for primary text
        'text-secondary': '#6B7280', // Gray for secondary text
        'border': '#E5E7EB', // Light border color
        'error-bg': '#FEE2E2', // Light red for error backgrounds
        'error-text': '#B91C1C', // Dark red for error text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Modern sans-serif font
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For Markdown formatting
  ],
}
