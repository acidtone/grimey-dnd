import { z } from 'astro:content';

export const ArmorClassSchema = z.array(z.object({
  type: z.string(),
  value: z.number(),
  armor: z.array(z.object({
    name: z.string(),
    url: z.string().url(),
  })).optional(),
}));

// Type for TypeScript users
export type ArmorClass = z.infer<typeof ArmorClassSchema>;

export const StatBlockSchema = z.object({
  strength: z.number(),
  dexterity: z.number(),
  constitution: z.number(),
  intelligence: z.number(),
  wisdom: z.number(),
  charisma: z.number(),
});

// Type for TypeScript users
export type Stats = z.infer<typeof StatBlockSchema>;