/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#1E1B1A',
          cream: '#F7F3EA',
          orange: '#E4622B',
          mutedDark: '#3A3533',
          mutedLight: '#8A827F'
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Fraunces', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
