// Omnisolve AI Tailwind CSS config with custom brand colors
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 theme: {
    extend: {
      colors: {
        primary: '#0F1D40', // Dark Blue
        accent: '#1BC5A3',  // Teal Green
        light: '#F5F7FA',   // Light Gray
        textPrimary: '#1A1A1A',   // Body text
        textSecondary: '#6B7280', // Secondary text
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #0F1D40, #1BC5A3)',
      },
    },
  },
  plugins: [],
};
