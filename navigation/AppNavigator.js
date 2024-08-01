// navigation/AppNavigator.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import DrawSymbolScreen from '../screens/DrawSymbolScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SymbolInfoScreen from '../screens/SymbolInfoScreen';
import EngravingListScreen from '../screens/EngravingListScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerLeft: () => (
          <Icon
            name="menu"
            size={30}
            color="#000"
            onPress={() => navigation.openDrawer()}
            style={{ marginLeft: 15 }}
          />
        ),
        headerTitle: route.name, // This sets the header title to the name of the tab
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Draw Symbol" component={DrawSymbolScreen} />
      <Tab.Screen name="Symbol Info" component={SymbolInfoScreen} />
      <Tab.Screen name="Engraving List" component={EngravingListScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Main', { screen: 'MainTabs', params: { screen: 'Home' } })}
      />
      <DrawerItem
        label="Draw Symbol"
        onPress={() => props.navigation.navigate('Main', { screen: 'MainTabs', params: { screen: 'Draw Symbol' } })}
      />
      <DrawerItem
        label="Symbol Info"
        onPress={() => props.navigation.navigate('Main', { screen: 'MainTabs', params: { screen: 'Symbol Info' } })}
      />
      <DrawerItem
        label="Engraving List"
        onPress={() => props.navigation.navigate('Main', { screen: 'MainTabs', params: { screen: 'Engraving List' } })}
      />
      <DrawerItem
        label="Settings"
        onPress={() => props.navigation.navigate('Main', { screen: 'MainTabs', params: { screen: 'Settings' } })}
      />
    </DrawerContentScrollView>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen 
        name="MainTabs" 
        component={MainTabs} 
        options={{ headerShown: false }} 
      />
    </Drawer.Navigator>
  );
}

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
