import { gql } from '@apollo/client';

export const SEARCH_SPELL_DATA = gql`
  query filterSpell($search: String!) {
    spell(filter: { index: $search }) {
      area_of_effect {
        size
        type
      }
      attack_type
      casting_time
      classes {
        name
      }
      components
      concentration
      damage {
        damage_at_slot_level
        damage_at_character_level
        damage_type {
          name
        }
      }
      dc {
        dc_success
        dc_type {
          name
        }
        desc
      }
      desc
      duration
      heal_at_slot_level
      higher_level
      level
      material
      name
      range
      ritual
      school {
        name
      }
      subclasses {
        name
      }
    }
  }
`;

export const SEARCH_EQUIP_DATA = gql`
  query filterArmor($search: String!) {
    equipment(filter: { index: $search }) {
      armor_category
      armor_class {
        base
      }
      capacity
      category_range
      contents {
        item {
          name
        }
        quantity
      }
      cost {
        quantity
      }
      damage {
        damage_dice
        damage_type {
          name
        }
      }
      desc
      equipment_category {
        name
      }
      gear_category {
        name
      }
      name
      properties {
        name
      }
      quantity
      range {
        normal
        long
      }
      special
      speed {
        quantity
        unit
      }
      stealth_disadvantage
      str_minimum
      throw_range {
        normal
        long
      }
      tool_category
      two_handed_damage {
        damage_dice
        damage_type {
          name
        }
      }
      vehicle_category
      weapon_category
      weapon_range
      weight
    }
  }
`;

export const SEARCH_MONSTER_DATA = gql`
  query filterMonsters($search: String!) {
    monster(filter: { index: $search }) {
      actions {
        attack_bonus
        damage {
          damage_dice
          damage_type {
            name
          }
        }
        desc
      }
      alignment
      armor_class
      challenge_rating
      charisma
      condition_immunities {
        name
      }
      constitution
      damage_immunities
      dexterity
      forms {
        name
      }
      hit_dice
      hit_points
      intelligence
      languages
      legendary_actions {
        attack_bonus
        desc
        name
      }
      name
      proficiencies {
        proficiency {
          name
        }
        value
      }
      reactions {
        desc
        name
      }
      senses {
        blindsight
        darkvision
        passive_perception
        tremorsense
        truesight
      }
      size
      special_abilities {
        desc
        name
      }
      speed {
        burrow
        climb
        fly
        hover
        swim
        walk
      }
      strength
      subtype
      type
      wisdom
      xp
    }
  }
`;
