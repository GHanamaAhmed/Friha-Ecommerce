/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			FontFace:{
				"Hacen-Tunisia":"Hacen Tunisia"
			},
			colors: {
				primaryColor: "#191919",
				scandaryColor:"#1FAB71",
				basketColor:"#403A63",
				card1: "#363636",
				card2: "#666666",
				lightContent: "#A7A7A7",
				lightSolid: "#CCCCCC",
				trueblue: "#429CBC",
				azure: "#3185FC",
			},
			fontSize: {
				32: "32px",
				40: "40px",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes:{
				appear: {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				  }
			}
		},
	},
	plugins: [require('prettier-plugin-tailwindcss')],
});
