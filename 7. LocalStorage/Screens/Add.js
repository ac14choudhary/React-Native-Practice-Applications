import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import shortid from 'shortid';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Add() {
  const [name, setName] = useState('');
  const [totalSeasons, setTotalSeasons] = useState('');
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#121212',
      }}>
      <Text style={styles.heading}> Enter your new show here </Text>
      <TextInput
        placeholder="Enter Series Name"
        placeholderTextColor="#323232"
        style={styles.Input}></TextInput>
      <TextInput
        placeholder="Enter No. Of Seasons"
        placeholderTextColor="#323232"
        style={styles.Input}></TextInput>

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
  Input: {
    backgroundColor: '#242424',
    height: 50,
    width: '85%',
    alignSelf: 'center',
    fontSize: 22,
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: '5%',
  },
  addButton: {
    width: '40%',
    height: 50,
    backgroundColor: '#00BFA5',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 10,
  },
  addText: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },
});
