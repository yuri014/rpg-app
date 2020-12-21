import { StyleSheet } from 'react-native';

import theme from '../../theme/global';

export const cardStyleContainer = StyleSheet.create({
  mainTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  mainTitle: {
    color: theme.primaryColor,
    fontSize: 24,
    fontFamily: 'Metamorphous_400Regular',
  },
  iconTitle: {
    width: 30,
    height: 30,
    marginLeft: 2,
  },
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
    fontSize: 10,
  },
});

export const spellStyleCard = StyleSheet.create({
  description: {
    marginTop: 12,
    fontFamily: 'Signika_300Light',
    color: theme.textPrimaryColor,
  },
  classes: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  classTitle: {
    fontFamily: 'Metamorphous_400Regular',
    color: theme.secondaryColor,
    fontSize: 10,
  },
  classContent: {
    fontFamily: 'Signika_300Light',
    color: theme.textPrimaryColor,
    fontSize: 10,
  },
});
