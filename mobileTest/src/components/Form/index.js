import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import CustomInput from '../CustomInput/index';

import ImageChoose from '../ImageChoose/index';
import CustomButton from '../CustomButton/index';

const Form = ({ name, setName, email, setEmail, description, setDescription, avatar, setAvatar, updateUser, buttonText }) => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const descriptionRef = useRef(null)

  useEffect(() => {
    nameRef.current.focus()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageChoose 
          image={avatar}
          onChangeImage={setAvatar}
        />
        <CustomInput 
          forwardRef={nameRef}
          placeholder="Name"
          name="nameInput"
          value={name}
          onChangeText={setName}
          nextRef={emailRef}
        />
        <CustomInput 
          forwardRef={emailRef}
          placeholder="E-mail"
          name="emailInput"
          value={email}
          onChangeText={setEmail}
          nextRef={descriptionRef}
        />
        <CustomInput 
          forwardRef={descriptionRef}
          name="descriptionInput"
          placeholder="Description" 
          value={description}
          onChangeText={setDescription}
          line={4}
          blurOnSubmit={false}
        />
        <CustomButton
          text={buttonText}
          onPress={updateUser}
        />
      </View>
    </TouchableWithoutFeedback>
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