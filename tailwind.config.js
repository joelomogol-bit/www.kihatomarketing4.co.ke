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
          charcoal: '#FFFFFF',    // Fixed: Main text color is now pure white
          cream: '#E0F2FE',       // Fixed: Background color is now a beautiful light blue
          orange: '#0284C7',      // Optional: Changed the accent orange to a deep sky blue to match the theme
          mutedDark: '#F8FAFC',   // Fixed: Secondary text is now a very light slate gray/white
          mutedLight: '#E2E8F0'   // Fixed: Light borders/labels are now a soft slate gray
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
