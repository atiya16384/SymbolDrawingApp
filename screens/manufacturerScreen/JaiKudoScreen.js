import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function JaiKudoScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Jai Kudo Information</Text>
        <Text>
          Jai Kudo is a UK-based lens manufacturer, offering innovative and affordable lens solutions.
        </Text>
        <Text style={styles.sectionTitle}>Key Products:</Text>
        <Text>
          - **Jai Kudo 1.74**: Ultra-thin lenses ideal for high prescriptions.
          - **Jai Kudo UV Protect**: Offers 100% UV protection.
          - **Jai Kudo DriveWear®**: Lenses that adapt to changing light conditions, designed for driving.
        </Text>
        <Text style={styles.sectionTitle}>Global Reach:</Text>
        <Text>
          Jai Kudo lenses are popular in Europe, known for their cost-effective yet high-quality lens designs.
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
