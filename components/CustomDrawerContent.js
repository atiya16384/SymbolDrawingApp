// // CustomDrawerContent.js
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import SettingsScreen from '../screens/SettingsScreen';
// import HelpScreen from '../screens/HelpScreen';

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       {/* Drawer items like normal screen navigation */}
//       <DrawerItemList {...props} />

//       {/* Divider */}
//       <View style={styles.divider} />

//       {/* Custom sections in drawer */}
//       <View style={styles.drawerSection}>
//         {/* Notifications Tab */}
//         <DrawerItem
//           label="Notifications"
//           icon={({ color, size }) => <Ionicons name="notifications-outline" size={size} color={color} />}
//           onPress={() => alert('Notifications clicked')}
//         />

//         {/* Settings Tab */}
//         <DrawerItem
//           label="Settings"
//           icon={({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />}
//           onPress={() => alert('Settings clicked')}
//         />

//         {/* Help Tab */}
//         <DrawerItem
//           label="Help"
//           icon={({ color, size }) => <MaterialIcons name="help-outline" size={size} color={color} />}
//           onPress={() => props.navigation.navigate('HelpScreen')}
//         />

//         {/* Contact Info */}
//         <View style={styles.contactSection}>
//           <Text style={styles.sectionTitle}>Contact App Founder</Text>
//           <Text style={styles.sectionSubtitle}>Usama Yakub</Text>
//           <Text style={styles.contactInfo}>Phone: 07835894086</Text>
//           <Text style={styles.contactInfo}>Email: usamayakub@virginmedia.com</Text>
//         </View>
//       </View>
//     </DrawerContentScrollView>
//   );
// }

// // Styles for the drawer
// const styles = StyleSheet.create({
//   drawerSection: {
//     marginTop: 20,
//     paddingHorizontal: 15,
//   },
//   sectionTitle: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   sectionSubtitle: {
//     fontWeight: 'bold',
//     fontSize: 14,
//     marginBottom: 10,
//     color: '#6200ee',
//   },
//   contactInfo: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   contactSection: {
//     marginTop: 30,
//   },
//   divider: {
//     borderBottomColor: '#f4f4f4',
//     borderBottomWidth: 1,
//     marginVertical: 20,
//   },
// });

// export default CustomDrawerContent;
