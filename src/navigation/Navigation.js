// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import CarrinhosScreen from '../screens/CarrinhosScreen';
import DetailsCarrinhoScreen from '../screens/DetailsCarrinho';
import OrderScreen from '../screens/OrderScreen';
import MyOrder from '../screens/MyOrder';
import FeedBackScreen from '../screens/FeedBackScreen';
import ChatScreen from '../screens/ChatScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Carrinhos from '../screens/Vendedor/Carrinhos';
import CreateCartScreen from '../screens/Vendedor/CreateCartScreen';
import MyCartsScreen from '../screens/Vendedor/MyCartsScreen';
import ChatScreen from '../screens/Vendedor/ChatsScreen';
import OrdersScreen from '../screens/Vendedor/OrdersScreen';



const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Carrinhos"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CarrinhosScreen" component={CarrinhosScreen} />
        <Stack.Screen name="DetailsCarrinhoScreen" component={DetailsCarrinhoScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen name="FeedBackScreen" component={FeedBackScreen} />
        <Stack.Screen name="MyOrder" component={MyOrder} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
        <Stack.Screen name="CreateCartScreen" component={CreateCartScreen} />
        <Stack.Screen name="MyCartsScreen" component={MyCartsScreen} />
        <Stack.Screen name="ChatsScreen" component={ChatScreen} />
        <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Carrinhos" component={Carrinhos} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};//DocumentViewerScreen