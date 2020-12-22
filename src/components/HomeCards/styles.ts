import { Dimensions, StyleSheet } from 'react-native';

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
    width: Dimensions.get('window').width - 48,
    alignSelf: 'stretch',
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
    fontSize: 22,
  },
  subtitle: {
    fontFamily: 'Metamorphous_400Regular',
    color: theme.contrastColor,
    fontSize: 12,
  },
  cardImages: {
    marginTop: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: 48,
    height: 48,
  },
  imagesDescriptionContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 12,
  },
  descriptionStats: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  labelStat: {
    marginTop: 6,
    color: theme.backgroundColor,
    fontFamily: 'Metamorphous_400Regular',
  },
  valueStatContainer: {
    backgroundColor: theme.backgroundColor,
    marginLeft: 4,
    padding: 1,
    borderRadius: 4,
  },
  valueStat: {
    color: '#fff',
    fontFamily: 'Signika_400Regular',
  },
});

export const spellStyleCard = StyleSheet.create({
  description: {
    marginTop: 24,
    fontFamily: 'Signika_300Light',
    color: theme.textPrimaryColor,
    fontSize: 14,
  },
  classes: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 24,
  },
  classTitle: {
    fontFamily: 'Metamorphous_400Regular',
    color: theme.secondaryColor,
    fontSize: 12,
  },
  classContent: {
    fontFamily: 'Signika_300Light',
    color: theme.textPrimaryColor,
    fontSize: 12,
  },
});
