import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AmericanOpticalScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>American Optical (AO) Information</Text>
        <Text>
          American Optical, commonly known as AO, has a long history in lens manufacturing and optical innovation, especially in the military sector.
        </Text>
        <Text style={styles.sectionTitle}>Key Products:</Text>
        <Text>
          - **AO UV**: Offers superior UV protection for outdoor use.
          - **AO Optima®**: A range of lenses designed for crisp vision with minimal distortion.
          - **AO EasyWear®**: Lightweight, durable lenses ideal for everyday use.
        </Text>
        <Text style={styles.sectionTitle}>Global Reach:</Text>
        <Text>
          AO lenses are available worldwide, respected for their durability and high optical performance.
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
