import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import firebase from '@react-native-firebase/auth';

export default function AccountManagementScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Update email
  const handleUpdateEmail = () => {
    const user = firebase.auth().currentUser;

    user.updateEmail(email)
      .then(() => {
        Alert.alert('Email updated!', 'Your email has been updated successfully.');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  // Update password
  const handleUpdatePassword = () => {
    const user = firebase.auth().currentUser;

    user.updatePassword(newPassword)
      .then(() => {
        Alert.alert('Password updated!', 'Your password has been updated successfully.');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  // Sign out user
  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(() => {
        navigation.navigate('SignIn'); // Navigate back to SignIn on logout
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Management</Text>

      <TextInput
        placeholder="New Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <Button title="Update Email" onPress={handleUpdateEmail} />

      <TextInput
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Update Password" onPress={handleUpdatePassword} />

      <Button title="Sign Out" color="red" onPress={handleSignOut} />

      {/* Back Button */}
      <Button title="Back to Settings" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
