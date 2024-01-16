/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
		  colors: {
			// flowbite-svelte
			primary: {
			  50: '#46B2CC',
			  100: '#46B2CC',
			  200: '#46B2CC',
			  300: '#46B2CC',
			  400: '#46B2CC',
			  500: '#46B2CC',
			  600: '#46B2CC',
			  700: '#46B2CC',
			  800: '#46B2CC',
			  900: '#46B2CC'
			}
		  }
		}
	  },
	

	plugins: [require('flowbite/plugin'),require('tailwind-scrollbar-hide')],
	darkMode: 'class',
};

module.exports = config;
