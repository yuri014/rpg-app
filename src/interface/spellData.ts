/* eslint-disable camelcase */
export interface ISpell {
  __typename: string;
  area_of_effect?: AreaOfEffect | null;
  attack_type?: string | null;
  casting_time: string;
  classes?: ClassesEntityOrDamageTypeOrDcTypeOrSchoolOrSubclassesEntity[] | null;
  components?: string[] | null;
  concentration: boolean;
  damage?: Damage | null;
  dc?: Dc | null;
  desc?: string[] | null;
  duration: string;
  heal_at_slot_level?: null;
  higher_level?: (string | null)[] | null;
  index: string;
  level: number;
  material?: string | null;
  name: string;
  range: string;
  ritual: boolean;
  school: ClassesEntityOrDamageTypeOrDcTypeOrSchoolOrSubclassesEntity;
  subclasses?: (ClassesEntityOrDamageTypeOrDcTypeOrSchoolOrSubclassesEntity1 | null)[] | null;
}
export interface AreaOfEffect {
  __typename: string;
  size: number;
  type: string;
}
export interface ClassesEntityOrDamageTypeOrDcTypeOrSchoolOrSubclassesEntity {
  __typename: string;
  name: string;
}
export interface Damage {
  __typename: string;
  damage_at_slot_level?: DamageAtSlotLevel | null;
  damage_at_character_level?: DamageAtCharacterLevel | null;
  damage_type: ClassesEntityOrDamageTypeOrDcTypeOrSchoolOrSubclassesEntity;
}
export interface DamageAtSlotLevel {
  7?: string | null;
  8?: string | null;
  9?: string | null;
  4?: string | null;
  3?: string | null;
  5?: string | null;
  6?: string | null;
}
export interface DamageAtCharacterLevel {
  1: string;
  5: string;
  11: string;
  17: string;
}
export interface Dc {
  __typename: string;
  dc_success: string;
  dc_type: ClassesEntityOrDamageTypeOrDcTypeOrSchoolOrSubclassesEntity;
  desc?: null;
}
export interface ClassesEntityOrDamageTypeOrDcTypeOrSchoolOrSubclassesEntity1 {
  __typename: string;
  name: string;
}
