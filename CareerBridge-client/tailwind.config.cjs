module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'colorWhite': '#ffffff',
        'lightColor': '#F5F5F5',
        'rootColor': '#6C63FF',
        'hoverRootColor': '#2A78A5',
        'darkColor': '#222222',
        'grayColor': '#7C7C7C',
      },
      fontFamily: {
        lightFont: ['Playfair Display', 'serif'],
        darkFont: ['Merienda', 'serif'],
      },
      fontSize: {
        big: 'var(--big-font-size)',
        h1: 'var(--h1-font-size)',
        h2: 'var(--h2-font-size)',
        h3: 'var(--h3-font-size)',
        large: 'var(--large-font-size)',
        normal: 'var(--normal-font-size)',
        small: 'var(--small-font-size)',
        tiny: 'var(--tiny-font-size)',
      },
    },
  },
  variants: {},
  plugins: [],
};

