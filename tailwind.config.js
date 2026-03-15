/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "sans-serif"] },
      colors: {
        darkBg: "#0a0a0a",
        lightBg: "#f8fafc",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0,0,0,0.3)",
        xl: "0 20px 50px -10px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
