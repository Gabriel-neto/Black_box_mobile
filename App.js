import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login/Login';
import Register from './screens/Register/Register';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
