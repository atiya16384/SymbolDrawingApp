import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HoyaScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Icon name="arrow-back" size={24} color="#000" />
              <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        <Text style={styles.title}>Hoya Vision Care Information</Text>
        <Text>
          Hoya Vision Care is a Japanese multinational specializing in medical technology, particularly in the field of optical lenses. Founded in 1941, Hoya offers a wide range of innovative vision solutions.
        </Text>
        <Text style={styles.sectionTitle}>Key Products:</Text>
        <Text>
          - **Hoya MyoSmart**: Special lenses aimed at slowing the progression of myopia in children.
          - **Hoya BlueControl**: Protects against harmful blue light from digital screens.
          - **Hoya iD FreeForm**: Highly customized progressive lenses for better visual clarity at all distances.
          - **Hoya Hilux**: A range of single-vision lenses offering high-definition optics.
        </Text>
        <Text style={styles.sectionTitle}>Technological Innovation:</Text>
        <Text>
          Hoya is known for developing the Double Surface technology, enabling sharper and more personalized vision correction in progressive lenses.
        </Text>
      </View>
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
      top: 50,
      left: 20,
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