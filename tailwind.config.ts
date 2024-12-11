import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        impact: ['Impact', 'sans-serif'], // Add Impact font
        impacted: ['Impacted', 'sans-serif'], // Add Impacted font
        unicodeImpact: ['UnicodeImpact', 'sans-serif'], // Add Unicode Impact font
      },
    },
  },
  plugins: [],
} satisfies Config;
