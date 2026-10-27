/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#070c18",
          surface: "#0c1322",
          card: "#0f172a",
          cardBorder: "#1e293b",
          cardHover: "#162238",
          primary: "#38bdf8",
          cyan: "#22d3ee",
          emerald: "#10b981",
          accent: "#0284c7",
          muted: "#94a3b8",
          darkMuted: "#475569",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(56, 189, 248, 0.15)',
        'glow-md': '0 0 25px -5px rgba(56, 189, 248, 0.25)',
        'glow-emerald': '0 0 20px -5px rgba(16, 185, 129, 0.2)',
      }
    },
  },
  plugins: [],
}
