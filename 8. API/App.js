import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Axios from 'axios';

export default function App() {
  const URL = 'https://randomuser.me/api/';
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get(URL);
      const details = data.results[0];

      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  return <Text>Hello</Text>;
}

const styles = StyleSheet.create({});
