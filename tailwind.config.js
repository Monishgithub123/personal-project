module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Ensure Tailwind scans your files
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'navy-blue': '#001f3f',
        'blue-900': '#001a33', // Add a darker blue for the gradient
      },
      teal: {
        600: '#0d6efd',
        700: '#0a58ca',
      },
      fontFamily: {
        'playfair-display': ['Playfair Display', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
