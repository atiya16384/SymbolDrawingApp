import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ZeissScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Icon name="arrow-back" size={24} color="#000" />
              <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        <Text style={styles.title}>Carl Zeiss Vision Information</Text>
        <Text>
          Carl Zeiss Vision is a global leader in optics and optoelectronics, with over 170 years of innovation in optical technologies. The company specializes in high-quality lenses for eyeglasses, ophthalmic instruments, and medical technology.
        </Text>
        <Text style={styles.sectionTitle}>Key Products:</Text>
        <Text>
          - **Zeiss Progressive Lenses**: Tailored for optimal vision at any distance.
          - **Zeiss Digital Lenses**: Specifically designed to combat digital eye strain for frequent screen users.
          - **Zeiss DriveSafe**: Lenses designed to enhance visibility in low-light conditions and reduce glare from headlights.
          - **Zeiss UVProtect**: Provides comprehensive UV protection in clear lenses.
        </Text>
        <Text style={styles.sectionTitle}>Technology & Innovation:</Text>
        <Text>
          Zeiss is known for its pioneering technologies such as the freeform lens design, enabling the highest precision and customization for vision correction. They also offer smart lenses for augmented reality applications.
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