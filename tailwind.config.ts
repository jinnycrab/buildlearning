
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        codec: ['Codec Pro', 'sans-serif'],
        biome: ['Inter', 'sans-serif'], // Using Inter as a fallback for Biome
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Brand colors based on provided image
        "brand-orange": "#E86642", // Dominant brand color (orange/rust)
        "brand-green": "#8CC084", // Brand color (mint green)
        "brand-yellow": "#F4D365", // Brand color (yellow)
        "brand-blue": "#4D88C4", // Dominant brand color (blue)
        "brand-cream": "#F9F3E3", // Brand color (cream)
        // Soft colors for polaroid cards
        "soft-green": "#F2FCE2",
        "soft-yellow": "#FEF7CD",
        "soft-orange": "#FDE1D3",
        "soft-purple": "#E5DEFF",
        "soft-pink": "#FFDEE2",
        "soft-peach": "#FDE1D3",
        "soft-blue": "#D3E4FD",
        "soft-gray": "#F1F0FB",
        primary: {
          DEFAULT: "#2A2B2E",
          foreground: "#F5F3F0",
        },
        secondary: {
          DEFAULT: "#F5F3F0",
          foreground: "#2A2B2E",
        },
        accent: {
          DEFAULT: "#94A196",
          foreground: "#2A2B2E",
        },
        muted: {
          DEFAULT: "#F8F9FA",
          foreground: "#6C757D",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
