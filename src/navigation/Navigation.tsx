import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// bottom tab
import { BottomTabNavigator } from './bottomTab/BottomTabNavigator';

export function Navigation() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
