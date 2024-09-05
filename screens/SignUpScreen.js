// screens/ResetPasswordScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, Title } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Function to validate email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateInputs = () => {
    let isValid = true;

    if (email === '') {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    return isValid;
  };

  const resetPassword = async () => {
    if (!validateInputs()) return; // If inputs are not valid, return early

    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Success', 'Password reset email sent.');
      navigation.navigate('SignIn'); // Navigate to Sign In after reset
    } catch (error) {
      handleAuthError(error);
    }
  };

  // Handle different types of authentication errors
  const handleAuthError = (error) => {
    let errorMessage = '';

    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address format.';
        break;
      case 'auth/user-not-found':
        errorMessage = 'No user found with this email.';
        break;
      default:
        errorMessage = 'An unexpected error occurred. Please try again.';
    }

    Alert.alert('Error', errorMessage);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Reset Password</Title>
      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        left={<TextInput.Icon name="email" />}
        error={!!emailError} // Error prop for TextInput
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <Button mode="contained" onPress={resetPassword} style={styles.button}>
        Reset Password
      </Button>

      <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
        Back to Sign In
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  link: {
    textAlign: 'center',
    marginTop: 10,
    color: '#6200ee',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});
