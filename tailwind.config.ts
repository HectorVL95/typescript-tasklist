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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'white': '#FFFFFF',
        'light': '#5f5f5f',
        'blue': '#2f74c0;',
        'active': '#32c3cd',
        'completed': '#ff2600',
      },
    },
  },
  plugins: [],
};
export default config;
