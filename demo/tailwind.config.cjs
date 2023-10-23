const { xtheme } = require("../dist/index");

const options = {
    themes: [
        {
            name: "halloween",
            selector: "hw",
        },
    ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{js,ts,jsx,tsx,html}"],
    theme: {
        extend: {
            textColor: {
                primary: "#334155",
                "hw-primary": "#F97316",
            },
        },
    },
    plugins: [xtheme(options)],
};
