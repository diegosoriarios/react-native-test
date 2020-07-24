import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

// import { Container } from './styles';

const IconLink = ({ iconName, page }) => {
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate(page)}>
      <Icon name={iconName} size={30} color="black" style={{marginHorizontal: 10}} />
    </TouchableOpacity>
  )
}

export default IconLink;