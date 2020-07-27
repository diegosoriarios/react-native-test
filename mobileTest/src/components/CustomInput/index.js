import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles'

const CustomInput = ({ forwardRef, value, placeholder, onChangeText, line = 1, nextRef = null, blurOnSubmit = true }) => {

  return (
    <TextInput
      ref={forwardRef}
      style={styles.container}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder={placeholder}
      multiline={true}
      numberOfLines={line}
      blurOnSubmit={blurOnSubmit}
      onSubmitEditing={() => nextRef ? nextRef.current.focus() : {}}
    />
  )
}

export default CustomInput;