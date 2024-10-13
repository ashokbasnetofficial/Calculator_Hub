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
        primary: "#003366",
        accent: "#00CC66",
        background: "#F2F2F2",
        secondary: "#FFAA33",
        darkText: "#333333",
        highlight: "#d6ab02",
        error: "#FF4D4D",
      },
    },
  },
  plugins: [],
};
export default config;
