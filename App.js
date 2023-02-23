import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from '@react-navigation/stack';
import AnimatedSplash from "react-native-animated-splash-screen";

import Home from './screens/Home';
import Profile from './screens/Profile';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TabsNavigator() {
  return (
   <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
      name="Profile" 
      component={Profile} 
           options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

 function App() {
 const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 3000);
  
  return (
  <AnimatedSplash
      translucent={true}
      isLoaded={loading}
      logoImage={require("./assets/splash.png")}
      backgroundColor={"#FFFFFF"}
      logoHeight={650}
      logoWidth={550}
    >
  <NavigationContainer>
  
   <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabsNavigator} />
      <Drawer.Screen name="Profile" component={TabsNavigator} />
    </Drawer.Navigator>
  
  </NavigationContainer>
    </AnimatedSplash>
    
    

  );
}

export default App

