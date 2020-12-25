/* eslint-disable camelcase */
export interface IEquip {
  armor_category?: string | null;
  armor_class?: null;
  capacity?: null;
  category_range: string;
  contents?: null;
  cost: Cost;
  damage: Damage;
  desc?: null[] | null;
  equipment_category: DamageTypeOrPropertiesEntityOrEquipmentCategory;
  gear_category?: null;
  index: string;
  name: string;
  properties?: DamageTypeOrPropertiesEntityOrEquipmentCategory[] | null;
  quantity?: null;
  range: Range;
  special?: null[] | null;
  speed?: null;
  stealth_disadvantage?: null;
  str_minimum?: null;
  throw_range?: null;
  tool_category?: null;
  two_handed_damage?: null;
  vehicle_category?: null;
  weapon_category: string;
  weapon_range: string;
  weight: number;
}
interface Cost {
  quantity: number;
  unit: string;
}
interface Damage {
  damage_dice: string;
  damage_type: DamageTypeOrPropertiesEntityOrEquipmentCategory;
}
interface DamageTypeOrPropertiesEntityOrEquipmentCategory {
  name: string;
}
interface Range {
  normal: number;
  long?: null;
}
