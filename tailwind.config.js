/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        theme: {
            extend: {
                backgroundImage: {
                    homeImage: "url('/2022-09-0.JPG')",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
