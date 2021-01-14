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
  const URL = 'https://randomuser.me/api/';
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get(URL);
      const details = data.results[0];
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
      <View>
        <ActivityIndicator color="white" size="large" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <User pass={details} />
        <TouchableOpacity
          onPress={() => {
            fetchDetails();
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Get details</Text>
        </TouchableOpacity>
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
    height: '10%',
    justifyContent: 'center',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
});
