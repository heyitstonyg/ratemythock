import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        equipment: `
          0 2px 4px rgba(0, 0, 0, 0.02),
          0 1px 0 rgba(255, 255, 255, 0.06),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `,
        "equipment-hover": `
          0 4px 8px rgba(0, 0, 0, 0.04),
          0 1px 0 rgba(255, 255, 255, 0.06),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `,
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "led-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "led-pulse": "led-pulse 2s ease-in-out infinite",
      },
      backgroundImage: {
        "technical-grid": `
          linear-gradient(to right, hsl(var(--border) / 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--border) / 0.1) 1px, transparent 1px)
        `,
        "equipment-gradient": `
          linear-gradient(
            to bottom,
            hsl(var(--card) / 0.5) 0%,
            hsl(var(--card)) 100%
          )
        `,
      },
      gridTemplateColumns: {
        "16": "repeat(16, minmax(0, 1fr))",
      },
      letterSpacing: {
        technical: "0.1em",
      },
    },
  },
  plugins: [],
};

export default config;
