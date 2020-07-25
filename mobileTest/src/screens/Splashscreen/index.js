import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import logo from '../../assets/logo.png'

import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Splashscreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login", { text: 'Login'})
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  )
}

export default Splashscreen;