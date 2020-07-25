import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomInput from '../CustomInput/index';

import ImageChoose from '../ImageChoose/index';
import CustomButton from '../CustomButton/index';

const Form = ({ name, setName, email, setEmail, description, setDescription, avatar, setAvatar, updateUser, buttonText }) => {

  return (
    <View style={styles.container}>
      <ImageChoose 
        image={avatar}
        onChangeImage={setAvatar}
      />
      <CustomInput 
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <CustomInput 
        ref={input => emailInput = input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput 
        placeholder="Description" 
        value={description}
        onChangeText={setDescription}
        line={4}
      />
      <CustomButton
        text={buttonText}
        onPress={updateUser}
      />
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  }
})