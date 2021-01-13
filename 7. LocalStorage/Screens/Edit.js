import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import shortid from 'shortid';

export default function Edit({navigation, route}) {
  const [name, setName] = useState('');
  const [totalSeasons, setTotalSeasons] = useState('');
  const [id, setId] = useState(null);

  const update = async () => {
    try {
      if (!name || !totalSeasons) {
        Snackbar.show({
          backgroundColor: '#ff6666',
          textColor: '#ffffff',
          text: 'please enter both the values',
          duration: Snackbar.LENGTH_SHORT,
        });
        const seasonToUpdate = {
          id: shortid.generate,
          name,
          totalSeasons,
          isWatched: false,
        };
        const storedValue = await AsyncStorage.getItem('@season_list');
        const list = await JSON.parse(storedValue);

        list.map((singleSeason) => {
          if (singleSeason.id == id) {
            singleSeason.name = name;
            singleSeason.totalSeasons = totalSeasons;
          }
          return singleSeason;
        });
        await AsyncStorage.setItem('@season_list', JSON.stringify(list));
      }

      if (name && totalSeasons) {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const {season} = route.params;
    const {id, name, totalSeasons} = season;

    setId(id);
    setName(name);
    setTotalSeasons(totalSeasons);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Screen</Text>
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

      <TouchableOpacity onPress={update} style={styles.addButton}>
        <Text style={styles.addText}> UPDATE </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    color: '#ffffff',
    marginVertical: 20,
    marginBottom: 20,
    fontSize: 20,
  },
  formItem: {
    marginBottom: 20,
  },
  addButton: {
    width: '40%',
    height: 50,
    backgroundColor: '#EF935F',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  addText: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },
  Input: {
    backgroundColor: '#242424',
    height: 50,
    width: '85%',
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: '5%',
  },
});
