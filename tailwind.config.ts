import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "rgb(15 23 42 / 0.55)",
          light: "rgb(255 255 255 / 0.8)",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgb(56 189 248 / 0.2)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgb(56 189 248 / 0.35), transparent 30%), radial-gradient(circle at 80% 20%, rgb(139 92 246 / 0.35), transparent 35%), radial-gradient(circle at bottom, rgb(34 197 94 / 0.25), transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
