/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xl-': '1264px',
      },
    },
  },
  plugins: [],
}
