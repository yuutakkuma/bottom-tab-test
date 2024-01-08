import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function NewsScreen() {
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
