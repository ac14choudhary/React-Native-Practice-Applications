import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import LottieView from 'lottie-react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.masterGrid}>
      <View style={styles.Grid1}>
        <Text style={styles.grid1Text}>Available 200 GB / 256 GB</Text>
      </View>
      <View style={styles.Grid2}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Documents')}
          style={styles.card1}>
          <Icon
            style={styles.cardIcon}
            name="file-text"
            size={32}
            color="#FF7043"
          />
          <Text style={styles.cardText}>Documents </Text>
          <Text style={styles.cardText2}>32 items</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Downloads')}
          style={styles.card1}>
          <Icon
            style={styles.cardIcon}
            name="download"
            size={32}
            color="#53C7D6"
          />
          <Text style={styles.cardText}>Downloads </Text>
          <Text style={styles.cardText2}>12 items</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recent')}
          style={styles.card1}>
          <Icon
            style={styles.cardIcon}
            name="clock"
            size={32}
            color="#C8DA47"
          />
          <Text style={styles.cardText}>Recent </Text>
          <Text style={styles.cardText2}>5 items </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Grid2}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Images')}
          style={styles.card1}>
          <Icon
            style={styles.cardIcon}
            name="image"
            size={32}
            color="#54B6A0"
          />
          <Text style={styles.cardText}>Images </Text>
          <Text style={styles.cardText2}>760 items </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Videos')}
          style={styles.card1}>
          <Icon
            style={styles.cardIcon}
            name="video"
            size={32}
            color="#5D7BEE"
          />
          <Text style={styles.cardText}>Videos </Text>
          <Text style={styles.cardText2}>43 items </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Audio')}
          style={styles.card1}>
          <Icon
            style={styles.cardIcon}
            name="headphones"
            size={32}
            color="#C8326E"
          />
          <Text style={styles.cardText}>Audio </Text>
          <Text style={styles.cardText2}>37 items </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Grid3}>
        <LottieView
          source={require('../Assets/SearchInDoc.json')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  masterGrid: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#121212',
    justifyContent: 'center',
  },

  Grid1: {
    flex: 1,
    justifyContent: 'center',
  },

  grid1Text: {
    color: '#cccccc',
    marginLeft: '2%',
    fontSize: 18,
  },

  Grid2: {
    flex: 4,
    flexDirection: 'row',
    margin: 1,
  },

  card1: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#242424',
    justifyContent: 'center',
    paddingBottom: '1%',
  },
  cardIcon: {
    flex: 18,
    paddingLeft: '10%',
    paddingTop: '10%',
  },
  cardText: {
    flex: 8,
    color: '#ffffff',
    marginLeft: '10%',
    fontSize: 17,
  },
  cardText2: {
    flex: 8,
    color: '#aaaaaa',
    marginLeft: '10%',
    fontSize: 12,
  },

  Grid3: {
    flex: 10,
  },
});
