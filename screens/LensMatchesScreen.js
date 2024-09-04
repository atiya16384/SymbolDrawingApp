import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

export default function LensMatchesScreen({ route }) {
  const { matches } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lens Matches</Text>
      <FlatList
        data={matches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});
