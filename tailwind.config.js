/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
                heading: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
            },
            colors: {
                background: 'var(--bg-primary)',
                foreground: 'var(--text-primary)',
            },
        },
    },
    plugins: [],
}
