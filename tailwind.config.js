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
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
  // darkMode: "class", // Enables .dark class for dark theme
};