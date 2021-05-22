const colors = require("tailwindcss/colors");

module.exports = {
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx,scss,css}",
		"./src/components/**/*.{js,ts,jsx,tsx,scss,css}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		colors: colors,
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
