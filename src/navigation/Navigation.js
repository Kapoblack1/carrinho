// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import CarrinhosScreen from '../screens/CarrinhosSrceen';



const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CarrinhosScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CarrinhosScreen" component={CarrinhosScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};//DocumentViewerScreen