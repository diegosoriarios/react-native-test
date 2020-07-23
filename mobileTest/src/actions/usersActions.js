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
      console.log(response.status)
      
      dispatch(userFetchDataSuccess(response.data))
      dispatch(userHasErrored(false))
      dispatch(userIsLoading(false))
    } catch(err) {
      dispatch(userIsLoading(false))
      console.log(err)
      return dispatch(userHasErrored(true))
    }
  };
}