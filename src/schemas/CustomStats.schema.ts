import { z } from 'astro:content';
import { ProficiencySchema } from './Monster.schema'

export const ArmorClassSchema = z.array(z.object({
  type: z.string(),
  value: z.number(),
  armor: z.array(z.object({
    name: z.string(),
    url: z.string().url(),
  })).optional(),
}));

export const BattleStatsSchema = z.object({
  hit_points: z.number(),
  armor_class:ArmorClassSchema,
  proficiencies: z.array(ProficiencySchema),
  damage_vulnerabilities: z.array(z.string()),
  damage_resistances: z.array(z.string()),
  damage_immunities: z.array(z.string()),
  condition_immunities: z.array(z.object({
    name: z.string(),
    url: z.string().url(),
  }))
});

export const StatBlockSchema = z.object({
  strength: z.number(),
  dexterity: z.number(),
  constitution: z.number(),
  intelligence: z.number(),
  wisdom: z.number(),
  charisma: z.number(),
});

// Type for TypeScript users
export type ArmorClass = z.infer<typeof ArmorClassSchema>;
export type BattleStats = z.infer<typeof BattleStatsSchema>;
export type Stats = z.infer<typeof StatBlockSchema>;