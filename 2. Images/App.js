import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import one from './Assets/dice1.png';
import two from './Assets/dice2.png';
import three from './Assets/dice3.png';
import four from './Assets/dice4.png';
import five from './Assets/dice5.png';
import six from './Assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(one);
  const PlayGame = () => {
    let number = Math.floor(Math.random() * 6) + 1;
    switch (number) {
      case 1:
        setUri(one);
        break;

      case 2:
        setUri(two);
        break;
      case 3:
        setUri(three);
        break;
      case 4:
        setUri(four);
        break;
      case 5:
        setUri(five);
        break;
      case 6:
        setUri(six);
        break;
      default:
        setUri(one);
        break;
    }
  };

  return (
    <View style={styles.View1}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Image style={styles.Image} source={uri} />
      <TouchableOpacity onPress={PlayGame} style={styles.button}>
        <Text style={styles.textButon}> Play Game </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  View1: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    height: 200,
    width: 200,
  },
  button: {
    backgroundColor: '#343434',
    height: '10%',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 15,
    marginTop: '5%',
    borderColor: '#4ACFFA',
    borderWidth: 2,
  },
  textButon: {
    color: 'white',
    fontSize: 30,
  },
});

export default App;
