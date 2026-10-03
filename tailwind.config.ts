import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "Segoe UI", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Avenir Next", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "SFMono-Regular", "monospace"],
      },
      colors: {
        neon: {
          cyan: "#00F5FF",
          purple: "#8B5CF6",
          magenta: "#FF006E",
          green: "#39FF14",
          pink: "#E91E63",
        },
        space: {
          void: "#030014",
          deep: "#0A0A1A",
          surface: "#111128",
          card: "rgba(15, 15, 40, 0.6)",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "float-hologram": "float-hologram 8s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "pulse-neon": "pulse-neon 3s ease-in-out infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        "border-rotate": "border-rotate 4s linear infinite",
        "grid-scroll": "grid-scroll 20s linear infinite",
        "scan-line": "scan-line 6s linear infinite",
        "blink-caret": "blink-caret 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "float-hologram": {
          "0%, 100%": { transform: "translateY(0px) rotateY(0deg)" },
          "25%": { transform: "translateY(-10px) rotateY(1deg)" },
          "75%": { transform: "translateY(-6px) rotateY(-1deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-neon": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "border-rotate": {
          to: { "--border-angle": "360deg" } as Record<string, string>,
        },
        "grid-scroll": {
          "0%": { transform: "perspective(500px) rotateX(60deg) translateY(0)" },
          "100%": { transform: "perspective(500px) rotateX(60deg) translateY(60px)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "blink-caret": {
          "0%, 100%": { borderColor: "#00F5FF" },
          "50%": { borderColor: "transparent" },
        },
      },
      backdropBlur: {
        xs: "2px",
        "2xl": "40px",
        "3xl": "64px",
      },
    },
  },
  plugins: [],
};

export default config;
