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
        "line-gradient-bg": "linear-gradient(to bottom, #000, #1b293f, #000)",
        "header-bg":
          "linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.31), rgba(0, 0, 0, 0))",
      },
    },
  },
  plugins: [],
};
export default config;
