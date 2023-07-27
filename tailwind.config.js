/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'vs-dark': '#1e1e1e',
        'github-dark': '#0d1117'
      },
    },
  },
  plugins: [],
};
