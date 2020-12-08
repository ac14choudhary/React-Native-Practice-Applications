import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Icons({name}) {
  switch (name) {
    case 'circle':
      return <Icon name="circle" size={45} color="#ff6666" />;

    case 'cross':
      return <Icon name="times" size={45} color="#ff6666" />;

    default:
      return <Icon name="pencil" size={45} color="#ff6666" />;
  }
}
