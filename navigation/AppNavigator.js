import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import DrawSymbolScreen from '../screens/DrawSymbolScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ManufacturerScreen from '../screens/ManufacturerScreen';
import LensMatchesScreen from '../screens/LensMatchesScreen';
import ManufacturerListScreen from '../screens/ManufacturerListScreen';
import EngravingListScreen from '../screens/EngravingListScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import EssilorScreen from '../screens/manufacturerScreen/EssilorScreen';
import ZeissScreen from '../screens/manufacturerScreen/ZeissScreen';
import HoyaScreen from '../screens/manufacturerScreen/HoyaScreen';
import AmericanOpticalScreen from '../screens/manufacturerScreen/AmericanOpticalScreen';
import JaiKudoScreen from '../screens/manufacturerScreen/JaiKudoScreen';

import NikonScreen from '../screens/manufacturerScreen/NikonScreen';
import NorvilleScreen from '../screens/manufacturerScreen/NorvilleScreen';

import RodenstockScreen from '../screens/manufacturerScreen/RodenStockScreen';

import PentaxScreen from '../screens/manufacturerScreen/PentaxScreen';
import SeikoScreen from '../screens/manufacturerScreen/SeikoScreen';
import ShamirScreen from '../screens/manufacturerScreen/ShamirScreen';
import SignetArmoliteScreen from '../screens/manufacturerScreen/SignetArmoliteScreen';
import WlcScreen from '../screens/manufacturerScreen/WlcScreen';






import CustomDrawerContent from '../components/CustomDrawerContent'; // Import the custom drawer content
import HelpScreen from '../screens/HelpScreen';  // Import the HelpScreen

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Manufacturer stack navigator
function ManufacturerStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ManufacturerScreen" component={ManufacturerScreen} />
      <Stack.Screen name="ManufacturerListScreen" component={ManufacturerListScreen} />
      {/* Add individual manufacturer screens */}
      <Stack.Screen name="EssilorScreen" component={EssilorScreen} />
      <Stack.Screen name="ZeissScreen" component={ZeissScreen} />
      <Stack.Screen name="HoyaScreen" component={HoyaScreen} />
      <Stack.Screen name="AmericanOpticalScreen" component={AmericanOpticalScreen} />
      <Stack.Screen name="JaiKudoScreen" component={JaiKudoScreen} />
      <Stack.Screen name="NikonScreen" component={NikonScreen} />
      <Stack.Screen name="NorvilleScreen" component={NorvilleScreen} />
      <Stack.Screen name="RodenstockScreen" component={RodenstockScreen} />
      <Stack.Screen name="PentaxScreen" component={PentaxScreen} />
      <Stack.Screen name="SeikoScreen" component={SeikoScreen} />
      <Stack.Screen name="ShamirScreen" component={ShamirScreen} />
      <Stack.Screen name="SignetArmoliteScreen" component={SignetArmoliteScreen} />
      <Stack.Screen name="WlcScreen" component={WlcScreen} />
    </Stack.Navigator>
  );
}


// Lens Matches stack navigator
function LensMatchesScreenStack() {
  return (
    <Stack.Navigator initialRouteName="DrawSymbol">
      <Stack.Screen name="Draw Symbol" component={DrawSymbolScreen} />
      <Stack.Screen name="LensMatches" component={LensMatchesScreen} />
    </Stack.Navigator>
  );
}

// Main tabs navigator for bottom navigation
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Draw Symbol':
              iconName = 'brush';
              break;
            case 'Engraving List':
              iconName = 'list';
              break;
            case 'Manufacturer':
              iconName = 'business';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
            default:
              iconName = 'help';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerTitle: route.name, // This will dynamically set the header title
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="Draw Symbol"
        component={DrawSymbolScreen}
        options={{ title: 'Draw Symbol' }}
      />
      <Tab.Screen
        name="Engraving List"
        component={EngravingListScreen}
        options={{ title: 'Engraving List' }}
      />
      <Tab.Screen
        name="Manufacturer"
        component={ManufacturerStack}
        options={{ title: 'Manufacturer' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
}

// Drawer navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="MainTabs" component={MainTabs}  options={{ headerShown: false }}  />
    </Drawer.Navigator>
  );
}

// Main app navigator with stack navigation
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="Main" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//

