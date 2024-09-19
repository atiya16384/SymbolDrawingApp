import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function AccountManagementScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUpdateEmail = () => {
    if (!email) {
      setEmailError('Email cannot be empty');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }

    const user = auth().currentUser;

    if (user) {
      user.updateEmail(email)
        .then(() => {
          Alert.alert('Success', 'Email updated successfully!');
          setEmailError('');
        })
        .catch((error) => {
          Alert.alert('Error', error.message);
        });
    } else {
      Alert.alert('Error', 'No user is logged in');
    }
  };

  const handleUpdatePassword = () => {
    if (!newPassword || newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    const user = auth().currentUser;

    if (user) {
      user.updatePassword(newPassword)
        .then(() => {
          Alert.alert('Success', 'Password updated successfully!');
          setPasswordError('');
        })
        .catch((error) => {
          Alert.alert('Error', error.message);
        });
    } else {
      Alert.alert('Error', 'No user is logged in');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Management</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="New Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleUpdateEmail}>
        <Text style={styles.buttonText}>Update Email</Text>
      </TouchableOpacity>

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleUpdatePassword}>
        <Text style={styles.buttonText}>Update Password</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',  // Light background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4A148C',  // Darker purple color for title
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#7E57C2',  // Lighter purple border color
    borderWidth: 1.5,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 15,
    backgroundColor: '#fff',  // White background for input fields
  },
  button: {
    backgroundColor: '#673AB7',  // Matching purple button color
    borderRadius: 25,  // Rounded button
    paddingVertical: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#7E57C2',  // Matching purple text for back button
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 12,
  },
});
