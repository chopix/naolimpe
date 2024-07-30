/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		container: {
			padding: '20px',
			center: true,
		},
		screens: {
			xl: { max: '1162px' },
			lg: { max: '991.98px' },
			md: { max: '767.98px' },
			sm: { max: '479.98px' },
		},
		colors: {
			primary: '#f3d470',
			darkBlue: '#10223e',
			black: '#000000',
			white: '#fff',
			grayBg: '#f9f9f9',
		},
	},
	plugins: [],
}
