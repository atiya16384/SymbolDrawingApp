import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NorvilleScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Norville Information</Text>
        <Text>
          Norville, a UK-based optical company, is known for its high-quality custom lens solutions for diverse needs.
        </Text>
        <Text style={styles.sectionTitle}>Key Products:</Text>
        <Text>
          - **Norville Polarized**: Lenses that reduce glare, ideal for outdoor use.
          - **Norville ThinLite®**: Ultra-thin lenses designed for aesthetic appeal without compromising on strength.
          - **Norville AR-Coated**: Anti-reflective lenses that enhance clarity and reduce eye strain.
        </Text>
        <Text style={styles.sectionTitle}>Global Reach:</Text>
        <Text>
          Norville lenses are predominantly sold across the UK and Europe, known for their custom solutions and attention to detail.
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
