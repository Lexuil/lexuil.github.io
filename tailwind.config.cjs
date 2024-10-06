/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        react: "#61DAFB",
        vue: "#4FC08D",
        next: "#000000",
        astro: "#BC52EE",
        laravel: "#FF2D20",
        tailwind: "#06B6D4",
        wordpress: "#21759B",
        woocommerce: "#96588A",
        mysql: "#4479A1",
        docker: "#2496ED",
        mongodb: "#47A248",
        aws: "#FF9900",
        dynamodb: "#4053D6",
        whatsapp: "#25D366",
        terraform: "#623CE4",
        ecs: "#FF9900",
        s3: "#569A31",
        lambda: "#FF9900",
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
    "bg-wordpress/90",
    "bg-woocommerce/90",
    "bg-mysql/90",
    "bg-docker/90",
    "bg-mongodb/90",
    "bg-aws/90",
    "bg-whatsapp/90",
    "bg-terraform/90",
    "bg-dynamodb/90",
    "bg-ecs/90",
    "bg-s3/90",
    "bg-lambda/90",
  ],
};
