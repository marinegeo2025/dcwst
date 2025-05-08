/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["animate-pulse-glow"],
  theme: {
    extend: {
      animation: {
        "pro-pulse": "pro-pulse 2s infinite",
      },
      keyframes: {
        "pro-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(56, 189, 248, 0.6)" },
          "50%": { boxShadow: "0 0 15px 10px rgba(56, 189, 248, 0.2)" },
        },
        extend: {
          textShadow: {
            glow: "0 0 10px rgba(0, 255, 213, 0.7)",
          },
        },
      },
    },
  },
  plugins: [],
};
