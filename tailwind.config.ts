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
        primaryAccent: "var(--primary-accent)", // Coral color
        secondaryAccent: "var(--secondary-accent)", // Purple color
        navFooterBg: "var(--nav-footer-bg)", // Background for header/footer
        highlight: "var(--highlight)", // Blue color for links
      },
    },
  },
  plugins: [],
} satisfies Config;
