/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode with the "class" strategy
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url('/backgroundImg.png')",
      },
      colors: {
        primary: {
          darkBlue: "#040C18", // dark blue
          textColor: "#81AFDD", // light blue
          darkBackground: "#000000", // dark background color for dark mode
          secondaryColor: "#FF3D00",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          ".text-gradient": {
            background: "linear-gradient(to right, #AE67FA 0%, #F49867 100%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          },
          ".bg-dark-gradient": {
            background: "linear-gradient(to bottom, #000814, #001F3F)",
          },
        });
      },
    ],
  },
};
