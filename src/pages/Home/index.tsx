import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

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

function Home() {
  return (
    <SafeAreaView data-test="home-page">
      <ScrollView style={styles.backgroundPage}>
        <View style={styles.container}>
          <HomeCards
            titleImage={spellTitleIcon}
            cardImage={spellBookIcon}
            header={{
              title: 'Detect Magic',
              subtitle: ['Lv: 1', 'Range: Self', 'School: Divination'],
            }}
            title="Day's Spells"
            data-test="home-card-component"
          >
            <SpellHomeCard classes="Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Wizard">
              For the duration, you sense the presence of magic within 30 feet of you. If you sense
              magic in this way, you can use your action to see a faint aura around any visible
              creature or object in the area that bears magic, and you learn its school of magic, if
              any. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1
              inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.
            </SpellHomeCard>
          </HomeCards>

          <HomeCards
            titleImage={monsterTitleIcon}
            cardImage={monsterCardIcon}
            header={{
              title: 'Griffon',
              subtitle: ['Size: Large', 'Type: Monstrosity'],
            }}
            title="Day's Monster"
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
                  label: 'HP',
                  value: '59',
                  icon: hpIcon,
                },
                {
                  label: 'HD',
                  value: '7d10',
                  icon: diceIcon,
                },
              ]}
              legend={{
                title: 'Actions',
                phrases: 'Multiattack, Beak, Claws',
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
            title="Day's Armor"
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
            title="Day's Weapon"
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
