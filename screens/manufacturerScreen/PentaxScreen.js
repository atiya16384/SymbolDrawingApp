import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PentaxScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Pentax Information</Text>
        <Text>
          Pentax, known for its high-end optics, brings precision engineering to the world of ophthalmic lenses.
        </Text>
        <Text style={styles.sectionTitle}>Key Products:</Text>
        <Text>
          - **Pentax Prime**: A premium single-vision lens for clarity and sharpness.
          - **Pentax Mirage**: Advanced progressive lenses designed for visual comfort across all distances.
          - **Pentax HD**: High-definition lenses offering superb clarity for high prescriptions.
        </Text>
        <Text style={styles.sectionTitle}>Global Reach:</Text>
        <Text>
          Pentax lenses are distributed globally, known for their precision and durability.
        </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
