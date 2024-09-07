import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ManufacturerScreen({ navigation }) {
  const manufacturers = [
    { name: 'Essilor', logo: require('../assets/Essilor_eye_logo.png'), screen: 'EssilorScreen' },
    { name: 'Carl Zeiss Vision', logo: require('../assets/images.png'), screen: 'ZeissScreen' },
    { name: 'Hoya Vision Care', logo: require('../assets/Hoya_logo.jpg'), screen: 'HoyaScreen' }
    
  ];

  return (
    <View style={styles.container}>
      {manufacturers.map((manufacturer) => (
        <TouchableOpacity
          key={manufacturer.name}
          style={styles.card}
          onPress={() => navigation.navigate(manufacturer.screen)} // Corrected screen names
        >
          <Image source={manufacturer.logo} style={styles.logo} />
          <Text style={styles.text}>{manufacturer.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,  // Reduced padding
    borderRadius: 8,  // Slightly smaller border radius
    backgroundColor: '#FFF',
    elevation: 5,
    width: 100,  // Set a fixed width to control the size of the card
  },
  logo: {
    width: 60,  // Reduced logo size
    height: 60,  // Reduced logo size
    marginBottom: 5,  // Adjusted spacing between logo and text
  },
  text: {
    fontSize: 14,  // Smaller text size
    fontWeight: 'bold',
  },
});
