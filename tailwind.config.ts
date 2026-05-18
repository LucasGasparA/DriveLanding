import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "1180px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "premium": "0 28px 90px rgba(0, 0, 0, 0.45)",
        "glow": "0 0 70px rgba(87, 121, 255, 0.24)"
      },
      backgroundImage: {
        "grid-fade": "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
        "noise": "radial-gradient(circle at 1px 1px, rgba(255,255,255,.08) 1px, transparent 0)"
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem"
      },
      keyframes: {
        "aurora": {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)", opacity: ".72" },
          "50%": { transform: "translate3d(3%, -2%, 0) rotate(8deg)", opacity: "1" }
        },
        "scan": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        }
      },
      animation: {
        aurora: "aurora 12s ease-in-out infinite",
        scan: "scan 4s ease-in-out infinite"
      }
    }
  },
  plugins: [animate]
};

export default config;
