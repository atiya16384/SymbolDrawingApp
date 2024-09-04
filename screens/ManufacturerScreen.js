// screens/ManufacturerScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const manufacturers = [
  {
    id: 1,
    name: 'Essilor',
    logo: require('../assets/Essilor_eye_logo.png'),  // Adjust the path accordingly
    description: 'Essilor is a French-based international ophthalmic optics company.',
  },
  {
    id: 2,
    name: 'Carl Zeiss Vision',
    logo: require('../assets/images.png'),  // Adjust the path accordingly
    description: 'Carl Zeiss Vision is a manufacturer of optical systems and optoelectronics.',
  },
  {
    id: 3,
    name: 'Hoya Vision Care',
    logo: require('../assets/Hoya_logo.jpg'),  // Adjust the path accordingly
    description: 'Hoya is a Japanese company manufacturing optical lenses and healthcare products.',
  },
  // Add more manufacturers as needed
];

export default function ManufacturerScreen({ navigation }) {
  const renderManufacturer = ({ item }) => (
    <TouchableOpacity 
      style={styles.manufacturerButton} 
      onPress={() => navigation.navigate('ManufacturerListScreen', { manufacturer: item })}
    >
      <Image source={item.logo} style={styles.logo} />
      <Text style={styles.manufacturerName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={manufacturers}
        renderItem={renderManufacturer}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  listContainer: {
    justifyContent: 'center',
  },
  manufacturerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  manufacturerName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});
