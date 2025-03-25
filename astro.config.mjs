import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import icon from 'astro-icon';
//import netlify from '@astrojs/netlify';

export default defineConfig({
	//server: { port: parseInt(import.meta.env.PORT) || 4321, host: true },
	site: 'https://jmckean44.netlify.com',
	output: 'static',
	integrations: [sitemap(), icon(), react()],
	prefetch: true,
	adapter: node({
		mode: 'standalone',
	}),
	// adapter: netlify({
	// 	edgeMiddleware: true,
	// }),
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
				},
			},
		},
	},
	// env: {
	// 	schema: {
	// 		API_KEY: envField.string({
	// 			context: 'server',
	// 			access: 'secret',
	// 		}),
	// 		LIST_ID: envField.string({
	// 			context: 'server',
	// 			access: 'secret',
	// 		}),
	// 		DATA_CENTER: envField.string({
	// 			context: 'server',
	// 			access: 'secret',
	// 		}),
	// 	},
	// },
});
