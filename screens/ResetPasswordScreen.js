import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Title, Appbar } from 'react-native-paper';
import auth from '@react-native-firebase/auth';


export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const resetPassword = async () => {
    if (email === '') {
      Alert.alert('Error', 'Email field cannot be empty.');
      return;
    }

    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Success', 'Password reset email sent!');
      navigation.navigate('SignIn');
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          Alert.alert('Error', 'The email address is not valid.');
          break;
        case 'auth/user-not-found':
          Alert.alert('Error', 'There is no user with this email address.');
          break;
        default:
          Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
     
      </Appbar.Header>

      <View style={styles.container}>
        <Title style={styles.title}>Reset Password</Title>
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          left={<TextInput.Icon name="email" />}
        />
        <Button mode="contained" onPress={resetPassword} style={styles.button}>
          Reset Password
        </Button>
      </View>
    </>
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
});
