// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Grimey Campaigns',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Brew',
					autogenerate: { directory: 'brew' },
				},
				{
					label: 'Presto Change-O',
					autogenerate: { directory: 'presto-change-o' },
				},
				{
					label: 'Settings',
					autogenerate: { directory: 'settings' },
				},
				{
					label: 'Creatures',
					autogenerate: { directory: 'creatures' },
				}
			],
		}),
	],
});
