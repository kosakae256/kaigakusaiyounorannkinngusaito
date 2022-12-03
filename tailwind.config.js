module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // 追記
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Figtree', 'Noto Sans JP', 'Meiryo', 'sans-serif']
      }
    }
  },
  plugins: [require("daisyui")],
};