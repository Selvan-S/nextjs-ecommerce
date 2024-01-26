/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5400ff",

          secondary: "#0000ff",

          accent: "#4aa200",

          neutral: "#1f2030",

          "base-100": "#17273f",

          info: "#0080da",

          success: "#009e00",

          warning: "#ffa912",

          error: "#fb255d",
          background: {
            "background-color": "#e3e6e6", // This way we can add a drak theme with a different background color
          },
        },
      },
    ],
  },
};
