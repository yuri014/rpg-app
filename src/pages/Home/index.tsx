import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useQuery } from '@apollo/client';
import AppLoading from 'expo-app-loading';

import styles from './style';
import HomeCards from '../../components/HomeCards';
import DefaultCard from '../../components/HomeCards/DefaultCard';
import ReturnButton from '../../components/ReturnButton';
import { GET_ARMOR_DATA, GET_CARD_DATA } from './homeQuery';

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
import swordClash from '../../../assets/icons/sword-clash.png';

function Home() {
  const randomValue = (max: number) => Math.round(Math.random() * max);
  const [random, setRandom] = useState({
    randomSpell: 0,
    randomWeapon: 0,
    randomArmor: 0,
    randomMonster: 0,
  });

  useEffect(() => {
    const randomSpell = randomValue(318);
    const randomWeapon = randomValue(36);
    const randomMonster = randomValue(331);
    const randomArmor = randomValue(12);
    setRandom({
      randomSpell,
      randomWeapon,
      randomMonster,
      randomArmor,
    });
  }, []);

  const { loading, data } = useQuery(GET_CARD_DATA, {
    variables: {
      randomSpell: random.randomSpell,
      randomWeapon: random.randomWeapon,
      randomMonster: random.randomMonster,
    },
  });

  const { loading: loadingArmor, data: armorData } = useQuery(GET_ARMOR_DATA, {
    variables: {
      randomArmor: random.randomArmor,
    },
  });

  if (loading || loadingArmor) return <AppLoading />;

  const handleCardLegendArray = (legend: []) => legend.map((name: { [key: string]: string }) => name.name).join(', ');

  return (
    <SafeAreaView>
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
          >
            <SpellHomeCard classes={handleCardLegendArray(data.spell.classes)}>
              {data.spell.desc}
            </SpellHomeCard>
          </HomeCards>

          <HomeCards
            titleImage={weaponTitleIcon}
            cardImage={weaponCardIcon}
            header={{
              title: data.equipment.name,
              subtitle: [
                `Category: ${data.equipment.weapon_category}`,
                `Range: ${data.equipment.weapon_range}`,
              ],
            }}
            title="Lucky Weapon"
          >
            <DefaultCard
              items={[
                {
                  label: 'DD',
                  value: data.equipment.damage.damage_dice,
                  icon: diceIcon,
                },
                {
                  label: 'Range',
                  value: data.equipment.range.normal,
                  icon: rangeIcon,
                },
                {
                  label: 'Cost',
                  value: `${data.equipment.cost.quantity} GP`,
                  icon: cashIcon,
                },
              ]}
              legend={{
                title: 'Properties',
                phrases: handleCardLegendArray(data.equipment.properties),
              }}
            />
          </HomeCards>

          <HomeCards
            titleImage={armorTitleIcon}
            cardImage={armorCardIcon}
            header={{
              title: armorData.equipment.name,
              subtitle: [
                `Category: ${armorData.equipment.equipment_category.name}`,
                `Weight: ${armorData.equipment.weight}`,
              ],
            }}
            title="Lucky Armor"
          >
            <DefaultCard
              items={[
                {
                  label: 'AC',
                  value: armorData.equipment.armor_class.base,
                  icon: shieldIcon,
                },
                {
                  label: 'Min Str',
                  value: armorData.equipment.str_minimum,
                  icon: strIcon,
                },
                {
                  label: 'Cost',
                  value: `${armorData.equipment.cost.quantity} GP`,
                  icon: cashIcon,
                },
              ]}
              legend={{
                title: 'Stealth Disadvantage',
                phrases: `${armorData.equipment.stealth_disadvantage}`,
              }}
            />
          </HomeCards>

          <HomeCards
            titleImage={monsterTitleIcon}
            cardImage={monsterCardIcon}
            header={{
              title: data.monster.name,
              subtitle: [`Size: ${data.monster.size}`, `Type: ${data.monster.type}`],
            }}
            title="Lucky Monster"
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
                  label: 'CR',
                  value: data.monster.challenge_rating,
                  icon: swordClash,
                },
              ]}
              legend={{
                title: 'Actions',
                phrases: handleCardLegendArray(data.monster.actions),
              }}
            />
          </HomeCards>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
