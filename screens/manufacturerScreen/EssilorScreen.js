import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function EssilorScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Essilor Information</Text>
        <Text>
          Essilor is a world leader in designing, manufacturing, and distributing ophthalmic lenses, founded in 1972 after the merger of Essel and Silor. The company is known for its innovative vision care products, particularly in corrective lenses. 
        </Text>
        <Text style={styles.sectionTitle}>Key Products:</Text>
        <Text>
          - **Varilux**: The first progressive lens designed to correct presbyopia.
          - **Crizal**: A range of coatings that improve resistance to reflections, scratches, and UV.
          - **Transitions**: Lenses that adjust to light, becoming darker in bright environments and clear indoors.
          - **Eyezen**: Lenses designed to protect the eyes from digital screen exposure and reduce eye strain.
          - **Airwear**: A lightweight and durable lens made of polycarbonate, ideal for active individuals.
        </Text>
        <Text style={styles.sectionTitle}>Global Reach:</Text>
        <Text>
          Essilor operates globally and has manufacturing plants across various countries including the United States, France, and Thailand. The company is committed to research and innovation, continuously developing advanced lenses to meet modern vision needs.
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