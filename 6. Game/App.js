import React from 'react';
import {TouchableOpacity, StyleSheet, View, StatusBar} from 'react-native';
import {
  Text,
  Header,
  Container,
  Card,
  Body,
  H1,
  H3,
  Button,
  Content,
} from 'native-base';
export default function App() {
  return <View></View>;
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  box: {
    width: '33%',
    marginBottom: 6,
  },
  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'white',
    backgroundColor: '#4652b3',
    paddingVertical: 10,
  },
});
