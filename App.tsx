/* eslint-disable camelcase */
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Metamorphous_400Regular } from '@expo-google-fonts/metamorphous';
import AppStack from './src/routes/App';

export default function App() {
  const [fontsLoaded] = useFonts({
    Metamorphous_400Regular,
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
