import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput/index';

// import { Container } from './styles';
import { connect } from 'react-redux';
import ImageChoose from '../../components/ImageChoose/index';
import CustomButton from '../../components/CustomButton/index';
import { myUserUpdate } from '../../actions/usersActions';
import { useNavigation } from '@react-navigation/native';

const Form = ({ myUser, updateCurrentUser, buttonText = "Login" }) => {

  const [name, setName] = useState(myUser.name)
  const [email, setEmail] = useState(myUser.email)
  const [description, setDescription] = useState(myUser.description)
  const [avatar, setAvatar] = useState(myUser.avatar)
  const navigation = useNavigation()

  const updateUser = () => {
    const userUpdated = {name, email, description, avatar}
    updateCurrentUser(userUpdated)
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <ImageChoose 
        image={avatar}
        onChangeImage={() => {}}
      />
      <CustomInput 
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <CustomInput 
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

const mapStateToProps = state => {
  return {
    myUser: state.usersReducer.myUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentUser: (user) => dispatch(myUserUpdate(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  }
})