import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// screens
import { HomeScreen } from '../../../screens/HomeScreen';
import { NewsScreen } from '../../../screens/NewsScreen';
// type
import { HomeStackParamList } from './type';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Home Screen',
        }}
      />
      <Stack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>
  );
}
