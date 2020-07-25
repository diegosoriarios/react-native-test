import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import Form from '../../components/Form'
import { myUserUpdate } from '../../actions/usersActions';

function Settings({ myUser, updateCurrentUser }) {
  const navigation = useNavigation()
  
  const [name, setName] = useState(myUser.name)
  const [email, setEmail] = useState(myUser.email)
  const [description, setDescription] = useState(myUser.description)
  const [avatar, setAvatar] = useState(myUser.avatar)

  const updateUser = () => {
    const userUpdated = {name, email, description, avatar}
    
    updateCurrentUser(userUpdated)
    navigation.navigate("Home")
  }

  return (
    <Form 
      buttonText="Send" 
      updateUser={updateUser} 
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      description={description}
      setDescription={setDescription}
      avatar={avatar}
      setAvatar={setAvatar}
    />
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings)