import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
// import Ionicons  from 'react-native-vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
import HelpScreen from '../screens/HelpScreen';
import AccountManagementScreen from '../screens/AccountManagementScreen';  // Placeholder screen
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';  // Placeholder screen
import TermsOfServiceScreen from '../screens/TermsOfServiceScreen';  // Placeholder screen



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
          let IconComponent;
        
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              IconComponent = Ionicons;  // Use Ionicons for Home
              break;
            case 'Draw Symbol':
              iconName = 'brush';
              IconComponent = MaterialIcons; // Use MaterialIcons for Draw Symbol
              break;
            case 'Engraving List':
              iconName = 'list';
              IconComponent = MaterialIcons; // Use MaterialIcons for List
              break;
            case 'Manufacturer':
              iconName = 'business';
              IconComponent = MaterialIcons; // Use MaterialIcons for Manufacturer
              break;
            case 'Settings':
              iconName = 'settings';
              IconComponent = Ionicons; // Use Ionicons for Settings
              break;
            default:
              iconName = 'help';
              IconComponent = Ionicons; // Use Ionicons for default Help
              break;
          }
        
          return <IconComponent name={iconName} size={size} color={color} />;
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

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Main Screens"
        component={MainTabs}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          drawerIcon: ({ color, size }) => <MaterialIcons name="help-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Render the top navigation screens */}
      <DrawerItemList {...props} />

      {/* Divider */}
      <View style={styles.divider} />

      {/* Contact Info at the bottom */}
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Contact App Founder</Text>
        <View style={styles.contactItem}>
          <FontAwesome name="user-circle-o" size={20} color="#6200ee" />
          <Text style={styles.sectionSubtitle}>Usama Yakub</Text>
        </View>
        <View style={styles.contactItem}>
          <Ionicons name="call-outline" size={20} color="#6200ee" />
          <Text style={styles.contactInfo}>Phone: 07835894086</Text>
        </View>
        <View style={styles.contactItem}>
          <MaterialIcons name="email" size={20} color="#6200ee" />
          <Text style={styles.contactInfo}>Email: usamayakub@virginmedia.com</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  contactSection: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
    color: '#6200ee',
  },
  contactInfo: {
    fontSize: 14,
    marginLeft: 10,
    color: '#666',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

// Main app navigator with stack navigation
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="Main" component={DrawerNavigator} />
        <Stack.Screen name="Account Management" component={AccountManagementScreen} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="Terms of Service" component={TermsOfServiceScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
