import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { getUserImages } from '../../actions/usersActions';

const Profile = ({ route, imageIsLoading, getUserImages }) => {
  const { user } = route.params 
  const navigation = useNavigation()
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    navigation.setOptions({ title: `${user.name}` })
    getUserImages(user.id, (user.id - 1) * 10 + page)
  }, [])  

  const getMorePhotos = () => {
    setPage(page + 1)
    getUserImages(user.id, (user.id - 1) * 10 + page)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.image}/>
        <Text>{user.name}</Text>
        <Text>{user.email.toLowerCase()}</Text>
      </View>
      <View style={styles.list}>
        {
          !imageIsLoading && (
            <FlatList
              data={user.albums}
              numColumns={3}
              keyExtractor={image => String(image.id)}
              renderItem={({item}) => <Image source={{ uri: item.url }} style={{ width: '30%', aspectRatio: 1.2}} />}
              onEndReached={() => getMorePhotos()}
              onEndReachedThreshold={.1}
            />
          )
        }
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    imageIsLoading: state.usersReducer.imageIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserImages: (id, page) => dispatch(getUserImages(id, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
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
  header: {
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: 'center'
  },
  list: {
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})