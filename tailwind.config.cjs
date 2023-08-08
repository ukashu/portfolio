/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      blur: {
        "4xl": "100px"
      }
    },
    colors: {
      purple: "#4B006F",
      darkpurple: "#14004D",
      darkblue: "#01003A",
      yellow: "#FCFF74",
      offwhite: "#E6E6E6",
      mediumgrey: "#292929",
      "gt-blue-dark": "#2563EB",
      "gt-blue-light": "#99D4FF",
      "gt-red-light": "#FF0000",
      "gt-red-dark": "#CC0000",
      "nh-grey-light": "#343434",
      "nh-grey-dark": "#111111",
      "nh-white": "#E4E4E7"
    }
  },
  plugins: []
}
