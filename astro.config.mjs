// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	experimental: {
    contentLayer: true
  },
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
					collapsed: true,
				},
				{
					label: 'Presto Change-O',
					autogenerate: { directory: 'presto-change-o' },
					collapsed: true,
				},
				{
					label: 'Ruins of Thundertree',
					autogenerate: { directory: 'thundertree' },
					collapsed: true,
				},
				{
					label: 'Settings',
					autogenerate: { directory: 'settings' },
					collapsed: true,
				}
			],
		}),
	],
});
