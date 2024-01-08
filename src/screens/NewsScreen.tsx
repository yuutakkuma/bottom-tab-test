import React, { useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { useSetRecoilState } from 'recoil';
// atoms
import { showBottomTabBarAtom } from '../recoil/atoms/showBottomTabAtom';

export function NewsScreen() {
  // recoil
  const setShowBottomTabBar = useSetRecoilState(showBottomTabBarAtom);

  useEffect(() => {
    return () => {
      if (Platform.OS === 'android') {
        setShowBottomTabBar(true);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>News screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4169e1',
  },
  name: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
});
