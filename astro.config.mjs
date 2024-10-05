// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Potent Brew',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '', slug: 'brew' },
						{ label: '', slug: 'brew/beer-cellar' },
						{ label: '', slug: 'brew/mosaic-corridor' },
						{ label: '', slug: 'brew/well-room' },
						{ label: '', slug: 'brew/the-lab' },
						{ label: '', slug: 'brew/storeroom' },
						{ label: '', slug: 'brew/returning-to-glowkindle' },

					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
