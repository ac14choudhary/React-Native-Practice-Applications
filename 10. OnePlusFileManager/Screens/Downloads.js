import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function Downloads({navigation}) {
  return (
    <View style={styles.whole}>
      <Text style={styles.Text}>Downloads Here</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  whole: {
    flex: 1,
    backgroundColor: '#121212',
  },
  Text: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 15,
  },
});
