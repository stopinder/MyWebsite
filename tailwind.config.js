/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        midnight: '#0f172a',
        celestial: '#1e293b',
        faded: '#94a3b8',
      },
    },
  },
  plugins: [],
};
