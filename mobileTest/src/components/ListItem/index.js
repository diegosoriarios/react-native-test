import React from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Status } from './styles';

const ListItem = ({ user }) => {

  const navigation = useNavigation()
  let status = Math.random() > .5 ? 'ACTIVE' : 'OFFLINE'

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Profile', { user })}>
      <View>
        <Image source={{ uri: user.image }} style={styles.image}/>
      </View>
      <View style={styles.info}>
        <Text>{user.name}</Text>
        <Text>Ultima vez online: 12</Text>
      </View>
      <View>
        <Status status={status}></Status>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info: {
    justifyContent: "space-evenly",
    paddingHorizontal: 10
  },

})