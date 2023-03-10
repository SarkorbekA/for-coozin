/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      screens: {
        'notel': '576px',
        'tt': '992px',
        'ml': '768px',
      },
    },
  },
  plugins: [],
}
