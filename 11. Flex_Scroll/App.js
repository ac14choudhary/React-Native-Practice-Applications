import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
export default function App() {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{
        justifyContent: 'space-between',
        alwaysBounceVertical: 'true',
      }}>
      <View style={{flex: 1, backgroundColor: '#121212', height: 3000}}>
        <TouchableOpacity style={{flex: 9, backgroundColor: 'blue'}}>
          <View></View>
        </TouchableOpacity>
        <View style={{flex: 2, backgroundColor: 'green'}}></View>
        <View style={{flex: 3, backgroundColor: '#red'}}></View>
        <View style={{flex: 4, backgroundColor: 'yellow'}}></View>

        <View style={{flex: 1, backgroundColor: 'purple'}}></View>
        <View style={{flex: 4, backgroundColor: 'aqua'}}></View>
        <View style={{flex: 7, backgroundColor: 'white'}}></View>
        <View style={{flex: 5, backgroundColor: 'black'}}></View>
        <View style={{flex: 1, backgroundColor: 'gray'}}></View>
        <View style={{flex: 8, backgroundColor: 'orange'}}></View>
        <View style={{flex: 9, backgroundColor: 'violet'}}></View>
        <View style={{flex: 7, backgroundColor: 'blue'}}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
