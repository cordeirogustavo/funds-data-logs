/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-neutral': '#636365',
        'neutral-list': '#1C1F27',
        'primary-button': '#33A0FF',
        'primary-links': '#02A3CC',
        'secondary-positive': '#6ECE1A',
        'secondary-warning': '#FF9000',
        'secondary-negative': '#C14646',
        'text-white;': '#FFFFFF',
        'text-black;': '#000000',
        'text-gray;': '#636365',
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
        'secondary': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'primary': '8px',
        'secondary': '16px',
      },
    },
    
  },
  plugins: [],
}

