/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        // Define custom font sizes for H1
        "h1-lg": ["50px", "1.2"], // 50px font size with line-height 1.2 on large screens
        "h1-sm": ["40px", "1.2"], // 40px font size with line-height 1.2 on small screens

        // Define custom font sizes for H3
        "h3-lg": ["60px", "1.2"], // 60px font size with line-height 1.2 on large screens
        "h3-sm": ["30px", "1.2"], // 30px font size with line-height 1.2 on small screens
        "body-sm": ["18px", "1.2"], // 40px font size with line-height 1.2 on small screens
        "body-lg": ["20px", "1.2"], // 40px font size with line-height 1.2 on small screens
        "button-lg": ["16px", "1.2"], // 40px font size with line-height 1.2 on small screens
      },
      fontFamily: {
        sans: [
          "Inter",
          "Prompt",
          "Roboto Condensed",
          "Work Sans",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
