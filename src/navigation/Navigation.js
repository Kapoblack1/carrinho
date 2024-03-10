// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import CarrinhosScreen from '../screens/CarrinhosSrceen';
import DetailsCarrinhoScreen from '../screens/DetailsCarrinho';



const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DetailsCarrinhoScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CarrinhosScreen" component={CarrinhosScreen} />
        <Stack.Screen name="DetailsCarrinhoScreen" component={DetailsCarrinhoScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};//DocumentViewerScreen