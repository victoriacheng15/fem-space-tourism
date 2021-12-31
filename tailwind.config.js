module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        barlow: ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        clrDark: {
          925: '#0B0D17',
        },
        clrLight: {
          925: 'hsl(231,77%,90%)',
        },
      },
      screens: {
        bpCustom: '1440px',
      },
    },
  },
  plugins: [],
};
