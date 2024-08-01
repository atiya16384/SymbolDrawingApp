// screens/SymbolInfoScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SymbolInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Symbol Info Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
