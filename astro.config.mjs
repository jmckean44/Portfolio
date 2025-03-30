import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import icon from 'astro-icon';
//import netlify from '@astrojs/netlify';

export default defineConfig({
	//server: { port: parseInt(import.meta.env.PORT) || 4321, host: true },
	site: 'https://jmckean44.netlify.app',
	output: 'static',
	trailingSlash: 'never',
	integrations: [sitemap(), icon(), react()],
	adapter: node({
		mode: 'standalone',
	}),
	//prefetch: true,
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
				},
			},
		},
	},
});
