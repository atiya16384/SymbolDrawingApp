// screens/SettingsScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import SignOutButton from '../components/SignOutButton'; // Ensure this path is correct

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Settings</Title>
      <SignOutButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
