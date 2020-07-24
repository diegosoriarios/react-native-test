import { USERS_FETCH_DATA_SUCCESS, USERS_IS_LOADING, USER_HAS_ERRORED, FETCH_IMAGES } from '../actions/usersTypes';

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  hasErrored: false,
  imageIsLoading: false
}

export function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USERS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        users: action.users
      }
    case USERS_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case USER_HAS_ERRORED:
      return {
        ...state,
        hasErrored: action.hasErrored
      }
    case FETCH_IMAGES:
      return {
        ...state,
        imageIsLoading: action.imageIsLoading
      }
    default:
      return state
  }
}