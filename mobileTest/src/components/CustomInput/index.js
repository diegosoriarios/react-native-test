import React from 'react';
import { TextInput } from 'react-native';

import { Container } from './styles'

const CustomInput = ({ value, placeholder, onChangeText, line = 1 }) => {
  return (
    <Container 
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder={placeholder}
      multiline={true}
      numberOfLines={line}
    />
  )
}

export default CustomInput;