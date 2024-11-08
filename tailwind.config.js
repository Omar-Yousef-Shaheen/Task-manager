/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%", // العرض للشاشات الصغيرة
          md: "728px", // العرض للشاشات المتوسطة
          lg: "984px", // العرض للشاشات الكبيرة
          xl: "1240px", // العرض للشاشات الأكبر
          "2xl": "1480px", // العرض لشاشات أكبر (حسب الحاجة)
        },
      },
    },
  },
  plugins: [],
};
