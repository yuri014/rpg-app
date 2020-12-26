/* eslint-disable camelcase */
export interface IMonster {
  actions?: ActionsEntity[] | null;
  alignment: string;
  armor_class: number;
  challenge_rating: number;
  charisma: number;
  condition_immunities?: null[] | null;
  constitution: number;
  damage_immunities?: null[] | null;
  dexterity: number;
  forms?: null;
  hit_dice: string;
  hit_points: number;
  intelligence: number;
  languages: string;
  legendary_actions?: LegendaryActionsEntity[] | null;
  name: string;
  proficiencies?: ProficienciesEntity[] | null;
  reactions?: null;
  senses: Senses;
  size: string;
  special_abilities?: SpecialAbilitiesEntity[] | null;
  speed: Speed;
  strength: number;
  subtype?: null;
  type: string;
  wisdom: number;
  xp: number;
}
interface ActionsEntity {
  attack_bonus?: number | null;
  damage?: DamageEntity[] | null;
  desc: string;
}
interface DamageEntity {
  damage_dice: string;
  damage_type: DamageTypeOrProficiency;
}
interface DamageTypeOrProficiency {
  name: string;
}
interface LegendaryActionsEntity {
  attack_bonus?: number | null;
  desc: string;
  name: string;
}
interface ProficienciesEntity {
  proficiency: DamageTypeOrProficiency;
  value: number;
}
interface Senses {
  blindsight?: null;
  darkvision: string;
  passive_perception: number;
  tremorsense?: null;
  truesight?: null;
}
interface SpecialAbilitiesEntity {
  desc: string;
  name: string;
}
interface Speed {
  burrow?: null;
  climb?: null;
  fly?: null;
  hover?: null;
  swim: string;
  walk: string;
}
