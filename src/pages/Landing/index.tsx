import React from 'react';
import { Image, Text, View } from 'react-native';

import diceIcon from '../../../assets/icons/dice-twenty-faces-twenty.png';

import styles from './styles';

function Landing() {
  return (
    <View style={styles.pageContainer}>
      <View>
        <Text style={styles.title}>RPG-APP</Text>
        <Text style={styles.subtitle}>Simple way to search and save your DnD resources</Text>
      </View>
      <View>
        <Text style={styles.start}>Start</Text>
        <Image source={diceIcon} />
      </View>
    </View>
  );
}

export default Landing;
