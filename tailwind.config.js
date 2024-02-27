/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rosa: "#FFE4E1",
        rosa2: "#FBCEB1",
        rosa3: "#F7E7CE",
        beige: "#F5F5DC",
        green: "#fcb7af",

      },
      fontFamily: {
        kode: ["Kode Mono", "monospace"],
        inco: ["Inconsolata", "monospace"],
        nunito: ["Nunito", "sans-serif"],
        dancing: ["Dancing Script", "cursive"]
      },
    },
  },
  plugins: [],
};
