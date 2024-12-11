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
        impact: ['Impact'], // Add Impact font
        impacted: ['Impacted'], // Add Impacted font
        unicodeImpact: ['UnicodeImpact'], // Add Unicode Impact font
      },
    },
  },
  plugins: [],
} satisfies Config;
