import { z } from "zod";

const SpellSchema = z.object({
  index: z.string(), // Unique identifier for the spell
  name: z.string(), // Spell name
  desc: z.array(z.string()), // Description of the spell
  higher_level: z.array(z.string()).optional(), // Description for casting at higher levels
  range: z.string(), // Range of the spell
  components: z.array(z.string()), // Components required (e.g., V, S, M)
  material: z.string().optional(), // Material components, if any
  ritual: z.boolean(), // Whether the spell can be cast as a ritual
  duration: z.string(), // Duration of the spell
  concentration: z.boolean(), // Whether the spell requires concentration
  casting_time: z.string(), // Casting time of the spell
  level: z.number(), // Spell level (0 for cantrips)
  attack_type: z.string().optional(), // Type of attack, if applicable (e.g., "melee" or "ranged")
  damage: z
    .object({
      damage_type: z.object({
        name: z.string(),
        url: z.string(),
      }).optional(), // Damage type (e.g., "Fire", "Necrotic")
      damage_at_slot_level: z.record(z.string(), z.string()).optional(), // Damage by spell level
      damage_at_character_level: z.record(z.string(), z.string()).optional(), // Damage by character level
    })
    .optional(),
  school: z.object({
    name: z.string(), // School of magic (e.g., "Evocation", "Necromancy")
    url: z.string(),
  }),
  classes: z.array(
    z.object({
      name: z.string(), // Class name (e.g., "Wizard", "Cleric")
      url: z.string(),
    })
  ), // Classes that can cast the spell
  subclasses: z.array(
    z.object({
      name: z.string(), // Subclass name (e.g., "Divine Soul", "Arcane Trickster")
      url: z.string(),
    })
  ).optional(), // Subclasses that can cast the spell
  url: z.string(), // URL to the spell resource in the API
});