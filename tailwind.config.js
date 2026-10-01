/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#FFFFFF',
                'bg-secondary': '#FAFAFA',
                'text-primary': '#0F172A',
                'text-secondary': '#64748B',
                'accent-primary': '#2563EB',
                'accent-secondary': '#4F46E5',
                'border-light': '#F1F5F9',
                'surface': '#F8FAFC',
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'hover': '0 10px 30px -5px rgba(37, 99, 235, 0.1)',
                'glow': '0 0 20px rgba(37, 99, 235, 0.15)',
                'premium': '0 10px 40px -10px rgba(0,0,0,0.08)',
                'floating': '0 20px 40px -10px rgba(0,0,0,0.1)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
            },
            backgroundImage: {
                'mesh': 'radial-gradient(at 40% 20%, hsla(228,100%,95%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(210,100%,95%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(230,100%,98%,1) 0px, transparent 50%)',
            },
            animation: {
                'gradient-x': 'gradient-x 3s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 8s ease-in-out infinite 2s',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
