import { withTV } from "tailwind-variants/transformer";
import tailwindAnimatePlugin from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default withTV({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        desktop: "1200px",
      },
    },
    extend: {
      borderRadius: {
        default: "5px",
      },
      screens: {
        xs: { max: "330px" },
        md: "950px",
        xl: "1200px",
      },
      backgroundImage: {
        "gradient-login":
          "linear-gradient(48deg,#ff9839 0%,#ff9839 0.01%,#f27400 100%)",
        "gradient-login2":
          "linear-gradient(61deg,#ff891e80 0%,#dc690080 31.04%,#ff7c0480 54.75%,#dc690080 75.31%,#f1730080 100%)",
        "gradient-login-body": "linear-gradient(168deg, #f9fbfc 0%, #fff 100%)",
      },
      colors: {
        primary: {
          900: "#a85000",
          800: "#c35d00",
          700: "#dc6900",
          600: "#f17300",
          500: "#ff7c04",
          400: "#ff891e",
          300: "#ff9839",
          200: "#ffa757",
          100: "#ffc48e",
        },
        secondary: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2a37",
          900: "#111928",
        },
        danger: {
          900: "#771d1d",
          800: "#9b1c1c",
          700: "#c81e1e",
          600: "#e02424",
          500: "#f05252",
          400: "#f98080",
          300: "#f8b4b4",
          200: "#fbd5d5",
          100: "#fde8e8",
        },
        warning: {
          900: "#633112",
          800: "#723b13",
          700: "#8e4b10",
          600: "#9f580a",
          500: "#c27803",
          400: "#e3a008",
          300: "#faca15",
          200: "#fce96a",
          100: "#fdf6b2",
        },
        success: {
          900: "#014737",
          800: "#03543f",
          700: "#046c4e",
          600: "#057a55",
          500: "#0e9f6e",
          400: "#31c48d",
          300: "#84e1bc",
          200: "#bcf0da",
          100: "#def7ec",
        },
      },
      fontFamily: {
        primary: "'Poppins', sans-serif",
      },
      boxShadow({ theme }) {
        return {
          sm: "2px 2px 6px 0px rgba(164, 165, 172, 0.2)",
          base: "4px 4px 12px 0px rgba(101, 104, 114, 0.2)",
          md: "8px 8px 28px 0px rgba(52, 58, 72, 0.2)",
          lg: "12px 12px 28px 0px rgba(77, 81, 92, 0.2)",
          xl: "14px 14px 32px 0px rgba(52, 58, 72, 0.2)",
          "2xl": "14px 14px 38px 0px rgba(24, 24, 24, 0.2)",
          btn: "4px 4px 12px rgba(0, 0, 0, 0.1)",
          input: `0 0 0 2px ${theme("colors.primary.100")}`,
          inputError: `0 0 0 2px ${theme("colors.danger.300")}`,
          shadownavBar:
            "rgba(0, 0, 0, 0.1) 0px 4px 15px -8px, rgba(0, 0, 0, 0.04) 0px 1px 10px -5px;",
        };
      },
      keyframes: {
        "pulse-scale": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.05)" },
        },
      },
      animation: {
        "pulse-scale": "pulse-scale 900ms ease-in-out infinite alternate",
      },
    },
  },
  plugins: [tailwindAnimatePlugin],
});
