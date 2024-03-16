/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBg: {
          DEFAULT: "#f8fafc",
        },
        brandText: {
          DEFAULT: "#0f172a",
        },
      },
      boxShadow: {
        cs: "0 0 20px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
