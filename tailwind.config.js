/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
                    colors: {
                        "primary": "#13a4ec",
                        "background-light": "#f6f7f8",
                        "background-dark": "#101c22",
                        "cream": "#efefef",
                        "neonblue": "#00c9ce",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        playful: ["Caveat Brush", "cursive"],
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "full": "9999px"
                    },
                    boxShadow: {
                        'glow-primary': '0 0 20px 0px rgba(19, 164, 236, 0.4)',
                    }
                },
  },
  plugins: [],
}
