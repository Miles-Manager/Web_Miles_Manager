/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'project-blue': {
					100: '#137BC1',
					200: '#145682',
					300: '#092F49',
				},
				'project-gray': {
					500: '#36393b',
					700: '#222323',
					900: '#151616',
				},
			},
		},
	},
	plugins: [],
}
