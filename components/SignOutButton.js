// components/SignOutButton.js
import React from 'react';
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function SignOutButton({ navigation }) {
  const signOut = async () => {
    try {
      await auth().signOut();
      navigation.navigate('SignIn');
    } catch (error) {
      console.error(error);
    }
  };

  return <Button mode="contained" onPress={signOut}>Sign Out</Button>;
}
