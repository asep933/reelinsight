module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#013d93',
                secondary: '#041836',
                accent: '#ffb400',
                fourth: '#666666',
                light: '#FFFFFF',
            },
        },
    },
    plugins: [require('daisyui'), require('@tailwindcss/forms')],
}
