import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, placeholder, onChangeText }) => {
  return (
    <TextInput 
      style={styles.container}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder={placeholder}
    />
  )
}

export default CustomInput;

const styles = StyleSheet.create({
  container: { 
    height: 40, 
    width: '75%',
    backgroundColor: 'gray',
    borderRadius: 5,
    marginVertical: 10,
  }
})