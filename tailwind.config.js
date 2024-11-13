/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // set up custom font and place in body to use throughout
      fontFamily: {
        kumbh:[ 'Kumbh Sans', 'serif']
      },
      // set up custom colors to be used with tailwind throughout project
      colors: {
        primary: "hsl(26, 100%, 55%)",
        secondary: "hsl(25, 100%, 94%)",
        dark1: "hsl(220, 13%, 13%)",
        dark2: "hsl(219, 9%, 45%)",
        dark3: "hsl(220, 14%, 75%)",
        light: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        overlay: "hsl(0, 0%, 0%)",
      },
    },
    plugins: [],
  },
};
