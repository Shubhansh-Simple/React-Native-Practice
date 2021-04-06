import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen   from './src/screens/HomeScreen';
import ParentScreen from './src/screens/ParentScreen';
import StateScreen  from './src/screens/StateScreen';

const Stack = createStackNavigator()

export default () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen 
          name='home' 
          component={HomeScreen}
          options={ {title : 'Home Screen' } }/>

        <Stack.Screen 
          name='parent' 
          component={ParentScreen} 
          options={ {title : 'Parent Screen' } }/>

        <Stack.Screen 
          name='state' 
          component={StateScreen} 
          options={ {title : 'State Screen' } }/>

      </Stack.Navigator>

    </NavigationContainer>
  );
};


