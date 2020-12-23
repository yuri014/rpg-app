/* eslint-disable camelcase */
import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Metamorphous_400Regular } from '@expo-google-fonts/metamorphous';
import { Signika_300Light, Signika_400Regular } from '@expo-google-fonts/signika';

import AppStack from './src/routes/App';

const client = new ApolloClient({
  uri: 'https://www.dnd5eapi.co/graphql',
  cache: new InMemoryCache(),
});

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
      <ApolloProvider client={client}>
        <AppStack />
      </ApolloProvider>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </>
  );
}

AppRegistry.registerComponent('MyApplication', () => App);
