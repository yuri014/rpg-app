import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import searchIcon from '../../assets/icons/magnifying-glass.png';

import SearchPage from '../pages/Search';
import theme from '../theme/global';

const { Navigator, Screen } = createBottomTabNavigator();

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

function FooterTabs() {
  return (
    <Navigator
      data-test="footer-tabs"
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
        },
        tabStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        labelStyle: {
          fontFamily: 'Metamorphous_400Regular',
          fontSize: 12,
        },
        activeTintColor: theme.backgroundColor,
      }}
    >
      <Screen
        name="Search"
        component={SearchPage}
        data-test="icon-image"
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <Image style={styles.icon} source={searchIcon} />
          ),
        }}
      />
    </Navigator>
  );
}

export default FooterTabs;
