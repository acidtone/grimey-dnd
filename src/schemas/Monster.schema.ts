import { z } from 'astro:content';

// Helper schemas
const AbilityScoreSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

const ActionSchema = z.object({
  name: z.string(),
  desc: z.string(),
  attack_bonus: z.number().optional(),
  damage: z.array(z.object({
    damage_type: z.object({
      name: z.string(),
      url: z.string().url(),
    }),
    damage_dice: z.string(),
  })).optional(),
});

const SpeedSchema = z.object({
  walk: z.string().optional(),
  fly: z.string().optional(),
  swim: z.string().optional(),
  climb: z.string().optional(),
  burrow: z.string().optional(),
});

const ProficiencySchema = z.object({
  value: z.number(),
  proficiency: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

const SenseSchema = z.object({
  blindsight: z.string().optional(),
  darkvision: z.string().optional(),
  passive_perception: z.number().optional(),
  tremorsense: z.string().optional(),
  truesight: z.string().optional(),
});

const SpecialAbilitySchema = z.object({
  name: z.string(),
  desc: z.string(),
  usage: z.object({
    type: z.string(),
    times: z.number().optional(),
    rest_types: z.array(z.string()).optional(),
  }).optional(),
});

// Main Monster Schema
export const MonsterSchema = z.object({
  index: z.string(),
  name: z.string(),
  size: z.enum(['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan']),
  type: z.string(),
  subtype: z.string().nullable(),
  alignment: z.string(),
  armor_class: z.array(z.object({
    type: z.string(),
    value: z.number(),
    armor: z.array(z.object({
      name: z.string(),
      url: z.string().url(),
    })).optional(),
  })),
  hit_points: z.number(),
  hit_dice: z.string(),
  hit_points_roll: z.string(),
  speed: SpeedSchema,
  strength: z.number(),
  dexterity: z.number(),
  constitution: z.number(),
  intelligence: z.number(),
  wisdom: z.number(),
  charisma: z.number(),
  proficiencies: z.array(ProficiencySchema),
  damage_vulnerabilities: z.array(z.string()),
  damage_resistances: z.array(z.string()),
  damage_immunities: z.array(z.string()),
  condition_immunities: z.array(z.object({
    name: z.string(),
    url: z.string().url(),
  })),
  senses: SenseSchema,
  languages: z.string(),
  challenge_rating: z.number(),
  xp: z.number(),
  special_abilities: z.array(SpecialAbilitySchema).optional(),
  actions: z.array(ActionSchema),
  legendary_actions: z.array(ActionSchema).optional(),
  reactions: z.array(z.object({
    name: z.string(),
    desc: z.string(),
  })).optional(),
  image: z.string().url().optional(),
  url: z.string().url(),
});

// Type for TypeScript users
export type Monster = z.infer<typeof MonsterSchema>;