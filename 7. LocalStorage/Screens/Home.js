import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Fab, Icon} from 'native-base';

export default function Home({navigation, route}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>My list of seasons</Text>
      <Fab
        style={{backgroundColor: '#2E2E33'}}
        position="bottomRight"
        onPress={() => {
          navigation.navigate('Add');
        }}>
        <Icon name="add" color="white" />
      </Fab>
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
});
