/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#D87D4A',
        'lightOrange': '#FBAF85'
      },
      fontSize: {
        'clampStatus': 'clamp(16px, 1.57vw , 20px)',
        'clampTitle': 'clamp(33.69px, 3.29vw , 42px)',
        'clampDesc': 'clamp(13.62px, 1.33vw , 17px)',
        'buttonClamp': 'clamp(13.6px, 1.3vw, 17px)',
        'articleTitle': 'clamp(38.4px, 3.75vw, 48px)',
        'articleDesc': 'clamp(14.4px, 1.407vw, 18px)'
      },
      padding: {
        'clampPaddingTop': 'clamp(114.82px, 11.21vw, 143.49px)',
        'paddingXClamp': 'clamp(24px, 2.35vw, 35px)',
        'categoryTop': 'clamp(96px, 9.38vw, 120px)',
        'categoryBottom': 'clamp(24px, 2.35vw, 30px)'
      },
      width: {
        'widthClamp': 'clamp(400px, 40vw, 512px)',
        'categoryWidthClamp': 'clamp(317.33px, 96.1vw, 402.67px)',
        'categoryImage': 'clamp(144px, 14.07vw, 180px)',
        'articleWidth': 'clamp(450px, 89vw, 550px)'
      },
      lineHeight: {
        'lineHeightClamp': 'clamp(40px, 3.91vw, 50px)'
      },
      gap: {
        'categoryGapClamp': 'clamp(16px, 1.57vw, 20px)',
        'articleColGap': 'clamp(64px, 6.25vw, 80px)'
      },
      letterSpacing: {
        articleTitle: 'clamp(0.96px, 0.094vw, 1.2px)'
      }
    },
  },
  plugins: [],
}

