import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HelpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Help & Support</Text>
      
      <Text style={styles.heading}>General Usage</Text>
      <Text style={styles.paragraph}>
        This app allows you to draw symbols and identify them with ease. Navigate through the app using the menu below or from the drawer menu on the left.
      </Text>

      <Text style={styles.heading}>Drawing Symbols</Text>
      <Text style={styles.paragraph}>
        Go to the "Draw Symbol" tab to start drawing symbols. Once you draw a symbol, the app will automatically process the symbol and display the closest match.
      </Text>

      <Text style={styles.heading}>Manufacturer Information</Text>
      <Text style={styles.paragraph}>
        In the "Manufacturer" tab, you will find a list of supported manufacturers. You can get detailed information on each manufacturer by navigating to their specific screens.
      </Text>

      <Text style={styles.heading}>Contact Support</Text>
      <Text style={styles.paragraph}>
        If you need further assistance, feel free to contact our support team at support@symbolapp.com or call us at 123-456-7890.
      </Text>

      <Text style={styles.heading}>Feedback</Text>
      <Text style={styles.paragraph}>
        We love hearing from our users! If you have any feedback or suggestions for the app, please drop us an email at feedback@symbolapp.com.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});

export default HelpScreen;
