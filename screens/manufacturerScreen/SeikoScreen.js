import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SeikoScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Seiko Information</Text>
        <Text>
          Seiko, a Japanese company renowned for precision optics, manufactures high-quality lenses with advanced technology.
        </Text>
        <Text style={styles.sectionTitle}>Key Products:</Text>
        <Text>
          - **Seiko Super-Resistant Coating (SRC)**: Offers scratch resistance and durability.
          - **Seiko SmartZoom**: Lenses designed for digital device use, providing visual comfort and reduced strain.
          - **Seiko Aspheric**: Advanced lens design that reduces distortion, especially for high prescriptions.
        </Text>
        <Text style={styles.sectionTitle}>Global Reach:</Text>
        <Text>
          Seiko lenses are known for their innovative designs and are available across multiple global markets.
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
