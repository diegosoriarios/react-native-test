import { USERS_FETCH_DATA_SUCCESS, USERS_IS_LOADING, USER_HAS_ERRORED } from '../actions/usersTypes';

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  hasErrored: false
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
    default:
      return state
  }
}