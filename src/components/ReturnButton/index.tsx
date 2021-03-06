import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import returnIcon from '../../../assets/icons/broadhead-arrow.png';
import styles from './style';

const ReturnButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.returnButtonContainer}>
      <RectButton onPress={() => navigation?.goBack()} style={styles.returnButton}>
        <Image style={styles.returnIcon} source={returnIcon} />
      </RectButton>
    </View>
  );
};

export default ReturnButton;
