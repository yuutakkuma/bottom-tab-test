import { NavigatorScreenParams } from '@react-navigation/core';
import { HomeStackParamList } from '../stacks/homeStack/type';

export type BottomTabParamList = {
  HomeStackNavigator: NavigatorScreenParams<HomeStackParamList>;
  SettingsScreen: undefined;
};
