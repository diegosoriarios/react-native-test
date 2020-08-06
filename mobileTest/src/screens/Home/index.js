import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux'

// import { Container } from './styles';
import { userFetchData } from '../../actions/usersFunctions';
import { ListItem } from '../../components';

const Home = ({ users, isLoading, hasErrored, fetchData }) => {

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) return <Text>Loading</Text>
  if (hasErrored) return <Text>Error</Text>
  
  return (
    <FlatList 
      style={{ backgroundColor: 'white' }}
      data={users}
      keyExtractor={user => String(user.id)}
      renderItem={({item}) => <ListItem user={item} />}
    />
  )
}

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    isLoading: state.usersReducer.isLoading,
    hasErrored: state.usersReducer.hasErrored
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(userFetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);