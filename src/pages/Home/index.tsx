import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import AppLoading from 'expo-app-loading';

import styles from './style';
import HomeCards from '../../components/HomeCards';

import spellTitleIcon from '../../../assets/icons/magic-swirl.png';
import spellBookIcon from '../../../assets/icons/spell-book.png';
import SpellHomeCard from '../../components/HomeCards/SpellHomeCard';

import monsterTitleIcon from '../../../assets/icons/wyvern.png';
import monsterCardIcon from '../../../assets/icons/werewolf.png';

import armorTitleIcon from '../../../assets/icons/battle-gear.png';
import armorCardIcon from '../../../assets/icons/heavy-helm.png';

import weaponTitleIcon from '../../../assets/icons/crossed-swords.png';
import weaponCardIcon from '../../../assets/icons/scabbard.png';

import shieldIcon from '../../../assets/icons/round-shield.png';
import hpIcon from '../../../assets/icons/life-bar.png';
import diceIcon from '../../../assets/icons/dice-card.png';
import strIcon from '../../../assets/icons/biceps.png';
import cashIcon from '../../../assets/icons/cash.png';
import rangeIcon from '../../../assets/icons/archery-target.png';

import DefaultCard from '../../components/HomeCards/DefaultCard';
import ReturnButton from '../../components/ReturnButton';

function Home() {
  const randomValue = (max: number) => Math.round(Math.random() * (1 - max) + max);
  const [random, setRandom] = useState({ randomSpell: 0, randomWeapon: 0, randomMonster: 0 });

  const GET_CARD_DATA = gql`
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
      }
      monster(skip: $randomMonster) {
        armor_class
        hit_points
        hit_dice
        actions {
          name
        }
        name
        size
        type
      }
    }
  `;

  useEffect(() => {
    const randomSpell = randomValue(319);
    const randomWeapon = randomValue(64);
    const randomMonster = randomValue(322);
    setRandom({
      randomSpell,
      randomWeapon,
      randomMonster,
    });
  }, []);

  const { loading, data } = useQuery(GET_CARD_DATA, {
    variables: {
      randomSpell: random.randomSpell,
      randomWeapon: random.randomWeapon,
      randomMonster: random.randomMonster,
    },
  });

  if (loading) return <AppLoading />;

  const handleCardLegendArray = (legend: []) => legend.map((name: { [key: string]: string }) => name.name).join(', ');

  return (
    <SafeAreaView data-test="home-page">
      <ScrollView style={styles.backgroundPage}>
        <ReturnButton />
        <View style={styles.container}>
          <HomeCards
            titleImage={spellTitleIcon}
            cardImage={spellBookIcon}
            header={{
              title: data.spell.name,
              subtitle: [
                `Lv: ${data.spell.level}`,
                `Range: ${data.spell.range}`,
                `School: ${data.spell.school.name}`,
              ],
            }}
            title="Lucky Spell"
            data-test="home-card-component"
          >
            <SpellHomeCard
              classes={handleCardLegendArray(data.spell.classes)}
            >
              {data.spell.desc}
            </SpellHomeCard>
          </HomeCards>

          <HomeCards
            titleImage={monsterTitleIcon}
            cardImage={monsterCardIcon}
            header={{
              title: data.monster.name,
              subtitle: [`Size: ${data.monster.size}`, `Type: ${data.monster.type}`],
            }}
            title="Lucky Monster"
            data-test="home-card-component"
          >
            <DefaultCard
              items={[
                {
                  label: 'AC',
                  value: data.monster.armor_class,
                  icon: shieldIcon,
                },
                {
                  label: 'HP',
                  value: data.monster.hit_points,
                  icon: hpIcon,
                },
                {
                  label: 'HD',
                  value: data.monster.hit_dice,
                  icon: diceIcon,
                },
              ]}
              legend={{
                title: 'Actions',
                phrases: handleCardLegendArray(data.monster.actions),
              }}
            />
          </HomeCards>

          <HomeCards
            titleImage={armorTitleIcon}
            cardImage={armorCardIcon}
            header={{
              title: 'Padded',
              subtitle: ['Category: Light', 'Weight: 8'],
            }}
            title="Lucky Armor"
            data-test="home-card-component"
          >
            <DefaultCard
              items={[
                {
                  label: 'AC',
                  value: '11',
                  icon: shieldIcon,
                },
                {
                  label: 'Min Str',
                  value: '0',
                  icon: strIcon,
                },
                {
                  label: 'Cost',
                  value: '5',
                  icon: cashIcon,
                },
              ]}
              legend={{
                title: 'Strength Minimum',
                phrases: '15',
              }}
            />
          </HomeCards>

          <HomeCards
            titleImage={weaponTitleIcon}
            cardImage={weaponCardIcon}
            header={{
              title: 'Greataxe',
              subtitle: ['Category: Martial', 'Range: Melee'],
            }}
            title="Lucky Weapon"
            data-test="home-card-component"
          >
            <DefaultCard
              items={[
                {
                  label: 'DD',
                  value: '1d12',
                  icon: diceIcon,
                },
                {
                  label: 'Range',
                  value: '5',
                  icon: rangeIcon,
                },
                {
                  label: 'Cost',
                  value: '30',
                  icon: cashIcon,
                },
              ]}
              legend={{
                title: 'Properties',
                phrases: 'Two-handed, Heavy',
              }}
            />
          </HomeCards>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
