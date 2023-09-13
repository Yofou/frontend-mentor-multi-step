const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				BG: '#EFF5FF',
				BorderStyle: '#D6D9E6',
				Denim: '#022959',
				Grey: '#9699AA',
				LightBlue: '#ABBCFF',
				LightGrey: '#D6D9E6',
				Orange: '#FFAF7E',
				Pink: '#F9818E',
				Purple: '#483EFF',
				RedErrors: '#EE374A',
				SkyBlue: '#BEE2FD',
				VeryLightGrey: '#F8F9FF',
				White: '#FFFFFF',
			},
			fontFamily: {
				ubunto: ['ubuntu', 'sans-serif']
			},
			fontSize: {
				heading: '2rem',
				bodyL: '1rem',
				bodyM: '0.875rem',
				bodyS: '0.75rem'
			}
		},
	},
	plugins: [
		plugin(({addUtilities, theme}) => {
			addUtilities({
				'.text-heading': {
					fontFamily: theme('fontFamily.ubunto'),
					fontSize: theme('fontSize.heading'),
					fontWeight: 'bold',
				},
				'.text-body-l': {
					fontFamily: theme('fontFamily.ubunto'),
					fontSize: theme('fontSize.bodyL'),
					lineHeight: '1.5625rem'
				},
				'.text-body-m': {
					fontFamily: theme('fontFamily.ubunto'),
					fontSize: theme('fontSize.bodyM'),
				},
				'.text-body-s': {
					fontFamily: theme('fontFamily.ubunto'),
					fontSize: theme('fontSize.bodyS'),
				},
			})
		})
	],
}
