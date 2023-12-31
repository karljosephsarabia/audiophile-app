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
        'articleDesc': 'clamp(14.4px, 1.407vw, 18px)',
        'footerCategory': 'clamp(12.8px, 1.25vw, 16px)',
        'footerDesc': 'clamp(14.56px, 1.42vw, 18.18px)',
        'productDetailFeature': 'clamp(30.4px, 2.97vw, 38px)',
        'productDetailDesc': 'clamp(13px, 1.27vw, 16.26px)',
        'productDetailSuggestion': 'clamp(24px, 2.35vw, 30px)',
        'productDetailSuggestionBtn': 'clamp(12px, 1.18vw, 15.10px)'
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      padding: {
        'clampPaddingTop': 'clamp(114.82px, 11.21vw, 143.49px)',
        'paddingXClamp': 'clamp(24px, 2.35vw, 35px)',
        'categoryTop': 'clamp(96px, 9.38vw, 120px)',
        'categoryBottom': 'clamp(24px, 2.35vw, 30px)',
      },
      margin: {
        'footerTop': 'clamp(96px, 9.38vw, 120px)',
        'footerLogoTop': 'clamp(56px, 5.47vw, 70px)',
        'footerLogoBot': 'clamp(40px, 3.91vw, 50px)',
        'productDetailTitle': 'clamp(20px, 1.96vw, 25px)',
        'productDetailImage': 'clamp(41px, 4vw, 51.2px)'
      },
      width: {
        'widthClamp': 'clamp(400px, 40vw, 512px)',
        'categoryWidthClamp': 'clamp(317.33px, 96.1vw, 402.67px)',
        'categoryImage': 'clamp(144px, 14.07vw, 180px)',
        'articleWidth': 'clamp(450px, 89vw, 550px)',
        'footerLogo': 'clamp(143px, 13.97vw, 178.81px)',
        'footerDesc': 'clamp(512px, 50vw, 640px)',
        'footerSocialMed': 'clamp(20px, 1.96vw, 25px)',
        'footerLine': 'clamp(112px, 10.94vw, 140px)',
        'productdetail': 'clamp(984px, 96.1vw, 1080px)',
        'productFeature': 'clamp(550px, 53.72vw, 687.61px)',
        'productDetailBigImage': 'clamp(562px, 54.89vw, 648.95px)',
        'productdetailTitle': 'clamp(404px, 36.8vw, 471px)',
        'productdetailSuggestionBtn': 'clamp(145px, 14.17vw, 181.38px)'
      },
      lineHeight: {
        'lineHeightClamp': 'clamp(40px, 3.91vw, 50px)',
        'articleTitle': 'clamp(44px, 4.3vw, 55.04px)',
        'productDetailTitle': 'clamp(36px, 3.52vw, 45px)'
      },
      gap: {
        'categoryGapClamp': 'clamp(16px, 1.57vw, 20px)',
        'articleColGap': 'clamp(90px, 8.7vw, 112.51px)',
        'productDetailGap': 'clamp(128px, 12.5vw, 160px)',
        'productDetailTitleGap': 'clamp(120px, 11.72vw, 150px)'
      },
      letterSpacing: {
        articleTitle: 'clamp(0.96px, 0.094vw, 1.2px)'
      },
      height: {
        'footerLogo': 'clamp(25px, 2.45vw, 31.36px)',
        'footerSocialMed': 'clamp(20px, 1.96vw, 25px)'
      }
    },
  },
  plugins: [],
}

