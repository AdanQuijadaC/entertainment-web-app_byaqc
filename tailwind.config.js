/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  relative: true,
  theme: {
    extend: {
      colors: {
        custom_red: "#FC4747",
        custom_dark_blue: "#10141e",
        custom_semi_dark_blue: "#161d2f",
        custom_greyish_blue: "#5a698f",
      },
      fontFamily: {
        Outfit: "Outfit",
      },
      screens: {
        sm: "375px",
        smxl: "525px",
        md: "768px",
        lg: "1024px",
      },
      container: {
        sm: "375px",
        smxl: "525px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
