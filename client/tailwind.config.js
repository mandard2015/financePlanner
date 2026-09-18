{import('tailwindcss').Config}
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f9ff',
          100: '#eaf4ff',
          200: '#d7eaff',
          300: '#b8d9ff',
          400: '#89bdfd',
          500: '#5a9df5',
          600: '#3b7ee0',
          700: '#2e63b2',
          800: '#2b4f8b',
          900: '#243f6e',
        },
        slate: {
          950: '#0f172a',
        },
        accent: {
          50: '#fef7ed',
          100: '#ffeed3',
          200: '#fcd7a7',
          500: '#e89a2d',
          600: '#d57a14',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
        card: '0 10px 24px rgba(15, 23, 42, 0.10)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}
