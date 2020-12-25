import { StyleSheet } from 'react-native';
import theme from '../../../theme/global';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  cardContainer: {
    backgroundColor: 'white',
    marginRight: 12,
    width: 240,
    height: 168,
    padding: 24,
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Metamorphous_400Regular',
    color: theme.backgroundColor,
    fontSize: 18,
  },
  text: {
    fontFamily: 'Signika_400Regular',
    fontSize: 14,
    color: theme.textPrimaryColor,
    marginTop: 12,
  },
});

export const spellsStyle = StyleSheet.create({});
