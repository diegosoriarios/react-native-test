import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Profile = ({ route }) => {
  const { user } = route.params 
  const navigation = useNavigation()
  
  useEffect(() => {
    navigation.setOptions({ title: `${user.name}` })
  }, [])

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.image}/>
      <Text>{user.name}</Text>
      <Text>{user.email.toLowerCase()}</Text>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info: {
    justifyContent: "space-evenly",
    paddingHorizontal: 10
  }
})