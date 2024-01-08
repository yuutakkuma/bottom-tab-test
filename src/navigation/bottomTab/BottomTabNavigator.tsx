import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// stacks
import { HomeStackNavigator } from '../stacks/homeStack/HomeStackNavigator';
// screens
import { SettingsScreen } from '../../screens/SettingsScreen';
// type
import { BottomTabParamList } from './type';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="HomeStackNavigator">
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
