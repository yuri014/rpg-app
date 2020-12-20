/* eslint-disable camelcase */
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Metamorphous_400Regular } from '@expo-google-fonts/metamorphous';
import { Signika_300Light, Signika_400Regular } from '@expo-google-fonts/signika';

import AppStack from './src/routes/App';

export default function App() {
  const [fontsLoaded] = useFonts({
    Metamorphous_400Regular,
    Signika_400Regular,
    Signika_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <AppStack />
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </>
  );
}
