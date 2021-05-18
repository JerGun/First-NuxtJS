const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [

        './components/**/*.{vue,js}',

        './layouts/**/*.vue',

        './pages/**/*.vue',

        './plugins/**/*.{js,ts}',

        './nuxt.config.{js,ts}',

    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {

        },
        fontFamily: {
            sans: ['Montserrat'],
            serif: ['Montserrat'],
            mono: ['Montserrat'],
            display: ['Montserrat'],
            body: ['Montserrat']
        },
        colors: {
            ...defaultTheme.colors,
            ... {
                "custom-blue": {
                    default: "#381DDB",
                },
                "light-red": {
                    default: "#FFA3A3",
                }
            },
            
        },
        screens: {
            'sm': { 'min': '375px', 'max': '767px' },
            'md': { 'min': '768px', 'max': '1279px' },
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}