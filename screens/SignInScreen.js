import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, Title } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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

    if (password === '') {
      setPasswordError('Password is required.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const signIn = async () => {
    if (!validateInputs()) return; // If inputs are not valid, return early

    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Retrieve additional user information from Firestore
      const userDoc = await firestore().collection('users').doc(user.uid).get();
      if (userDoc.exists) {
        console.log('User data:', userDoc.data());
      } else {
        console.log('No such document!');
      }

      navigation.navigate('Main'); // Navigate to the MainTabs navigator
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
      case 'auth/user-disabled':
        errorMessage = 'This user has been disabled.';
        break;
      case 'auth/user-not-found':
        errorMessage = 'No user found with this email.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password.';
        break;
      default:
        errorMessage = 'An unexpected error occurred. Please try again.';
    }

    Alert.alert('Error', errorMessage);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Sign In</Title>
      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        left={<TextInput.Icon name="email" />}
        error={!!emailError} // Error prop for TextInput
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <TextInput
        style={styles.input}
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        mode="outlined"
        secureTextEntry
        left={<TextInput.Icon name="lock" />}
        error={!!passwordError} // Error prop for TextInput
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <Button mode="contained" onPress={signIn} style={styles.button}>
        Sign In
      </Button>

      <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? Sign Up
      </Text>
      <Text style={styles.link} onPress={() => navigation.navigate('ResetPassword')}>
        Forgot Password?
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
