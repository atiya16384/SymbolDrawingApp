import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Switch, Text, TouchableOpacity, Alert } from 'react-native';
import { Divider } from 'react-native-paper';
import messaging from '@react-native-firebase/messaging'; // Firebase messaging for notifications
import SignOutButton from '../components/SignOutButton';

export default function SettingsScreen({ navigation }) {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);

  // Request permission to send notifications
  const requestNotificationPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Notification permission granted.');
    } else {
      console.log('Notification permission denied.');
    }
  };

  // Enable or disable notifications
  const toggleNotifications = () => {
    // Reverse the current state before checking
    const newNotificationState = !isNotificationsEnabled;

    if (newNotificationState) {
      Alert.alert('Notifications Enabled', 'You will receive notifications');
      requestNotificationPermission();
    } else {
      Alert.alert('Notifications Disabled', 'You will not receive notifications');
    }

    // Finally, update the state
    setIsNotificationsEnabled(newNotificationState);
  };

  const toggleTheme = () => setIsDarkThemeEnabled(!isDarkThemeEnabled);

  return (
    <View style={styles.container}>
      <View style={styles.signOutButtonContainer}>
        <SignOutButton navigation={navigation} />
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Enable Notifications</Text>
          <Switch value={isNotificationsEnabled} onValueChange={toggleNotifications} />
        </View>

        <Divider style={styles.divider} />

        <View style={styles.option}>
          <Text style={styles.optionText}>Dark Theme</Text>
          <Switch value={isDarkThemeEnabled} onValueChange={toggleTheme} />
        </View>

        <Divider style={styles.divider} />

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Account Management')}>
          <Text style={styles.optionText}>Account Management</Text>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Privacy Policy')}>
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Terms of Service')}>
          <Text style={styles.optionText}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#f5f5f5',
  },
  signOutButtonContainer: {
    alignItems: 'flex-end',
    marginBottom: 40,
    marginTop: 10,
  },
  optionsContainer: {
    marginTop: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 18,
  },
  divider: {
    marginVertical: 10,
    backgroundColor: '#ccc',
  },
});
