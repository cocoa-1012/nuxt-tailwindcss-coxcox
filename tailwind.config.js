module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "main-texture": "url('/images/Mask Group 1@4X.png')",
        "signup-texture": "url('/assets/images/signup-back.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
