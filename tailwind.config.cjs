/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        react: "#61DAFB",
        vue: "#4FC08D",
        next: "#000000",
        astro: "#BC52EE",
        laravel: "#FF2D20",
        tailwind: "#06B6D4",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-react/90",
    "bg-vue/90",
    "bg-next/90",
    "bg-astro/90",
    "bg-laravel/90",
    "bg-tailwind/90",
  ],
};
