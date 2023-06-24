/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				accent: ['Belanosima']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['emerald']
	}
};
