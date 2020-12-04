import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

import Snackbar from 'react-native-snackbar';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = (currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter a proper value',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#ff6666',
      });
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    setResultValue(result.toFixed(2));
  };

  return (
    <ScrollView
      backgroundColor="#efefef"
      style={styles.MContainer}
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <View style={styles.CContainer1}>
          <Text style={styles.Text1}> {resultValue} </Text>
        </View>
        <View>
          <TextInput
            style={styles.Input1}
            keyboardType="numeric"
            placeholder="Enter"
            placeholderTextColor="grey"
            value={inputValue}
            onChangeText={(inputValue) =>
              setInputValue(inputValue)
            }></TextInput>
        </View>
        <View style={styles.CContainer2}>
          {Object.keys(currencyPerRupee).map((currency) => (
            <TouchableOpacity
              style={styles.currencyButton}
              key={currency}
              onPress={() => buttonPressed(currency)}>
              <Text style={styles.currencyText}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  MContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
  },
  CContainer1: {
    flex: 1,
    marginTop: 10,
  },
  Text1: {
    paddingTop: 30,
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: 'WorkSans-Medium',
  },
  Input1: {
    backgroundColor: 'white',
    marginTop: 30,
    fontSize: 20,
    color: 'purple',
    paddingLeft: '5%',
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    fontFamily: 'WorkSans-Light',
  },
  CContainer2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  currencyButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '25%',
    height: 100,
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1.5,
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
  },
  currencyText: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 12,
  },
});
