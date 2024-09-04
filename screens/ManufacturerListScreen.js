// screens/ManufacturerListScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ManufacturerListScreen({ route }) {
  const { manufacturer } = route.params;

  return (
    <View style={styles.container}>
      <Image source={manufacturer.logo} style={styles.logo} />
      <Text style={styles.title}>{manufacturer.name}</Text>
      <Text style={styles.description}>{manufacturer.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});
