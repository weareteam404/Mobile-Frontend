import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import login from './src/login';
import signUp from './src/signUp';
import Register from './src/register';
import frontPage from './src/frontPage';
import about from './src/about';
import dashboard from './src/deshboard';
import profile from './src/profile';
import question from './src/question';
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <React.Fragment>
            <Stack.Screen
              name="dashboard"
              component={dashboard}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="profile"
              component={profile}
              options={{headerShown: false}}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stack.Screen
              name="null"
              component={frontPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="about"
              component={about}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="signUp"
              component={signUp}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="register"
              component={Register}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="question"
              component={question}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="login"
              component={login}
              options={{headerShown: false}}
            />
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
