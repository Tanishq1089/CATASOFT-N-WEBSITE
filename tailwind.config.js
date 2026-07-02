/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EA580C',
        'primary-hover': '#C2410C',
        'primary-light': '#FFF7ED',
        'dark-bg': '#060218',
        'off-white': '#FAFAF9',
        'text-primary': '#18181B',
        'text-secondary': '#52525B',
        'text-muted': '#A1A1AA',
        'border-color': '#E4E4E7',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
