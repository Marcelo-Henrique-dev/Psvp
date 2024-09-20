/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "amarelo-primario": "#F2AE30",
        "amarelo-secundario": "#F2C12E",
        "marrom-primario": "#593E25",
        "marro-transparente": "#d9bea5",
        "azul-primario": "#024959",
        "azul-transparente": "#69e1fc",
        "cinza-primario": "#A1A2A6"
      }
    },
  },
  plugins: [],
}

