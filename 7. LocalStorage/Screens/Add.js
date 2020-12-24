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
import snackbar from 'react-native-snackbar';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';

export default function Add({navigation}) {
  const [name, setName] = useState('');
  const [totalSeasons, setTotalSeasons] = useState('');

  const addToList = async () => {
    try {
      if (!name || !totalSeasons) {
        snackbar.show({
          backgroundColor: '#ff6666',
          textColor: '#ffffff',
          text: 'please enter both the values',
          duration: Snackbar.LENGTH_SHORT,
        });
        const seasonsToAdd = {
          id: shortid.generate(),
          name: name,
          totalSeasons: totalSeasons,
          isWatched: false,
        };
        const storedValue = await AsyncStorage.getItem('@season_list');
        const prevList = await JSON.parse(storedValue);

        if (!prevList) {
          const newList = [seasonsToAdd];
          await AsyncStorage.setItem('@season_list', JSON.stringify(newList));
        } else {
          prevList.push(seasonsToAdd);
          await AsyncStorage.setItem('@season_list', JSON.stringify(prevList));
        }
      }
      if (name && totalSeasons) {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#121212',
      }}>
      <Text style={styles.heading}> Enter your new show here </Text>
      <TextInput
        autoCapitalize="sentences"
        placeholder="Enter Series Name"
        placeholderTextColor="#323232"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.Input}></TextInput>
      <TextInput
        keyboardType="number-pad"
        placeholder="Enter No. Of Seasons"
        placeholderTextColor="#323232"
        value={totalSeasons}
        onChangeText={(text) => setTotalSeasons(text)}
        style={styles.Input}></TextInput>

      <TouchableOpacity onPress={addToList} style={styles.addButton}>
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
