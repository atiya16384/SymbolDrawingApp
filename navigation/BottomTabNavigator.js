// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Import your screens
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';


// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        
        <Tab.Screen name="Settings" component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
