module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: { sans: ["Prompt", "Roboto"] },
    extend: {
      colors: {
        border: "#E4E3E5",
        blue: "#00CFE8",
        indigo: "#6610F2",
        purple: "#7367F0",
        pink: "#E83E8C",
        red: "#EA5455",
        orange: "#FF9F43",
        yellow: "#FFC107",
        green: "#20C997",
        teal: "#20C997",
        cyan: "#17A2B8",
        white: "#FFFFFF",
        gray: "#B8C2CC",
        primary: "#0092d2", // "#7367F0",
        secondary: "#82868B",
        success: "#28C76F",
        info: "#00CFE8",
        warning: "#FF9F43",
        danger: "#EA5455",
        light: "#F6F6F6",
        dark: "#4B4B4B",
        body: "#6E6B7B",
        header: "#5E5873",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
