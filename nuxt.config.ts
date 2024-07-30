// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css', '~/assets/css/null.css'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	modules: [
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Roboto: true,
				},
			},
		],
	],
})
