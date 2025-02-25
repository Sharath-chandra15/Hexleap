import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container:{
        center: true,
        padding: "15px",
      },
      colors: {
        dark: "#000000",
        medium: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
