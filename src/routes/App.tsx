import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import { RootStackParamList } from '../interface/navigations';
import FooterTabs from './FooterTabs';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="Footer Tabs" component={FooterTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
