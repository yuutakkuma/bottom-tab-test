import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSetRecoilState } from 'recoil';
// atoms
import { showBottomTabBarAtom } from '../recoil/atoms/showBottomTabAtom';
// navigation
import { HomeStackScreenProps } from '../navigation/stacks/homeStack/type';

export function HomeScreen() {
  const navigation = useNavigation<HomeStackScreenProps['navigation']>();
  // recoil
  const setShowBottomTabBar = useSetRecoilState(showBottomTabBarAtom);

  const newsScreenNavigation = () => {
    setShowBottomTabBar(false);
    navigation.navigate('NewsScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Home screen.</Text>
      <TouchableOpacity onPress={newsScreenNavigation}>
        <Text style={styles.newsButtonText}>Go News screen.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2f4f4f',
  },
  name: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
  newsButtonText: {
    color: '#f0f8ff',
    fontWeight: '500',
    fontSize: 18,
  },
});
