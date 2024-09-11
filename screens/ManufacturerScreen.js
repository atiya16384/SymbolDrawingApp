import React, { useState } from 'react';  // Add useState to the import
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importing Ionicons

export default function ManufacturerScreen({ navigation }) {
  const manufacturers = [
    { name: 'Essilor', logo: require('../assets/Essilor_eye_logo.png'), screen: 'EssilorScreen' },
    { name: 'Carl Zeiss Vision', logo: require('../assets/images.png'), screen: 'ZeissScreen' },
    { name: 'Hoya Vision Care', logo: require('../assets/Hoya_logo.jpg'), screen: 'HoyaScreen' },
    {name: 'American Optical', logo: require('../assets/American_Optical.jpg'), screen: 'AmericanOpticalScreen'},
    { name: 'Jai Kudo', logo: require('../assets/Jai-Kudo-Logo.jpg'), screen: 'JaiKudoScreen' },
    { name: 'Nikon', logo: require('../assets/Nikon-logo.png'), screen: 'NikonScreen' },
    { name: 'Norville', logo: require('../assets/Norville-logo.png'), screen: 'NorvilleScreen' },
    { name: 'Rodenstock', logo: require('../assets/rodenstock-logo.png'), screen: 'RodenstockScreen' },
    { name: 'Pentax', logo: require('../assets/pentex-logo.png'), screen: 'PentaxScreen' },
    { name: 'Seiko', logo: require('../assets/seiko-logo.jpg'), screen: 'SeikoScreen' },
    { name: 'Shamir', logo: require('../assets/shamir-logo.png'), screen: 'ShamirScreen' },
    { name: 'Signet Armorlite', logo: require('../assets/signet-logo.png'), screen: 'SignetArmoliteScreen' },
    { name: 'WLC', logo: require('../assets/wlc-logo.png'), screen: 'WlcScreen' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter manufacturers based on search term
  const filteredManufacturers = manufacturers.filter(manufacturer =>
    manufacturer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Manufacturer..."
            placeholderTextColor="#888"
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
          />
        </View>
      </View>

      <View style={styles.container}>
        {filteredManufacturers.length > 0 ? (
          filteredManufacturers.map((manufacturer) => (
            <TouchableOpacity
              key={manufacturer.name}
              style={styles.card}
              onPress={() => navigation.navigate(manufacturer.screen)}
            >
              <Image source={manufacturer.logo} style={styles.logo} />
              <Text style={styles.text}>{manufacturer.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.noResultContainer}>
            <Text style={styles.noResultText}>No manufacturers found.</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',  // Aligns the search icon and input side by side
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  searchIcon: {
    marginRight: 8,  // Adds spacing between the icon and the input
  },
  searchInput: {
    flex: 1,  // Takes up the remaining width
    fontSize: 16,
    color: '#333',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    width: '40%',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noResultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noResultText: {
    fontSize: 16,
    color: '#888',
  },
});