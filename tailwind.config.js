module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "black-rgba": "rgba(0, 0, 0, 0.54)",
        "black-rgba-2": "rgba(0, 0, 0, 1)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e64545",
          secondary: "#e6e6e6",
          accent: "#1b3d69",
          neutral: "gold",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
