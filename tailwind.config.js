/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'noble-black-500': '#363a3d',
        'stem-green-500': '#b6f09c',
        'day-blue-900': '#0c1132',
        'noble-black-700': '#131619',
        'noble-black-600': 'rgba(26, 29, 33, 0.8)',
        'noble-black-300': '#9b9c9e',
        'glass-stroke': 'rgba(255, 255, 255, 0.08)',
        'sunglow-500': '#ffd147',
        'noble-black-0': '#fff',
        'purple-blue-300': '#bd9af8',
        'heisenberg-blue-500': '#82dbf7',
        'noble-black-900': '#060708',
        'day-blue-300': '#a6b0f2',
        'noble-black-400': '#686b6e',
        'noble-black-200': '#cdcecf',
        'noble-black-800': '#0d0f10',
        'glass-modal': 'rgba(26, 29, 33, 0.96)',
        'noble-black-100': '#e8e9e9',
        'happy-orange-600': '#e26f20',
      },
      fontFamily: {
        'body-l-semibold': "'Plus Jakarta Sans'",
        inter: 'Inter',
      },
      borderRadius: {
        xl: '20px',
        '3xs': '10px',
        '37xl': '56px',
        '10xs': '3px',
      },
    },
    fontSize: {
      base: '16px',
      xl: '20px',
      xs: '12px',
      sm: '14px',
      lg: '18px',
      '9xl': '28px',
    },
  },
  corePlugins: {
    preflight: false,
  },
}
