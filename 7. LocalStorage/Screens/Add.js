import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Add() {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#121212',
      }}>
      <Text style={styles.heading}> Enter your new show here </Text>
      <TextInput style={styles.Input1}></TextInput>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addText}> ADD </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  formItem: {
    marginBottom: 20,
  },
  Input1: {
    backgroundColor: '#242424',
    height: 50,
    width: '85%',
    alignSelf: 'center',
    fontSize: 22,
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    borderColor: '#DB61A2',
    borderWidth: 0.8,
  },
  addButton: {
    width: '40%',
    height: 50,
    backgroundColor: '#23D18B',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 10,
  },
  addText: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
