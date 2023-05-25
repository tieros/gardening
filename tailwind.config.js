/** @type {import('tailwindcss').Config} */
import { customtheme } from './customtheme';

const { colors } = customtheme;

module.exports = {
    content: [
        './pages/**/*{js,ts,jsx,tsx}',
        './src/components/**/*{js,ts,jsx,tsx}',
        './stories/**/*{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                'xm': '350px',
                // => @media (min-width: 380px) { ... }

                'xs': '480px',
                // => @media (min-width: 480px) { ... }

                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            colors,
            fontFamily: {
                rubik: ['Rubik', 'sans-serif', 'system-ui'],
                quicksand: ['Quicksand', 'sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
};
