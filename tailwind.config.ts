import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#FFF0F3",
          100: "#FADADD",
          200: "#F8C8D8",
          300: "#F0A8BC",
          400: "#E07896",
          500: "#C9A0A0",
        },
        rosegold: {
          DEFAULT: "#B76E79",
          light: "#C9909A",
          dark: "#9A5560",
        },
        cream: "#FFF8F0",
        offwhite: "#FFFAF7",
        mauve: "#C9A0A0",
        charcoal: "#2D2D2D",
        softgray: "#6B6B6B",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        dmsans: ["var(--font-dmsans)", "system-ui", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "blush-gradient": "linear-gradient(135deg, #FFF0F3 0%, #FADADD 50%, #FFF8F0 100%)",
        "rose-gradient": "linear-gradient(135deg, #FADADD 0%, #F8C8D8 50%, #C9A0A0 100%)",
        "hero-gradient": "linear-gradient(135deg, #FFFAF7 0%, #FFF0F3 40%, #FADADD 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
