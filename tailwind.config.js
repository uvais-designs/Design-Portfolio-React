/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        muted: "hsl(var(--color-muted))",
        card: "hsl(var(--color-card))",
        primary: "hsl(var(--color-primary))",
        secondary: "hsl(var(--color-secondary))",
        accent: "hsl(var(--color-accent))",
      },
      fontFamily: {
        sans: ["poppins", "sans-serif"],
      },
      keyframes: {
        move: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '20px 0' },
        },
      },
      animation: {
        'move': 'move 1s linear infinite',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
  // darkMode: "class", // Enables .dark class for dark theme
};