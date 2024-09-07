import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ShamirScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Shamir Information</Text>
        <Text>
          Shamir is a leader in the production of custom-designed ophthalmic lenses, known for its cutting-edge technology.
        </Text>
        <Text style={styles.sectionTitle}>Key Products:</Text>
        <Text>
          - **Shamir Autograph III®**: Progressive lenses offering natural vision across all distances.
          - **Shamir Blue Zero®**: Protects against harmful blue light without compromising visual clarity.
          - **Shamir WorkSpace™**: Lenses specifically designed for office environments, optimizing vision at near and intermediate distances.
        </Text>
        <Text style={styles.sectionTitle}>Global Reach:</Text>
        <Text>
          Shamir lenses are available worldwide, praised for their innovative designs and focus on vision ergonomics.
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
