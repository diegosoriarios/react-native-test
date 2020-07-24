import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const SettingsButton = () => {
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Text>O</Text>
    </TouchableOpacity>
  )
}

export default SettingsButton;