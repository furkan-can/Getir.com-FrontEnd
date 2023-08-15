/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "mobile-app": "url('/src/assets/mobileapp-bg.png')",
      },
      spacing: {
        "0.1": "0.063rem",
        },
      colors: {
        'brand-color': '#4C3398',
        'primary-brand-color': '#5D3EBC',
        'secondary-brand-color': '#7849F7',
        'brand-yellow': '#FFD300',
      },
    },
  },
  plugins: [],
}