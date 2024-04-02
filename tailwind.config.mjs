/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "tw-",
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        monument: ["Monument-Extended-Regular", "sans-serif"],
        monumentBold: ["Monument-Extended-Ultrabold", "sans-serif"],
      },
      screens: {
        xs: [{ max: "475px" }],
        md: "475px",
        laptop: "1024px",
        desktop: "1280px",
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
