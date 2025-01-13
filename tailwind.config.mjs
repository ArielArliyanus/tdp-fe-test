/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(180, 52%, 96%)",
        foreground: "var(--foreground)",
        primary: "hsl(180, 29%, 50%)",
        filter: "hsl(180, 31%, 95%)",
        grayish: "hsl(180, 8%, 52%)",
        darkGrayish: "hsl(180, 14%, 20%)"
      },
    },
  },
  plugins: [],
};
