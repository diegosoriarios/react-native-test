import React from 'react';
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import { Colors } from '../../utils/status';

const ListItem = ({ user }) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Profile', { user })}>
      <View>
        <Image style={styles.image} source={{ uri: user.image }}/>
      </View>
      <View style={styles.info}>
        <Text style={styles.textName}>{user.name}</Text>
        <Text>Ultima vez online: {user.lastTimeActive}</Text>
      </View>
      <View>
        <View style={[styles.status, { backgroundColor: Colors[user.status] }]}></View>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem;