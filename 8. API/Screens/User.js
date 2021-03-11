import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import momemt from 'moment';

export default function User({pass}) {
  console.log(pass);
  return (
    <View style={styles.parent}>
      <FlatList
        keyExtractor={(item) => item._id}
        data={pass}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.Text1}> {item.name} </Text>

            <View style={styles.inner1}>
              <Text style={styles.RegNo}> {item.collegeid} </Text>
              <Text style={styles.Branch}> {item.branch} </Text>
              <Text style={styles.Collage}>{item.college}</Text>
              <Text style={styles.whatsapp}> {item.whatsapp} </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Text1: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
  },

  profilePic: {
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'white',
  },
  card: {
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  parent: {
    backgroundColor: '#dddddd',
  },
  inner1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  RegNo: {
    flex: 7,
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
  },
  Branch: {
    flex: 4,
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
    alignContent: 'center',
  },
  Collage: {
    flex: 7,
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
  },
  whatsapp: {
    flex: 6,
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
  },
});
