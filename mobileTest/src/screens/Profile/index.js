import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// import { Container } from './styles';

const Profile = ({ route }) => {
  const { user } = route.params 
  
  return (
    <>
      <Image source={{ uri: `https://api.adorable.io/avatars/285/${user.name}.png` }} style={styles.image}/>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </>
  );
}

export default Profile;

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