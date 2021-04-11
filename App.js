import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen   from './src/screens/HomeScreen';
import ParentScreen from './src/screens/ParentScreen';
import StateScreen  from './src/screens/StateScreen';
import ColorScreen  from './src/screens/ColorScreen';
import InputScreen  from './src/screens/InputScreen';

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

        <Stack.Screen 
          name='color' 
          component={ColorScreen}
          options={ {title : 'Color Screen' } }/>

        <Stack.Screen 
          name='input' 
          component={InputScreen}
          options={ {title : 'Input Screen' } }/>

      </Stack.Navigator>

    </NavigationContainer>
  );
};


