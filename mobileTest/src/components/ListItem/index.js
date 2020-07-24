import React from 'react';
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container, Status, Image, Info, TextName } from './styles';

const ListItem = ({ user }) => {

  const navigation = useNavigation()

  return (
    <Container onPress={() => navigation.navigate('Profile', { user })}>
      <View>
        <Image source={{ uri: user.image }}/>
      </View>
      <Info>
        <TextName>{user.name}</TextName>
        <Text>Ultima vez online: {user.lastTimeActive}</Text>
      </Info>
      <View>
        <Status status={user.status}></Status>
      </View>
    </Container>
  )
}

export default ListItem;