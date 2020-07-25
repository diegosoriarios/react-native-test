import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles'

const CustomInput = ({ value, placeholder, onChangeText, line = 1 }) => {
  
  return (
    <TextInput 
      style={styles.container}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder={placeholder}
      multiline={true}
      blurOnSubmit={false}
    />
  )
}

export default CustomInput;