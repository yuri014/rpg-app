import { StyleSheet } from 'react-native';
import theme from '../../theme/global';

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: theme.backgroundColor,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 36,
    backgroundColor: theme.backgroundColor,
  },
  searchContainer: {
    backgroundColor: theme.lightBackgroundColor,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderRadius: 4,
  },
  searchBar: {
    backgroundColor: theme.lightBackgroundColor,
  },
  searchInput: {
    fontFamily: 'Metamorphous_400Regular',
  },
  shadow: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: '#22282B',
    shadowRadius: 4,
    shadowOpacity: 0.75,
    elevation: 5,
  },
  mainContainer: {
    alignItems: 'center',
  },
  initialText: {
    fontSize: 16,
    color: theme.secondaryColor,
    fontFamily: 'Metamorphous_400Regular',
    textAlign: 'center',
    marginTop: 24,
  },
  buttonGroupContainer: {
    backgroundColor: theme.lightBackgroundColor,
    borderColor: theme.lightBackgroundColor,
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: '100%',
    alignSelf: 'center',
  },
  buttonGroup: {
    backgroundColor: theme.backgroundColor,
    color: theme.lightBackgroundColor,
  },
  buttonGroupActive: {
    backgroundColor: theme.lightBackgroundColor,
  },
  buttonGroupText: {
    color: theme.lightBackgroundColor,
  },
});

export default styles;
