import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NikonScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Nikon Information</Text>
        <Text>
          Nikon is known for its premium optical lenses, combining innovative Japanese engineering with exceptional craftsmanship.
        </Text>
        <Text style={styles.sectionTitle}>Key Products:</Text>
        <Text>
          - **SeeCoat Blue UV**: Protects against blue light and UV exposure.
          - **Presio Power**: Advanced progressive lenses offering natural vision at all distances.
          - **Nikon Lite**: Ultra-thin lenses with high durability and optical clarity.
        </Text>
        <Text style={styles.sectionTitle}>Global Reach:</Text>
        <Text>
          Nikon lenses are globally recognized for their optical precision and have become a trusted brand in the eyewear industry.
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
