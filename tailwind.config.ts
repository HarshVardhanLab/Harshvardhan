import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-lowest": "#070e1d",
        "secondary-fixed": "#e2dfff",
        "secondary-fixed-dim": "#c3c0ff",
        "on-primary": "#552100",
        "primary-fixed": "#ffdbca",
        "inverse-surface": "#dce2f7",
        "surface-container-high": "#232a3a",
        "outline-variant": "#584237",
        "tertiary": "#e4c461",
        "on-tertiary-container": "#4e3d00",
        "surface-container": "#191f2f",
        "on-secondary-fixed-variant": "#3323cc",
        "on-tertiary-fixed": "#231b00",
        "on-tertiary": "#3c2f00",
        "on-surface-variant": "#e0c0b1",
        "secondary-container": "#3626ce",
        "tertiary-container": "#c7a848",
        "surface": "#0c1322",
        "inverse-primary": "#9d4300",
        "primary-container": "#f97316",
        "inverse-on-surface": "#293040",
        "on-secondary": "#1d00a5",
        "background": "#0c1322",
        "surface-bright": "#323949",
        "on-surface": "#dce2f7",
        "tertiary-fixed-dim": "#e4c461",
        "surface-dim": "#0c1322",
        "tertiary-fixed": "#ffe086",
        "on-secondary-container": "#b3b1ff",
        "primary": "#ffb690",
        "surface-container-highest": "#2e3545",
        "on-error": "#690005",
        "surface-container-low": "#141b2b",
        "on-tertiary-fixed-variant": "#574500",
        "error": "#ffb4ab",
        "on-error-container": "#ffdad6",
        "on-secondary-fixed": "#0f0069",
        "secondary": "#c3c0ff",
        "primary-fixed-dim": "#ffb690",
        "surface-tint": "#ffb690",
        "outline": "#a78b7d",
        "on-primary-fixed": "#341100",
        "error-container": "#93000a",
        "surface-variant": "#2e3545",
        "on-background": "#dce2f7",
        "on-primary-fixed-variant": "#783200",
        "on-primary-container": "#582200"
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Space Grotesk", "sans-serif"],
        mono: ["Fira Code", "monospace"]
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      }
    }
  },
  plugins: []
};

export default config;
