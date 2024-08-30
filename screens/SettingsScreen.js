// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Switch, Text, TouchableOpacity } from 'react-native';
import { Title, Divider } from 'react-native-paper';
import SignOutButton from '../components/SignOutButton';

export default function SettingsScreen({ navigation }) {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(!isNotificationsEnabled);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.title}>Settings</Title>
        <SignOutButton navigation={navigation} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.option}>
        <Text style={styles.optionText}>Enable Notifications</Text>
        <Switch value={isNotificationsEnabled} onValueChange={toggleNotifications} />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Dark Theme</Text>
        <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      </View>
      <TouchableOpacity style={styles.option} onPress={() => {/* Navigate to Account Management */}}>
        <Text style={styles.optionText}>Account Management</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => {/* Navigate to Privacy Policy */}}>
        <Text style={styles.optionText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => {/* Navigate to Terms of Service */}}>
        <Text style={styles.optionText}>Terms of Service</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
  },
  divider: {
    marginVertical: 10,
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
});
