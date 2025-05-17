// screens/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home.js';
import ClimbLog from './ClimbLog.js';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // 👈 hides the top bar globally
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ClimbLog" component={ClimbLog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
