/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#10101a",
        "dark-1": "#0c0c14",
        "dark-2": "#0b0b13",
        primary: "#2fbf71",
        "gray-light": "#f7f7ff",
        "gray-dark": "#555",
      },
      boxShadow: {
        btnShadowPrimary: "4px 4px 0 #2fbf71",
        btnShadowLight: "4px 4px 0 #0b0b13",
        btnShadowDark: "4px 4px 0 #fff",
      },
    },
  },
  plugins: [],
};
