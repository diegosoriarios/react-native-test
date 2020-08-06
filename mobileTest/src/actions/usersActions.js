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