import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(1,124,12)');

  const changeBG = () => {
    let colour =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
    setRandomColor(colour);
  };
  const resetBG = () => {
    let Recolour = "'rgb(12,12,12)'";

    setRandomColor(Recolour);
  };

  return (
    <View style={[styles.view1, {backgroundColor: randomColor}]}>
      <StatusBar backgroundColor={randomColor} />

      <TouchableOpacity onPress={changeBG} style={styles.button}>
        <Text style={styles.text1}>Change Random Colour</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetBG} style={styles.button}>
        <Text style={styles.text1}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    backgroundColor: '#242424',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    padding: 20,
    borderRadius: 10,
  },
  text1: {
    fontSize: 30,
    color: 'white',
  },
});
export default App;
