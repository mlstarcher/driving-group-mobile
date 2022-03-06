import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ title: 'Log In' }}
         />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Sign Up' }}
         />
         <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  heading: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 160,
    paddingHorizontal: 15,
    marginBottom: 10,
    opacity: 0.1,
  },
  welcome: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
