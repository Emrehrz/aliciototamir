/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true, // mx-auto yazma ihtiyacını kaldırır
        padding: {
          DEFAULT: '1rem',   // Mobilde 16px yan boşluk
          sm: '1.5rem',      // 24px
          lg: '2rem',        // 32px
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1140px',     // Ideal standart masaüstü genişliği
          '2xl': '1320px',   // Ideal geniş ekran genişliği
        },
      },
    },
  },
  plugins: [],
}