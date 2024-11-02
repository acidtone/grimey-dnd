import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { MonsterSchema } from '../schemas/Monster.schema';

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	monster: defineCollection({ schema: MonsterSchema })
};
