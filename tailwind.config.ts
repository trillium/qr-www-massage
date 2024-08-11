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
        primary: "#2dd4bf",
      },
      screens: {
        xxs: "360px", // Custom breakpoint for extra extra small screens
        xss: "360px", // Custom breakpoint for extra extra small screens
        xs: "480px", // Custom breakpoint for extra small screens
      },
      borderWidth: {
        DEFAULT: "1px",
        "0": "0",
        "1": "1px",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "5": "5px",
        "6": "6px",
        "7": "7px",
        "8": "8px",
        "9": "9px",
        "10": "10px",
        "11": "11px",
        "12": "12px",
        "13": "13px",
      },
    },
  },
  plugins: [],
};
export default config;
