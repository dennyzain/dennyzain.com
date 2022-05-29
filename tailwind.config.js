module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { inter: 'Inter, sans-serif' },
      backgroundImage: {
        hero: "url('../public/hero.jpg')",
      },
      colors: {
        primary: '#222222',
        secondary: '#eaeaea',
      },
    },
  },
  plugins: [],
};
