import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;