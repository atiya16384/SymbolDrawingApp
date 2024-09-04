import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const resetPassword = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Success', 'Password reset email sent!');
      navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
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
      />
      <Button mode="contained" onPress={resetPassword} style={styles.button}>
        Reset Password
      </Button>
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
});
