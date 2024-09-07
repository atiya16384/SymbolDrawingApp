import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RodenstockScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Rodenstock Information</Text>
        <Text>
          Rodenstock is a German-based manufacturer, renowned for its high-quality precision lenses and frames since 1877.
        </Text>
        <Text style={styles.sectionTitle}>Key Products:</Text>
        <Text>
          - **Impression FreeSign® 3**: Customized progressive lenses tailored to individual needs.
          - **Perfalit**: High-precision single vision lenses offering exceptional clarity.
          - **ColorMatic®**: Adaptive lenses that change tint based on light conditions.
        </Text>
        <Text style={styles.sectionTitle}>Global Reach:</Text>
        <Text>
          Rodenstock has a global presence, recognized for its precision optics and innovative lens technology.
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
