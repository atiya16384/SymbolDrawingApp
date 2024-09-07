import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function WlcScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>WLC Information</Text>
        <Text>
          WLC, a company specializing in ophthalmic lenses, offers innovative lens solutions for both prescription and non-prescription needs.
        </Text>
        <Text style={styles.sectionTitle}>Key Products:</Text>
        <Text>
          - **WLC Digital Lenses**: Designed to reduce digital eye strain and protect against blue light.
          - **WLC Polarized**: Ideal for outdoor environments, these lenses reduce glare for superior visual comfort.
        </Text>
        <Text style={styles.sectionTitle}>Global Reach:</Text>
        <Text>
          WLC lenses are popular across Asia and Europe, offering a variety of custom solutions for different vision needs.
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
