import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import shortid from 'shortid';
import AsyncStorage from '@react-native-community/async-storage';
import snackbar from 'react-native-snackbar';
import Checkbox from '@react-native-community/checkbox';
import {useIsFocused} from '@react-navigation/native';

export default function Home({navigation, route}) {
  const [ListOfSeasons, setListOfSeasons] = useState([]);
  const [isSelected, setSelection] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();

  const getList = async () => {
    setLoading(true);

    const storedValue = await AsyncStorage.getItem('@season_list');
    if (!storedValue) {
      setListOfSeasons([]);
    }
    const list = JSON.parse(storedValue);
    setListOfSeasons(list);
    setLoading(false);
  };

  const deleteItem = async (id) => {
    const newList = await ListOfSeasons.filter((list) => list.id !== id);
    await AsyncStorage.setItem('@season_list', JSON.stringify(newList));
    setListOfSeasons(newList);
  };

  const markComplete = async (id) => {
    const newArr = ListOfSeasons.map((list) => {
      if (list.id == id) {
        list.isWatched = !list.isWatched;
      }
      return list;
    });
    await AsyncStorage.setItem('@season_list', JSON.stringify(newArr));
    setListOfSeasons(newArr);
  };

  useEffect(() => {
    getList();
  }, [isFocused]);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#10F7E8"
        style={{justifyContent: 'center', backgroundColor: '#121212', flex: 1}}
      />
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {ListOfSeasons.length == 0 ? (
        <View>
          <Text style={styles.heading}>No List of Shows available</Text>
        </View>
      ) : (
        <ScrollView style={{flex: 1}}>
          <Text style={styles.heading}>List of Shows</Text>
          {console.log(JSON.stringify(ListOfSeasons))}
          {ListOfSeasons.map((season) => (
            <View key={season.id} style={styles.checkboxContainer}>
              <View
                style={{
                  alignSelf: 'center',
                  flex: 12,
                  flexDirection: 'column',
                }}>
                <Text style={styles.heading1}>{season.name}</Text>
                <Text style={styles.subHeading1}>
                  {season.totalSeasons} seasons
                </Text>
              </View>
              <View style={{alignSelf: 'center', flex: 3}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Edit', {season});
                  }}>
                  <Icon style={styles.editIcon} name="file-document-edit" />
                </TouchableOpacity>
              </View>
              <View style={{alignSelf: 'center', flex: 3}}>
                <TouchableOpacity
                  onPress={() => {
                    deleteItem(season.id);
                  }}>
                  <Icon style={styles.Icon2} name="delete" />
                </TouchableOpacity>
              </View>

              <View style={{alignSelf: 'center', flex: 3}}>
                <Checkbox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                  onPress={() => {
                    markComplete(season.id);
                  }}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      )}

      <TouchableOpacity
        style={styles.FAB}
        onPress={() => {
          navigation.navigate('Add');
        }}>
        <Icon style={styles.Icon} name="plus" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    color: 'white',
    marginVertical: 15,
    marginHorizontal: 5,
    fontSize: 18,
  },
  heading1: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    marginBottom: 2,
  },

  subHeading1: {
    textAlign: 'center',
    color: '#616161',
    fontSize: 12,
  },

  FAB: {
    position: 'absolute',
    backgroundColor: '#242424',
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: 'center',
    right: 20,
    bottom: 20,
  },
  Icon: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
  },

  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    height: 80,
    backgroundColor: '#242424',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },

  Icon2: {
    alignSelf: 'center',
    color: '#ff6666',
    fontSize: 30,
  },
  editIcon: {
    alignSelf: 'center',
    color: '#ff6',
    fontSize: 30,
  },
});
