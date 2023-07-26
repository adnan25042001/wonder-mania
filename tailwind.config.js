/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                battleshipGray: "hsl(0, 0%, 53%)",
                viridianGreen: "hsl(180, 98%, 31%)",
                silverChalice: "hsl(0, 0%, 69%)",
                mikadoYellow: "hsl(47, 98%, 50%)",
                graniteGray: "hsl(0, 0%, 40%)",
                independence: "hsl(219, 20%, 32%)",
                spanishGray: "hsl(0, 0%, 61%)",
                oxfordBlue: "hsl(222, 46%, 17%)",
                blackCoral: "hsl(223, 8%, 44%)",
                eerieBlack: "hsl(210, 11%, 15%)",
                lightGray: "hsl(0, 0%, 80%)",
                white2: "hsl(0, 0%, 98%)",
                white1: "hsl(0, 0%, 100%)",
                black: "hsl(0, 0%, 0%)",
                jet: "hsl(0, 0%, 20%)",
            },
        },
        screens: {
            xs: "480px",
            sm: "768px",
            md: "1060px",
        },
    },
    plugins: [],
};
