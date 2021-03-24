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

export default function Images({navigation}) {
  return (
    <View style={styles.whole}>
      <Text style={styles.Text}>Images here</Text>
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
