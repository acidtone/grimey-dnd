import { z } from 'astro:content';

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
  armor_class:ArmorClassSchema
});

export const StatBlockSchema = z.object({
  strength: z.number(),
  dexterity: z.number(),
  constitution: z.number(),
  intelligence: z.number(),
  wisdom: z.number(),
  charisma: z.number(),
});

export const StrengthsWeaknessesSchema = z.object({
  damage_vulnerabilities: z.array(z.string()),
  damage_resistances: z.array(z.string()),
  damage_immunities: z.array(z.string()),
  condition_immunities: z.array(z.object({
    name: z.string(),
    url: z.string().url(),
  })),
});

// Type for TypeScript users
export type ArmorClass = z.infer<typeof ArmorClassSchema>;
export type BattleStats = z.infer<typeof BattleStatsSchema>;
export type Stats = z.infer<typeof StatBlockSchema>;
export type StrengthsWeaknesses = z.infer<typeof StrengthsWeaknessesSchema>;