import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@pages': resolve(__dirname, './src/pages'),
			'@components': resolve(__dirname, './src/components'),
			'@config': resolve(__dirname, './src/config'),
			'@services': resolve(__dirname, './src/services'),
			'@contexts': resolve(__dirname, './src/contexts'),
			'@helpers': resolve(__dirname, './src/helpers'),
			'@types': resolve(__dirname, './src/types'),
		},
	},
	plugins: [react()],
})
