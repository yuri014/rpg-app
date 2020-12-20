import { StyleSheet } from 'react-native';
import theme from '../../theme/global';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 48,
    paddingVertical: 96,
    backgroundColor: theme.backgroundColor,
  },
  title: {
    fontFamily: 'Metamorphous_400Regular',
    color: theme.primaryColor,
    fontSize: 48,
    textAlign: 'center',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
    textShadowColor: theme.secondaryColor,
  },
  subtitle: {
    fontFamily: 'Metamorphous_400Regular',
    color: theme.secondaryColor,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 48,
  },
  start: {
    fontFamily: 'Metamorphous_400Regular',
    color: theme.primaryColor,
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 20,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
    textShadowColor: theme.secondaryColor,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
});

export default styles;
