// App.js (ou votre fichier principal de navigation)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import VehiculeA from './components/VehiculeA';
import VehiculeA2 from './components/VehiculeA2';
import CodeGR from './components/CodeGR';
import CarDamageForm from './components/CarDamageForm';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="VehiculeA" component={VehiculeA} />
        <Stack.Screen name="VehiculeA2" component={VehiculeA2} />
        <Stack.Screen name="Code GR" component={CodeGR} />
        <Stack.Screen name="CarDamageForm" component={CarDamageForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
