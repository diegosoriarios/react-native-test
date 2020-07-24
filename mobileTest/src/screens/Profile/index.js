import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FlatList, ActivityIndicator } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { getUserImages } from '../../actions/usersActions';
import { List, Container, Image, Header, TextName, TextEmail, TextDescription, SocialDisplay } from './styles'
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
    <Container>
      <Header>
        <Image source={{ uri: user.image }} />
        <TextName>{user.name}</TextName>
        <TextEmail>{user.email.toLowerCase()}</TextEmail>
        <TextDescription>{user.company.catchPhrase}</TextDescription>
      </Header>
      <SocialDisplay>
        {
          user.social.map((social, i) => (
             <SocialIcon key={i} type={social} />
          ))
        }
      </SocialDisplay>
      <List>
        <FlatList
          data={user.albums}
          numColumns={3}
          keyExtractor={image => String(image.id)}
          ListFooterComponent={imageIsLoading && <ActivityIndicator size={'small'} color="#fff" />}
          renderItem={({item}) => <GridItem item={item} />}
          onEndReached={() => getMorePhotos()}
          onEndReachedThreshold={.3}
        />
      </List>
    </Container>
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