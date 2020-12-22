import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';

import returnIcon from '../../../assets/icons/broadhead-arrow.png';
import styles from './style';

const ReturnButton = () => (
  <View style={styles.returnButtonContainer}>
    <TouchableHighlight style={styles.returnButton}>
      <Image style={styles.returnIcon} source={returnIcon} />
    </TouchableHighlight>
  </View>
);

export default ReturnButton;
