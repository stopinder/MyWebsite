/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0f172a',
        celestial: '#1e293b',
        faded: '#94a3b8',
      },
    },
  },
  plugins: [],
};

