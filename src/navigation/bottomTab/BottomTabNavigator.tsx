import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRecoilValue } from 'recoil';
// atoms
import { showBottomTabBarAtom } from '../../recoil/atoms/showBottomTabAtom';
// stacks
import { HomeStackNavigator } from '../stacks/homeStack/HomeStackNavigator';
// screens
import { SettingsScreen } from '../../screens/SettingsScreen';
// type
import { BottomTabParamList } from './type';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabNavigator() {
  // recoil
  const showBottomTabBar = useRecoilValue(showBottomTabBarAtom);

  return (
    <Tab.Navigator
      initialRouteName="HomeStackNavigator"
      screenOptions={{
        tabBarStyle: {
          display: showBottomTabBar ? 'flex' : 'none',
          position: 'absolute',
          bottom: 20,
        },
      }}
    >
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
