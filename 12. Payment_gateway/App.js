import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Keyboard,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  const [amount, setAmount] = useState(0);

  const Payment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_qD72jCTrv9NMOe', // Your api key
      amount: {amount},
      name: {name},
      prefill: {
        email: 'void@razorpay.com',
        contact: {phone},
        name: 'Razorpay Software',
      },
      theme: {color: '#121212'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <TextInput
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#dddddd',
          width: width / 1.2,
          height: 64,
          color: 'black',
          paddingHorizontal: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}
        placeholder="Enter your full name"
        onChangeText={value => setName(value)}></TextInput>

      <TextInput
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#dddddd',
          width: width / 1.2,
          height: 64,
          color: 'black',
          paddingHorizontal: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}
        placeholder="Enter your contact no."
        onChangeText={value => setPhone(value)}></TextInput>

      <TextInput
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#dddddd',
          width: width / 1.2,
          height: 64,
          color: 'black',
          paddingHorizontal: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}
        placeholder="Enter the amount to pay"
        onChangeText={value => setAmount(value)}></TextInput>
      <TouchableOpacity
        onPress={Payment}
        style={{
          justifyContent: 'center',
          backgroundColor: '#72BA54',
          width: width / 2,
          height: 50,
          paddingHorizontal: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}>
        <Text style={{alignSelf: 'center', color: 'white'}}>Make payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
