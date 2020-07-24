import api from '../services/api';
import { USERS_FETCH_DATA_SUCCESS, USERS_IS_LOADING, USER_HAS_ERRORED, FETCH_IMAGES } from './usersTypes'

export function userHasErrored(bool) {
  return {
      type: USER_HAS_ERRORED,
      hasErrored: bool
  };
}

export function userIsLoading(bool) {
  return {
      type: USERS_IS_LOADING,
      isLoading: bool
  };
}

export function userFetchDataSuccess(users) {
  return {
      type: USERS_FETCH_DATA_SUCCESS,
      users
  };
}

export function userImageFetchLoading(bool) {
  return {
    type: FETCH_IMAGES,
    imageIsLoading: bool
  }
}

export function myUserUpdate(user) {
  return {
    type: 'MY_USER',
    myUser: user
  }
}

export function userFetchData() {
  return async (dispatch) => {
    dispatch(userIsLoading(true));

    try {
      const response = await api.get('users')    

      let users = response.data

      users = users.map(user => {
        user.albums = []
        user.image = `https://api.adorable.io/avatars/285/${user.name}.png`
        return user
      })
      
      dispatch(userFetchDataSuccess(users))
      dispatch(userHasErrored(false))
      dispatch(userIsLoading(false))
    } catch(err) {
      dispatch(userIsLoading(false))
      console.log(err)
      return dispatch(userHasErrored(true))
    }
  };
}

export function getUserImages(userId, page) {
  return async (dispatch, getState) => {
    if (userId * 10 < page) return
    try {
      dispatch(userImageFetchLoading(true))
      const { users } = getState().usersReducer
      const user = users.find(usr => usr.id === userId)
      const images = await api.get(`albums/${page}/photos`)
      
      let array = user.albums.concat(images.data)
      console.log(images.data)

      let album = array.filter( (ele, ind) => ind === array.findIndex( elem => elem.albumId === ele.albumId && elem.id === ele.id))
      console.log(album)

      user.albums = album
      
      
      dispatch(userImageFetchLoading(false))
    } catch (error) {
      dispatch(userHasErrored(true)) 
    }
  }
}