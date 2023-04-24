/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        font: ['Space Mono'],
      },
      colors: {
        cyan: "hsl(172, 67%, 45%)",
        vdcyan: "hsl(183, 100%, 15%)",
        dgcyan: "hsl(186, 14%, 43%)",
        gcyan: "hsl(184, 14%, 56%)",
        lgcyan: "hsl(185, 41%, 84%)",
        vlgcyan: "hsl(189, 41%, 97%)",
        trasparent: "transparent",
      },
      fontSize: {
        size: "24px",
      }
    },
  },
  plugins: [],
}

