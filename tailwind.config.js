/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js, ts, vue}",
    "./src/**/*",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    import('flowbite/plugin')
  ],
}