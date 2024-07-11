import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-light": "#f1f2f6",
        "gray-mid": "#ecf0f1",
        "gray-dark": "#bdc371",
        "theme": "#ff7f50",
        "theme-dark": "#ff6348"
      }
    },
  },
  plugins: [],
};
export default config;
