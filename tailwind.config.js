/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#6366f1",
        secondary: "#a855f7",
        background: "#f8fafc",
        surface: "#ffffff",
        text: "#0f172a",
        muted: "#64748b",
      },
    },
  },
  plugins: [],
};
