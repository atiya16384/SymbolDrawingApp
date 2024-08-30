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

  return (
    <Button mode="contained" onPress={signOut} style={styles.button}>
      Sign Out
    </Button>
  );
}

const styles = {
  button: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#6200ee',
  },
};

