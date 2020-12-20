import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import searchIcon from '../../assets/icons/magnifying-glass.png';
import homeIcon from '../../assets/icons/wooden-door.png';
import SearchPage from '../pages/Search';
import theme from '../theme/global';
import Home from '../pages/Home';

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
          height: 48,
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
        inactiveBackgroundColor: '#fff',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#86939e',
        activeTintColor: theme.backgroundColor,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        data-test="icon-image"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Image style={styles.icon} source={homeIcon} />,
        }}
      />
      <Screen
        name="Search"
        component={SearchPage}
        data-test="icon-image"
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => <Image style={styles.icon} source={searchIcon} />,
        }}
      />
    </Navigator>
  );
}

export default FooterTabs;
