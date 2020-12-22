import React from 'react';
import { Image, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import returnIcon from '../../../assets/icons/broadhead-arrow.png';
import styles from './style';

const ReturnButton = () => (
  <View style={styles.returnButtonContainer}>
    <RectButton style={styles.returnButton}>
      <Image style={styles.returnIcon} source={returnIcon} />
    </RectButton>
  </View>
);

export default ReturnButton;
