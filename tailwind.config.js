/** @type {import('tailwind's').Config} */
import flowbite from 'flowbite/plugin';

export default {
  content: [
    "./index.html",
    './public/**/*.html',
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './views/**/*.{html,js}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite
  ],
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

}