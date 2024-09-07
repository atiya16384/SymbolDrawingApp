import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SignetArmoliteScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Signet Armolite (Kodak®) Information</Text>
        <Text>
          Kodak, through Signet Armolite, delivers advanced optical technology in the form of high-performance lenses.
        </Text>
        <Text style={styles.sectionTitle}>Key Products:</Text>
        <Text>
          - **Kodak Unique Lens**: Progressive lens designed for natural vision.
          - **Kodak Clean&CleAR®**: Anti-reflective coating for clear, sharp vision.
          - **Kodak Transitions®**: Light-adaptive lenses that respond to varying lighting conditions.
        </Text>
        <Text style={styles.sectionTitle}>Global Reach:</Text>
        <Text>
          Kodak lenses are available worldwide, trusted for their affordability and advanced lens designs.
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
