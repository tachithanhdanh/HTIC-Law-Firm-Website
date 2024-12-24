import type { Config } from "tailwindcss";

export default {
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
        navbarColor: "#1C76BC",
        sliderButtonColor: "#575757",
        backgroundTestimonial: "#0F75BC",
        backgroundFooterColor: "#232628",
        aboutUsTextColor: "#006BB5",
        aboutUsIntrodctionBackgroundColor: "#F6FBFF",
        aboutUsIntrodctionBorderColor: "#D8EEFF",
        aboutUsBackgroundColor: "#F6F8F9",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
