import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import DrawSymbolScreen from '../screens/DrawSymbolScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* App Logo */}
      <Image source={require('../assets/app_logo.png')} style={styles.logo} />

      {/* Welcome Message */}
      <Text style={styles.subtitle}>Draw and identify symbols with ease.</Text>
       <Text style={styles.sectionTitle}>How to Use</Text>
      <Text style={styles.instructions}>
        1. Tap "Start Drawing" to create your symbol. {'\n'}
        2. Use the drawing canvas to draw any symbol. {'\n'}
        3. Identify the symbol with our recognition engine.
      </Text>

      {/* Start Drawing Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Draw Symbol')}>
        <Text style={styles.buttonText}>Start Drawing</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 10,
  },
  instructions: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
});

export default HomeScreen;
