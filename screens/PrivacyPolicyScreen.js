import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PrivacyPolicyScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      <Text style={styles.title}>Privacy Policy</Text>

      <Text style={styles.text}>
        This Privacy Policy explains how we collect, use, and protect your personal information.
      </Text>

      <Text style={styles.subheading}>1. Data Collection</Text>
      <Text style={styles.text}>
        We collect data to improve your experience with our app. This includes personal information such as your email,
        account details, and payment information. Additionally, we collect data related to the features of the app that
        you interact with, such as the images you create and the feedback you provide.
      </Text>

      <Text style={styles.subheading}>2. Data Usage</Text>
      <Text style={styles.text}>
        Your data is used for improving our services, sending important updates, managing your account, and maintaining
        app functionality.
      </Text>

      <Text style={styles.subheading}>3. Image Storage (Draw Symbol Feature)</Text>
      <Text style={styles.text}>
        The images you create using the "Draw Symbol" feature of the app are stored securely on our servers. These images
        are used solely for the purpose of enhancing your experience within the app, and they are not shared with any
        third parties without your consent. You can request the removal of your stored images at any time by contacting
        our support team.
      </Text>

      <Text style={styles.subheading}>4. Feedback and Information Storage (Help Screen)</Text>
      <Text style={styles.text}>
        If you provide feedback or information through the "Help" screen, including any personal or technical details,
        this data will also be securely stored on our servers. We use this information to improve the app, provide
        customer support, and respond to your inquiries. Feedback data is not shared with any third parties unless
        explicitly required by law.
      </Text>

      <Text style={styles.subheading}>5. Data Protection</Text>
      <Text style={styles.text}>
        We use secure technologies to protect your data. Your payment and personal information are encrypted and stored
        securely. We take measures to ensure that your images, feedback, and other data are safeguarded from unauthorized
        access.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
