import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        yusr: {
          50: "#f8f7f4",
          100: "#efeee8",
          200: "#dddad0",
          300: "#c5c0b0",
          400: "#a9a28e",
          500: "#958c76",
          600: "#887d6a",
          700: "#716858",
          800: "#5e564b",
          900: "#4e4840",
          950: "#2a2521",
        },
        ink: {
          DEFAULT: "#1a1816",
          light: "#2d2a27",
          muted: "#6b6560",
        },
        sand: {
          DEFAULT: "#f5f2ed",
          warm: "#ece7df",
          deep: "#ddd7cc",
        },
        accent: {
          DEFAULT: "#c4553a",
          dark: "#a3432d",
          light: "#d97a64",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "draw-line": "drawLine 1.2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
