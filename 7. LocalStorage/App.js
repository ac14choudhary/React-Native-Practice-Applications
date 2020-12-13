import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Home from './Screens/Home';
import Edit from './Screens/Edit';
import Add from './Screens/Add';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {backgroundColor: '#ff6666'},
            title: 'Home',
            headerTitleStyle: {color: 'white'},
          }}></Stack.Screen>
        <Stack.Screen
          name="Add"
          component={Add}
          options={{
            headerStyle: {backgroundColor: '#ff6666'},
            title: 'Add',
            headerTitleStyle: {color: 'white'},
          }}></Stack.Screen>
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            headerStyle: {backgroundColor: '#ff6666'},
            title: 'Edit',
            headerTitleStyle: {color: 'white'},
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
