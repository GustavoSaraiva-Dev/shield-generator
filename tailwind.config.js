module.exports = {
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx,scss,css}",
		"./src/components/**/*.{js,ts,jsx,tsx,scss,css}",
		"./src/",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
