import { gql } from '@apollo/client';

export const GET_CARD_DATA = gql`
  query getAll($randomSpell: Int!, $randomMonster: Int!, $randomWeapon: Int!) {
    spell(skip: $randomSpell) {
      index
      name
      level
      range
      school {
        name
      }
      desc
      classes {
        name
      }
    }
    equipment(filter: { equipment_category: { name: "Weapon" } }, skip: $randomWeapon) {
      equipment_category {
        name
      }
      weapon_category
      weapon_range
      cost {
        quantity
      }
      name
      range {
        normal
      }
      properties {
        name
      }
      damage {
        damage_dice
      }
    }
    monster(skip: $randomMonster) {
      armor_class
      hit_points
      challenge_rating
      actions {
        name
      }
      name
      size
      type
    }
  }
`;

export const GET_ARMOR_DATA = gql`
  query getArmor($randomArmor: Int!) {
    equipment(filter: { equipment_category: { name: "Armor" } }, skip: $randomArmor) {
      equipment_category {
        name
      }
      armor_category
      armor_class {
        base
      }
      cost {
        quantity
      }
      name
      weight
      str_minimum
      stealth_disadvantage
    }
  }
`;
