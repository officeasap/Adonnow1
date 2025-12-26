import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        heading: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        // 5-Tier Depth System
        "depth-void": "hsl(var(--depth-void))",
        "depth-1": "hsl(var(--depth-1))",
        "depth-2": "hsl(var(--depth-2))",
        "depth-3": "hsl(var(--depth-3))",
        "depth-4": "hsl(var(--depth-4))",
        "depth-5": "hsl(var(--depth-5))",
        
        // Semantic colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Text colors
        "text-primary": "hsl(var(--text-primary))",
        "text-secondary": "hsl(var(--text-secondary))",
        "text-muted": "hsl(var(--text-muted))",
        "text-highlight": "hsl(var(--text-highlight))",
        
        // Gold accent for typography only
        "gold-base": "hsl(var(--gold-base))",
        "gold-light": "hsl(var(--gold-light))",
        "gold-dark": "hsl(var(--gold-dark))",
        "text-highlight": "hsl(var(--text-highlight))",
        
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "neu-raised": "-4px -4px 8px hsl(0 0% 12%), 4px 4px 8px hsl(0 0% 2%)",
        "neu-raised-hover": "-6px -6px 12px hsl(0 0% 14%), 6px 6px 12px hsl(0 0% 2%)",
        "neu-pressed": "inset -4px -4px 8px hsl(0 0% 12%), inset 4px 4px 8px hsl(0 0% 2%)",
        "neu-floating": "-12px -12px 24px hsl(0 0% 15%), 12px 12px 24px hsl(0 0% 3%), 0 20px 40px rgba(0,0,0,0.4)",
        "neu-hero": "-24px -24px 48px hsl(0 0% 18%), 24px 24px 48px hsl(0 0% 1%), 0 40px 80px rgba(0,0,0,0.5)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "popup-enter": {
          "0%": { opacity: "0", transform: "scale(0.9) translateY(20px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "popup-exit": {
          "0%": { opacity: "1", transform: "scale(1) translateY(0)" },
          "100%": { opacity: "0", transform: "scale(0.9) translateY(20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "mineral-glow": {
          "0%, 100%": { boxShadow: "-24px -24px 48px hsl(0 0% 18%), 24px 24px 48px hsl(0 0% 1%), 0 0 60px rgba(255,255,255,0.05)" },
          "50%": { boxShadow: "-24px -24px 48px hsl(0 0% 20%), 24px 24px 48px hsl(0 0% 1%), 0 0 80px rgba(255,255,255,0.08)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "popup-enter": "popup-enter 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "popup-exit": "popup-exit 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        shimmer: "shimmer 2s infinite linear",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "mineral-glow": "mineral-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
