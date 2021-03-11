import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Axios from 'axios';
import User from './Screens/User';

export default function App() {
  const URL = 'https://apiinception.geny.co.in/regs';
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get(URL);
      const details = data.data;
      console.log(details);
      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (!details) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          style={styles.Indicator}
          color="green"
          size="large"
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <User pass={details} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
  },
  Text1: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
    width: '40%',
    backgroundColor: '#ff6666',
    height: '8%',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  Indicator: {
    backgroundColor: '#121212',
  },
});
