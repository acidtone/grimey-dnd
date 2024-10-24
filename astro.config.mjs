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
					label: 'Brew',
					autogenerate: { directory: 'brew' },
				},
				{
					label: 'Presto Change-O',
					autogenerate: { directory: 'presto-change-o' },

					// items: [
						// { label: '', slug: 'presto-change-o' },
						// { label: '', slug: 'presto-change-o/welcome-to-feat-fest' },
						// { label: '', slug: 'presto-change-o/high-price-of-free-stuff' },
						// { label: '', slug: 'presto-change-o/pitchforks-are-out' },
						// { label: '', slug: 'presto-change-o/to-the-alchemists' },
						// { label: '', slug: 'presto-change-o/searching-for-clues' },
						// { label: '', slug: 'presto-change-o/the-chase-is-on' },
						// { label: '', slug: 'presto-change-o/holds-stronghold' },
						// { label: '', slug: 'presto-change-o/feats-of-valor-festival' },
					// ],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Creatures',
					autogenerate: { directory: 'creatures' },
				}
			],
		}),
	],
});
