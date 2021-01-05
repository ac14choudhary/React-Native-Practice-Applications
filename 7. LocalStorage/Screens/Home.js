import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Fab, Icon} from 'native-base';
import shortid from 'shortid';
import AsyncStorage from '@react-native-community/async-storage';
import snackbar from 'react-native-snackbar';
import checkbox from '@react-native-community/checkbox';
import {useState} from 'react';

export default function Home({navigation, route}) {
  const [ListOfSeasons, SetListOfSeasons] = useState(['title']);

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
        <View>
          <Text style={styles.heading}>mast series thi</Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.FAB}
        onPress={() => {
          navigation.navigate('Add');
        }}>
        <Icon style={styles.Icon} name="add" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  actionButton: {
    marginLeft: 5,
  },
  seasonName: {
    color: '#fdcb9e',
    textAlign: 'justify',
  },
  listItem: {
    marginLeft: 0,
    marginBottom: 20,
  },
  FAB: {
    position: 'absolute',
    left: '80%',
    top: '85%',
    backgroundColor: '#2E2E33',
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: 'center',
  },
  Icon: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
  },
});
