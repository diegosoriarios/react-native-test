import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FlatList, ActivityIndicator, View, Text, Image } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { getUserImages } from '../../actions/usersActions';
import styles from './styles'
import GridItem from '../../components/GridItem';
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

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
        <Image style={styles.image} source={{ uri: user.image }} />
        <Text style={styles.textName}>{user.name}</Text>
        <Text style={styles.textEmail}>{user.email.toLowerCase()}</Text>
        <Text style={styles.textDescription}>{user.company.catchPhrase}</Text>
      </View>
      <View style={styles.socialDisplay}>
        {
          user.social.map((social, i) => (
             <SocialIcon key={i} type={social} />
          ))
        }
      </View>
      <View style={styles.list}>
        <FlatList
          data={user.albums}
          numColumns={3}
          keyExtractor={image => String(image.id)}
          ListFooterComponent={imageIsLoading && <ActivityIndicator size={'small'} color="#fff" />}
          renderItem={({item}) => <GridItem item={item} />}
          onEndReached={() => getMorePhotos()}
          onEndReachedThreshold={.3}
        />
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