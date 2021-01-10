import * as React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import shortid from 'shortid';
import AsyncStorage from '@react-native-community/async-storage';
import snackbar from 'react-native-snackbar';
import Checkbox from '@react-native-community/checkbox';

export default function Home({navigation, route}) {
  const [ListOfSeasons, SetListOfSeasons] = useState(['The game of Thrones']);
  const [isSelected, setSelection] = useState(false);

  const getList = async () => {};

  const deleteItem = async () => {};

  const markComplete = async () => {};
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {ListOfSeasons.length == 0 ? (
        <View>
          <Text style={styles.heading}>No List of Shows available</Text>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <Text style={styles.heading}>List of Shows</Text>
          <View style={styles.checkboxContainer}>
            <View
              style={{alignSelf: 'center', flex: 12, flexDirection: 'column'}}>
              <Text style={styles.heading1}>{ListOfSeasons}</Text>
              <Text style={styles.subHeading1}>3 seasons </Text>
            </View>
            <View style={{alignSelf: 'center', flex: 3}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Edit');
                }}>
                <Icon style={styles.editIcon} name="pencil" />
              </TouchableOpacity>
            </View>
            <View style={{alignSelf: 'center', flex: 3}}>
              <TouchableOpacity>
                <Icon style={styles.Icon2} name="delete" />
              </TouchableOpacity>
            </View>

            <View style={{alignSelf: 'center', flex: 3}}>
              <Checkbox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
            </View>
          </View>
        </View>
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
  },

  subHeading1: {
    textAlign: 'center',
    color: '#515151',
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
    flex: 0.125,
    flexDirection: 'row',
    width: '90%',
    height: '30%',
    backgroundColor: '#242424',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'space-evenly',
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
