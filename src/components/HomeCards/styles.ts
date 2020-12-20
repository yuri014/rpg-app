import { StyleSheet } from 'react-native';

import theme from '../../theme/global';

export const cardStyleContainer = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 20,
    shadowColor: theme.secondaryColor,
    elevation: 5,
    padding: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 12,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Metamorphous_400Regular',
    color: theme.backgroundColor,
    fontSize: 16,
  },
  subtitle: {
    fontFamily: 'Metamorphous_400Regular',
    color: theme.contrastColor,
    fontSize: 9,
  },
});

export const spellStyleCard = StyleSheet.create({
  description: {
    marginTop: 12,
    fontFamily: 'Signika_300Light',
    color: theme.textPrimaryColor,
  },
});
