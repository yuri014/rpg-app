import { StyleSheet } from 'react-native';
import theme from '../../theme/global';

const styles = StyleSheet.create({
  returnButtonContainer: {
    backgroundColor: theme.backgroundColor,
  },
  returnButton: {
    backgroundColor: theme.lightBackgroundColor,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginLeft: 24,
  },
  returnIcon: {
    width: 18,
    height: 18,
  },
});

export default styles;
