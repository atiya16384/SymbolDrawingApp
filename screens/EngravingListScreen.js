import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, Image, View, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';


// Manually import all engraving files
const engravingsList = [
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.19.48.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.19.51.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.19.53.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.19.56.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.19.59.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.20.01.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.20.05.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.20.03.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.20.12.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.21.01.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.21.06.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.21.19.png'),
    // require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.21.22.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.21.15.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.21.37.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.21.33.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.21.24.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.21.29.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.21.40.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.21.42.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.21.45.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.22.29.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.22.19.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.22.31.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.22.37.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.22.35.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.22.40.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.22.43.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.22.46.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.22.56.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.22.52.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.22.49.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.02.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.22.59.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.05.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.07.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.10.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.15.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.19.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.27.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.21.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.30.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.33.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.47.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.35.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.50.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.44.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.52.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.55.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.23.57.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.10.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.07.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.12.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.04.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.21.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.15.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.19.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.24.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.29.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.32.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.35.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.44.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.49.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.39.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.52.png'),
    require('../assets/extracted_engravings/Screenshot_2024-08-05_at_17.24.47.png'),


 
];
const windowWidth = Dimensions.get('window').width;

export default function EngravingListScreen() {
  const [engravings, setEngravings] = useState([]);

  useEffect(() => {
    // Load engravings from the engravingsList array
    const loadEngravings = async () => {
      try {
        const loadedEngravings = engravingsList
          .map((engraving, index) => ({

            source: engraving,  // Set the image source
          }))
          .filter(engraving => engraving.source);  // Filter out null or undefined images

        setEngravings(loadedEngravings);
      } catch (error) {
        console.error('Error loading engravings:', error);
      }
    };

    loadEngravings();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.gridContainer}>
        {engravings.map((engraving, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Image source={engraving.source} style={styles.image} />
            <Text style={styles.buttonText}>{engraving.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    // backgroundColor: '#4CAF50',
    width: (windowWidth - 40) / 5, // Adjust width to fit 6 buttons in a row
    padding: 1,
    margin: 5,
    borderRadius: 5,


    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  image: {
    width: 80,  // Set image width
    height: 80, // Set image height
    marginBottom: 5,
    borderWidth: 3,  // Thicker border
    borderColor: '#800080',  // Purple border color
  },
});