// screens/ManufacturerListScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ManufacturerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Manufacturer List Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',  // Optional: add a background color
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',  // Optional: change text color
  },
});

