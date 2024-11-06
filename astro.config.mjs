import { defineConfig, envField } from 'astro/config';
//import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import icon from 'astro-icon';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	server: { port: parseInt(import.meta.env.PORT) || 4321, host: true },
	site: 'https://riverscape.ca',
	output: 'server',
	adapter: netlify({
		edgeMiddleware: true,
	}),
	prefetch: true,
	integrations: [sitemap(), icon(), react()],
	env: {
		schema: {
			API_KEY: envField.string({
				context: 'server',
				access: 'secret',
			}),
			LIST_ID: envField.string({
				context: 'server',
				access: 'secret',
			}),
			DATA_CENTER: envField.string({
				context: 'server',
				access: 'secret',
			}),
			// PORT: envField.number({
			// 	context: 'server',
			// 	access: 'public',
			// 	default: 4321,
			// }),
		},
	},
});
