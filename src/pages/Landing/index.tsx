import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Metamorphous_400Regular',
  },
});

function Landing() {
  return (
    <View style={styles.container}>
      <Text>HELLO WORLD</Text>
    </View>
  );
}

export default Landing;
