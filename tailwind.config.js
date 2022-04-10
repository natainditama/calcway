module.exports = {
  content: ["./index.html", "./src/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s linear infinite",
        ripple: "ripple 600ms linear",
      },
      keyframes: {
        blink: {
          "0%": { opacity: 1 },
          "25%": { opacity: 0 },
          "50%": { opacity: 1 },
          "75%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        ripple: {
          to: { opacity: 0, transform: "scale(4)" },
        },
      },
    },
  },
  plugins: [],
};
