import React from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';

// import { Container } from './styles';

const Settings = () => {
  return (
    <View>
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      <TouchableHighlight>
        <Text>Send</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Settings;