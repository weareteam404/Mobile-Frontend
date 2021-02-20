

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 import login from './src/login';
  import signUp from './src/signUp';
  import register from './src/register';
  import frontPage from './src/frontPage';
  import about from './src/about';



  const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
          name="null"
        component={frontPage}
        options={{ headerShown: false }}
        
      /> 
        <Stack.Screen
      name="about"
      component={about}
      options={{ headerShown: false }}
    />   
           <Stack.Screen
        name="signUp"
        component={signUp}
        options={{ headerShown: false }}
      />     

<Stack.Screen
        name="register"
        component={register}
        options={{ headerShown: false }}
      />   

<Stack.Screen
        name="login"
        component={login}
        options={{ headerShown: false }}
      />  
    </Stack.Navigator>
  </NavigationContainer>
    );
  
  
  }
}