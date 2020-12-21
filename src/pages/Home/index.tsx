import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import HomeCards from '../../components/HomeCards';
import styles from './style';
import spellTitleIcon from '../../../assets/icons/magic-swirl.png';
import spellBookIcon from '../../../assets/icons/spell-book.png';
import SpellHomeCard from '../../components/HomeCards/SpellHomeCard';

function Home() {
  return (
    <SafeAreaView data-test="home-page">
      <ScrollView>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
