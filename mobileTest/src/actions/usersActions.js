import api from '../services/api';
import { USERS_FETCH_DATA_SUCCESS, USERS_IS_LOADING, USER_HAS_ERRORED } from './usersTypes'

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

export function userFetchData() {
  return async (dispatch) => {
    dispatch(userIsLoading(true));

    try {
      const response = await api.get('users')    

      let users = response.data

      users = users.map(user => {
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