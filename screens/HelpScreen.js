import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, Linking } from 'react-native';

const HelpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Check if feedback is provided and either email or contact number is provided
    if (!feedback.trim()) {
      Alert.alert('Error', 'Please enter your feedback before submitting.');
      return;
    }
    
    if (!email.trim() && !contactNumber.trim()) {
      Alert.alert('Error', 'Please provide either your email or contact number.');
      return;
    }

    // Prepare the mailto URL with all the details
    const emailTo = 'usamayakub@virginmedia.com';
    const subject = 'User Feedback from Symbol App';
    const body = `Name: ${name || 'Not provided'}\nEmail: ${email || 'Not provided'}\nContact Number: ${contactNumber || 'Not provided'}\n\nFeedback:\n${feedback}`;
    const mailUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.canOpenURL(mailUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(mailUrl);
        } else {
          Alert.alert('Error', 'Your device does not support email functionality.');
        }
      })
      .catch(() => Alert.alert('Error', 'Failed to open email client.'));
    
    // Clear all input fields after submission
    setName('');
    setEmail('');
    setContactNumber('');
    setFeedback('');
  };

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
        We love hearing from our users! If you have any feedback or suggestions for the app, please drop us an email at feedback@symbolapp.com or use the form below.
      </Text>

      {/* Feedback form */}
      <Text style={styles.heading}>Submit Feedback</Text>
      
      {/* User Details */}
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Your Contact Number"
        value={contactNumber}
        onChangeText={setContactNumber}
        keyboardType="phone-pad"
      />
      
      {/* Feedback */}
      <TextInput
        style={styles.textArea}
        placeholder="Enter your feedback"
        multiline
        value={feedback}
        onChangeText={setFeedback}
      />
      
      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
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
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HelpScreen;
