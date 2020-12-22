import { StyleSheet } from 'react-native';
import theme from '../../theme/global';

const styles = StyleSheet.create({
  backgroundPage: {
    backgroundColor: theme.backgroundColor,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 72,
    marginBottom: 24,
  },
});

export default styles;
