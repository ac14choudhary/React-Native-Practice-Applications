import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';

const soundList = [
  require('./Assets/one.wav'),
  require('./Assets/two.wav'),
  require('./Assets/three.wav'),
  require('./Assets/four.wav'),
  require('./Assets/five.wav'),
  require('./Assets/six.wav'),
  require('./Assets/seven.wav'),
  require('./Assets/eight.wav'),
  require('./Assets/nine.wav'),
  require('./Assets/ten.wav'),
];

export default function App() {
  const playSound = (sound) => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log('not able to play sound');
      }
    });

    setTimeout(() => {
      soundVar.play();
    }, 500);

    soundVar.release();
  };

  return (
    <ScrollView style={styles.View1}>
      <Image style={styles.logo} source={require('./Assets/logo.png')} />
      <View style={styles.View2}>
        {soundList.map((sound) => (
          <TouchableOpacity
            key={sound}
            style={styles.button}
            onPress={() => {
              playSound(sound);
            }}>
            <Text style={styles.buttonText}> {sound} </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  View1: {
    flex: 1,
    backgroundColor: '#121212',
  },
  logo: {
    alignSelf: 'center',
    margin: 20,
  },
  View2: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#242424',
    alignItems: 'center',
    height: 110,
    width: '46%',
    marginVertical: 6,
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 50,
    color: 'white',
    justifyContent: 'center',
  },
});
