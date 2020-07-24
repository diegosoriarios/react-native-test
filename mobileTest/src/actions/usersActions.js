import api from '../services/api';
import { USERS_FETCH_DATA_SUCCESS, USERS_IS_LOADING, USER_HAS_ERRORED, FETCH_IMAGES, MY_USER } from './usersTypes'

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
    type: MY_USER,
    myUser: user
  }
}

function generateLastTimeActive(index) {
  let value
  let time
  switch(index) {
    case 0:
      return 'Now'
    case 1:
      value = Math.floor(Math.random() * 20 + 2)
      time = Math.random() > .5 ? "day(s)" : "hour(s)"
      return `${value} ${time}`
    case 2:
      value = Math.floor(Math.random() * 60 + 5)
      return `${value} minutes`
    case 3:
      value = Math.random() > .5 ? 1 : 2
      return `${value} hour`
  }
}

function generateSocialMedia() {
  const socialNetworks = [
    'codepen', 'facebook', 'flickr', 'foursquare', 'github', 'gitlab', 'instagram', 'linkedin', 
    'medium', 'pinterest', 'stack-overflow', 'steam', 'twitch', 'twitter', 'vimeo', 'youtube']

  const qtd = Math.floor(Math.random() * 6 + 1)

  let i = 0
  let social = []
  while (i < qtd) {
    let index = Math.floor(Math.random() * socialNetworks.length)

    social.push(socialNetworks[index])

    i++
  }

  return social
}

export function userFetchData() {
  return async (dispatch) => {
    dispatch(userIsLoading(true));

    const statusArray = ["ACTIVE", "OFFLINE", "BUSY", "AWAY"]
    try {
      const response = await api.get('users')    

      let users = response.data

      users = users.map(user => {
        let random = Math.floor(Math.random() * 4)
        user.albums = []
        user.status = statusArray[random]
        user.lastTimeActive = generateLastTimeActive(random)
        user.social = generateSocialMedia()
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

      let album = array.filter( (ele, ind) => ind === array.findIndex( elem => elem.albumId === ele.albumId && elem.id === ele.id)) 

      user.albums = album
      
      
      dispatch(userImageFetchLoading(false))
    } catch (error) {
      dispatch(userHasErrored(true)) 
    }
  }
}