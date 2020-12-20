import React from 'react';
import { View } from 'react-native';

import SpellHomeCard from '../../components/HomeCards/SpellHomeCard';
import styles from './style';

function Home() {
  return (
    <View style={styles.container} data-test="home-page">
      <SpellHomeCard />
    </View>
  );
}

export default Home;
