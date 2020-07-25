import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import Form from '../../components/Form'
import { myUserUpdate } from '../../actions/usersActions';

function Login({ myUser, updateCurrentUser }) {
  const navigation = useNavigation()
  
  const [name, setName] = useState(myUser.name)
  const [email, setEmail] = useState(myUser.email)
  const [description, setDescription] = useState(myUser.description)
  const [avatar, setAvatar] = useState(myUser.avatar)

  const updateUser = () => {
    if (name.length && email.length) {
      const userUpdated = {name, email, description, avatar}

      updateCurrentUser(userUpdated)
      navigation.replace("Home") 
    } else {
      alert('Name and email cannot be null')
    }
  }

  const emailLowerCase = text => {
    setEmail(text.toLowerCase())
  }

  return (
    <Form 
      buttonText="Login" 
      updateUser={updateUser} 
      name={name}
      setName={setName}
      email={email}
      setEmail={emailLowerCase}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)