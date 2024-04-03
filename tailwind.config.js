/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '380px',
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1400px',
      xxxl: '1680px'
    },
    extend: {
      fontFamily: {
        gotham: ['Gotham', 'Montserrat', 'sans-serif']
      },
      colors: {
        primary: '#1551E5',
        hover: '#316CFF',
        secondary: '#8F9BB3',
        light: '#77829E',
        text: '#171D45',
        text2: '#828EAD',
        danger: '#FF3D71',
        ghost: '#F2F6FF',
        divider: '#E2E4F0',
        blacksec: '#F2F5F9',
        disabled: '#B2BACE',
        bgdisabled: '#E9ECF2'
      },
      boxShadow: {
        button: '0 12px 16px -7px rgb(21 81 229 / 0.44)',
        counter: '0 0 6px 0 #BAC4E0'
      }
    }
  },
  plugins: []
}
