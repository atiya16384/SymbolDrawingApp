import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet } from 'react-native';

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

// Custom drawer content for contact info
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={styles.drawerSection}>
        <Text style={styles.sectionTitle}>Contact App Founder</Text>
        <Text style={styles.sectionTitle}>Usama Yakub</Text>
        <Text style={styles.opticianInfo}>Phone: 07835894086</Text>
        <Text style={styles.opticianInfo}>Email: usamayakub@virginmedia.com</Text>
      </View>
    </DrawerContentScrollView>
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

// Styling for drawer contact information
const styles = StyleSheet.create({
  drawerSection: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  opticianInfo: {
    fontSize: 14,
    marginBottom: 5,
  },
});

