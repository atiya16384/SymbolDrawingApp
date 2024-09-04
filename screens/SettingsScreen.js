import React, { useState } from 'react';
import { View, StyleSheet, Switch, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import SignOutButton from '../components/SignOutButton';

export default function SettingsScreen({ navigation }) {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(!isNotificationsEnabled);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

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
          <Switch value={isDarkTheme} onValueChange={toggleTheme} />
        </View>

        <Divider style={styles.divider} />

        <TouchableOpacity style={styles.option} onPress={() => {/* Navigate to Account Management */}}>
          <Text style={styles.optionText}>Account Management</Text>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity style={styles.option} onPress={() => {/* Navigate to Privacy Policy */}}>
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity style={styles.option} onPress={() => {/* Navigate to Terms of Service */}}>
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
    marginBottom: 20,
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
