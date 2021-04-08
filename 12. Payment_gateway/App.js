import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
export default function App() {
  const Payment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_qD72jCTrv9NMOe', // Your api key
      amount: '300000',
      name: 'Fanb',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
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
      <TouchableOpacity onPress={Payment}>
        <Text>Make payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
