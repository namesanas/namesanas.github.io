import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#060708",
        surface: "#0b0d10",
        "surface-2": "#0f1216",
        "surface-3": "#141920",
        accent: "#38bdf8",
        "accent-bright": "#7dd3fc",
        "accent-deep": "#0ea5e9",
        signal: "#22d3ee",
        txt: "#e8eaed",
        muted: "#9aa2ab",
        faint: "#6a727c",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        shell: "1180px",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -32px rgba(0,0,0,0.9)",
        glow: "0 0 0 1px rgba(56,189,248,0.20), 0 0 46px -12px rgba(56,189,248,0.42)",
        "glow-sm": "0 0 24px -8px rgba(56,189,248,0.5)",
        edge: "0 0 0 1px rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(56,189,248,0.10), transparent 70%)",
      },
      keyframes: {
        "grid-pan": {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "0px 40px" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-1000" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.18)" },
        },
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "60%, 100%": { transform: "translateX(220%)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "caret-blink": {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0" },
        },
      },
      animation: {
        "grid-pan": "grid-pan 6s linear infinite",
        "dash-flow": "dash-flow 14s linear infinite",
        "pulse-node": "pulse-node 3.6s ease-in-out infinite",
        sheen: "sheen 5.5s ease-in-out infinite",
        "fade-in": "fade-in 0.8s ease forwards",
        "caret-blink": "caret-blink 1.2s steps(1) infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
