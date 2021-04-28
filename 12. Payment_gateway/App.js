import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  Keyboard,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const size = width / 4;

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

      amount: amount * 100,
      name: name,

      prefill: {
        email: 'void@razorpay.com',
        contact: phone,

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
      })
      .finally(() => {
        console.log('asasas');
        setAmount('');
        setName('');
        setPhone('');
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
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <ScrollView
          contentContainerStyle={styles.Container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <TextInput
            style={styles.scrollBox}
            placeholder="place 1"
            value={name}></TextInput>

          <TextInput
            style={styles.scrollBox}
            placeholder="place 2"
            value={name}></TextInput>

          <TextInput
            style={styles.scrollBox}
            placeholder="place 4"
            value={name}></TextInput>

          <TextInput
            style={styles.scrollBox}
            placeholder="place 5"
            value={name}></TextInput>

          <TextInput
            style={styles.scrollBox}
            placeholder="place 6"
            value={name}></TextInput>

          <TextInput
            style={styles.scrollBox}
            placeholder="place 7"
            value={name}></TextInput>

          <TextInput
            style={styles.scrollBox}
            placeholder="place 8"
            value={name}></TextInput>

          <TextInput
            style={styles.scrollBox}
            placeholder="place 9"
            value={name}></TextInput>

          <TextInput
            style={styles.scrollBox}
            placeholder="place 10"
            value={name}></TextInput>

          <TextInput
            style={styles.scrollBox}
            placeholder="place 11"
            value={name}></TextInput>

          <TextInput
            style={styles.scrollBox}
            placeholder="place 12"
            value={name}></TextInput>

          <TextInput
            style={styles.scrollBox}
            placeholder="place 13"
            value={name}></TextInput>

          <TextInput
            style={styles.scrollBox}
            placeholder="place 14"
            value={name}></TextInput>
        </ScrollView>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flex: 4,
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
          value={name}
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
          value={phone}
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
          value={amount}
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
          <Text style={{alignSelf: 'center', color: 'white'}}>
            Make payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddddd',
    width: size,
    height: size,
    color: 'black',
    paddingHorizontal: 15,
    borderRadius: 100,
    marginLeft: 20,
  },
  Container: {
    alignItems: 'center',
  },
});
