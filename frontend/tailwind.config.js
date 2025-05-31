/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          'default-text': '#37352F',
          'secondary-text': '#6B6B6B',
          'placeholder': '#B7B7B7',
          'bg-default': '#FFFFFF',
          'bg-secondary': '#FBFBFA',
          'bg-hover': '#F1F1F0',
          'border': '#EBEBEA',
          'accent': '#2383E2',
          'selection': 'rgba(35, 131, 226, 0.28)',
        },
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
      borderRadius: {
        '3px': '3px',
      },
      fontSize: {
        '11': '11px',
        '14': '14px',
        '32': '32px',
      },
      lineHeight: {
        '20': '20px',
        '24': '24px',
      },
      transitionDuration: {
        '50': '50ms',
      },
    },
  },
  plugins: [],
} 