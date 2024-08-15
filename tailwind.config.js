/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paragraph: "#131735",
        testimonial: "#00000014",
        primary: "#F7F7F7",
        secondary: "#FFFFFF",
        navigation: "#667085",
        icon: "#454545",
        card: "#FCFCFD",
        text: "#00000066",
        heading: "#00000099",
        content: "#E4E7EC",
      },
      width: {
        "100p": "100%",
      },
      fontFamily: {
        Lato: ["Lato"],
        Rochester: ["Rochester"],
        Montserrat: ["Montserrat"],
        Roboto: ["Roboto"],
      },
      fontWeight: {
        9: "900",
        7: "700",
        4: "400",
      },
    },
  },
  plugins: [],
};
