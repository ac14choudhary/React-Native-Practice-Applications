import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Documents from './Screens/Documents';
import Downloads from './Screens/Downloads';
import Recent from './Screens/Recent';
import Images from './Screens/Images';
import Videos from './Screens/Videos';
import Audio from './Screens/Audio';
import Home from './Screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="File Manager"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Documents"
          component={Documents}
          options={{
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Downloads"
          component={Downloads}
          options={{
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Recent"
          component={Recent}
          options={{
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Images"
          component={Images}
          options={{
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Videos"
          component={Videos}
          options={{
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Audio"
          component={Audio}
          options={{
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
