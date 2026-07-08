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
          charcoal: '#0F172A',    // Fixed: Deep slate/navy for crisp, highly readable main headers
          cream: '#E0F2FE',       // Kept: Your beautiful light blue background
          orange: '#0284C7',      // Kept: Deep sky blue accent for buttons/links
          mutedDark: '#334155',   // Fixed: Medium dark slate for clear paragraph descriptions
          mutedLight: '#64748B'   // Fixed: Clean slate gray for subtitles and small tags
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
