import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import momemt from 'moment';

export default function User({pass}) {
  console.log(pass);
  return (
    <View>
      <Image
        style={styles.profilePic}
        source={{
          uri: pass.picture.large,
          width: 150,
          height: 150,
        }}></Image>
      <Text style={styles.Text1}>
        {pass.name.title} {pass.name.first} {pass.name.last}
      </Text>
      <Text style={styles.Text1}> Phone no -- {pass.cell}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Text1: {
    paddingTop: 20,
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  profilePic: {
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'white',
  },
});
