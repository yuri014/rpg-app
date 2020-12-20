import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  'Landing': undefined;
  'Footer Tabs': undefined;
};

type NavigateProp = NavigationProp<RootStackParamList, 'Landing'>;

export interface Navigation {
  navigation?: NavigateProp;
}
