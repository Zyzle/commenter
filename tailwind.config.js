module.exports = {
  content: ["./src/styles.scss", "./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'class'
  })],
};
