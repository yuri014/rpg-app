import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import diceIcon from '../../../assets/icons/dice-twenty-faces-twenty.png';

import styles from './styles';

function Landing() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.pageContainer}>
      <View>
        <Text style={styles.title}>RPG-APP</Text>
        <Text style={styles.subtitle}>Simple way to search and save your DnD resources</Text>
      </View>
      <RectButton style={styles.button} onPress={() => navigate('Search Page')}>
        <Text style={styles.start}>Start</Text>
        <Image source={diceIcon} />
      </RectButton>
    </View>
  );
}

export default Landing;
