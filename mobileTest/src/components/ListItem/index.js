import React from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// import { Container } from './styles';

const ListItem = ({ user }) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Profile', { user })}>
      <View>
        <Image source={{ uri: `https://api.adorable.io/avatars/285/${user.name}.png` }} style={styles.image}/>
      </View>
      <View style={styles.info}>
        <Text>{user.name}</Text>
        <Text>Ultima vez online: 12</Text>
        <Text>Status</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100
  },
  info: {
    justifyContent: "space-evenly",
    paddingHorizontal: 10
  }
})