/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // High-end Serif
                display: ['"Cormorant Garamond"', 'serif'],
                // Clean Sans-serif
                sans: ['"Montserrat"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}