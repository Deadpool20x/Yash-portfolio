import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FFD600",
        ink: "#0a0a0a",
        paper: "#f5f5f0",
        red: "#FF3333",
        blue: "#4D96FF",
        green: "#33FF99",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-space)", "sans-serif"],
      },
      boxShadow: {
        brutal: "5px 5px 0px #0a0a0a",
        "brutal-yellow": "5px 5px 0px #FFD600",
        "brutal-lg": "8px 8px 0px #0a0a0a",
      },
    },
  },
  plugins: [],
};

export default config;
