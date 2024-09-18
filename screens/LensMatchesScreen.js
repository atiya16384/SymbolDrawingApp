import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

export default function LensMatchesScreen({ route }) {
  const { matches } = route.params;

  useEffect(() => {
    console.log('Lens matches received:', matches);
  }, [matches]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lens Matches</Text>
      {matches && matches.length > 0 ? (
        <FlatList
          data={matches}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.manufacturer}>{item.manufacturer}</Text>
              <Text style={styles.index}>Index: {item.index}</Text>
              <Text style={styles.fitting_cross}>Fitting Cross: {item.fitting_cross}</Text>
              {item.engraving_ref && (
                <Image source={{ uri: item.engraving_ref }} style={styles.image} />
              )}
            </View>
          )}
        />
      ) : (
        <Text>No matching lenses found.</Text>
      )}
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
  manufacturer: {
    fontSize: 16,
    color: '#666',
  },
  fitting_cross: {
    fontSize: 16,
    color: '#666',
  },
});
