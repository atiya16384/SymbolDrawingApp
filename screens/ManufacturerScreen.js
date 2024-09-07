import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

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

  return (
    <ScrollView>
      <View style={styles.container}>
        {manufacturers.map((manufacturer) => (
          <TouchableOpacity
            key={manufacturer.name}
            style={styles.card}
            onPress={() => navigation.navigate(manufacturer.screen)}
          >
            <Image source={manufacturer.logo} style={styles.logo} />
            <Text style={styles.text}>{manufacturer.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',  // Allows cards to wrap to the next row
    justifyContent: 'space-between',  // Distribute cards evenly
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
    width: '40%',  // Set width to 30% to fit 3 cards per row
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
});