import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, Title } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Function to validate email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateInputs = () => {
    let isValid = true;

    // Email validation
    if (email === '') {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    if (password === '') {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // Confirm password validation
    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    return isValid;
  };

  const signUp = async () => {
    if (!validateInputs()) return; // If inputs are not valid, return early

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Account created successfully.');
      navigation.navigate('SignIn'); // Navigate to Sign In after successful sign-up
    } catch (error) {
      handleAuthError(error);
    }
  };

  // Handle different types of authentication errors
  const handleAuthError = (error) => {
    let errorMessage = '';

    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'This email address is already in use.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address format.';
        break;
      case 'auth/weak-password':
        errorMessage = 'Password is too weak.';
        break;
      default:
        errorMessage = 'An unexpected error occurred. Please try again.';
    }

    Alert.alert('Error', errorMessage);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Sign Up</Title>
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

      <TextInput
        style={styles.input}
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        left={<TextInput.Icon name="lock" />}
        error={!!passwordError} // Error prop for TextInput
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <TextInput
        style={styles.input}
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        mode="outlined"
        secureTextEntry
        left={<TextInput.Icon name="lock" />}
        error={!!confirmPasswordError} // Error prop for TextInput
      />
      {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}

      <Button mode="contained" onPress={signUp} style={styles.button}>
        Sign Up
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
