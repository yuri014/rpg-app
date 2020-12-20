import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import SearchPage from '../pages/Search';
import { RootStackParamList } from '../interface/navigations';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="Search Page" component={SearchPage} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
