module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
   theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-gilroy)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    // require('@butterfail/tailwindcss-inverted-radius'),
    require('@tailwindcss/line-clamp')
  ],
}