import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TermsOfServiceScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      <Text style={styles.title}>Terms of Service</Text>

      <Text style={styles.subheading}>1. Subscription Model</Text>
      <Text style={styles.text}>
        This app operates on a subscription-based model. By using the app, you agree to pay a monthly subscription fee of $9.99, which provides access to premium features such as the ability to draw and store images, as well as personalized account management features.
      </Text>

      <Text style={styles.subheading}>2. Payment</Text>
      <Text style={styles.text}>
        Payments are processed securely through a third-party provider. By subscribing, you agree that your payment method will be charged automatically each month until you cancel the subscription. 
      </Text>

      <Text style={styles.subheading}>3. Drawn Images</Text>
      <Text style={styles.text}>
        Any symbols or images you create using the "Draw Symbol" feature belong to you, but by using the app, you agree to allow us to store these images on our servers to ensure synchronization across devices. You also agree that these images may be used to enhance app functionality, such as future retrieval and device syncing.
      </Text>

      <Text style={styles.subheading}>4. Feedback and Ownership</Text>
      <Text style={styles.text}>
        Any feedback or suggestions you provide through the app’s help screen becomes the property of the app. By submitting feedback, you agree that we can use this information to improve the app without further compensation to you.
      </Text>

      <Text style={styles.subheading}>5. Refund Policy</Text>
      <Text style={styles.text}>
        We offer a 7-day free trial for new users. After the trial period, your payment method will be charged automatically. Refunds are generally not provided unless required by law. You can cancel your subscription at any time, and your access to premium features will continue until the end of the billing period.
      </Text>

      <Text style={styles.subheading}>6. Changes to Terms</Text>
      <Text style={styles.text}>
        We reserve the right to modify these terms at any time. You will be notified of significant changes via email or through notifications in the app. Continued use of the app after such changes signifies your acceptance of the new terms.
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
