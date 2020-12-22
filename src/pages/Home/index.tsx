import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import styles from './style';
import HomeCards from '../../components/HomeCards';

import spellTitleIcon from '../../../assets/icons/magic-swirl.png';
import spellBookIcon from '../../../assets/icons/spell-book.png';
import SpellHomeCard from '../../components/HomeCards/SpellHomeCard';

import monsterTitleIcon from '../../../assets/icons/wyvern.png';
import monsterCardIcon from '../../../assets/icons/werewolf.png';
import MonsterCard from '../../components/HomeCards/MonsterCard';

import shieldIcon from '../../../assets/icons/round-shield.png';
import hpIcon from '../../../assets/icons/life-bar.png';
import diceIcon from '../../../assets/icons/dice-card.png';

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
            <MonsterCard
              shieldIcon={shieldIcon}
              diceIcon={diceIcon}
              hpIcon={hpIcon}
              actions="Multiattack, Beak, Claws"
            />
          </HomeCards>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
