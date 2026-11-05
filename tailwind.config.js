import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3F5E6",
        leaf: "#14301F",
        tangerine: "#F25C14",
        lemon: "#F5D63D",
        pith: "#E1E7C8",
        muted: "#4A5D4F",
      },
      fontFamily: {
        display: [
          "Bricolage Grotesque",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        sans: ["Hanken Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [forms(), typography()],
};
