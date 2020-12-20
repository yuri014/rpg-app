import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  'Landing': undefined;
  'Search Page': undefined;
};

type NavigateProp = NavigationProp<RootStackParamList, 'Landing'>;

export interface Navigation {
  navigation?: NavigateProp;
}
