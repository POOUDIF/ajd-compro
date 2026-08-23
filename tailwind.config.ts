import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ajd: {
                    blue: "#191970", // Midnight Blue - Warna Dominan
                    red: "#B22222",  // Fire Brick Red - Warna Aksen
                    white: "#FFFFFF", // Pure White
                    light: "#F8F9FA", // Light Gray untuk background
                    dark: "#0F0F23", // Darker blue untuk variasi
                }
            },
        },
    },
    plugins: [],
};
export default config;