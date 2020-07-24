import { USERS_FETCH_DATA_SUCCESS, USERS_IS_LOADING, USER_HAS_ERRORED, FETCH_IMAGES } from '../actions/usersTypes';

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  hasErrored: false,
  imageIsLoading: false,
  myUser: {
    name: 'Diego Rios',
    email: 'diegosoriarios@gmail.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc nibh, blandit nec libero vitae, lobortis consequat dolor. Duis tincidunt molestie gravida. Duis egestas augue. ',
    avatar: 'https://api.adorable.io/avatars/285/diego.png'
  }
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
    case 'MY_USER':
      return {
        ...state,
        myUser: action.myUser
      }
    default:
      return state
  }
}