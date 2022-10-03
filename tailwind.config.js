module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
      md: '930px',
    }
  }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
