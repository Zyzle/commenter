module.exports = {
  content: ["./src/styles.scss", "./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'class'
  })],
};
