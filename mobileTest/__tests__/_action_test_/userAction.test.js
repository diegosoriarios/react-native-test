//userHasErrored
//userIsLoading
//userFetchDataSuccess
//userImageFetchLoading
//myUserUpdate

import * as actions from '../../src/actions/usersActions'
import { USERS_IS_LOADING, MY_USER } from '../../src/actions/usersTypes';

describe('actions', () => {
  it('should start Loading', () => {
    const isLoading = false
    const expectedAction = {
      type: USERS_IS_LOADING,
      isLoading
    }
    expect(actions.userIsLoading(isLoading)).toEqual(expectedAction)
  })

  it('should stop Loading', () => {
    const isLoading = true
    const expectedAction = {
      type: USERS_IS_LOADING,
      isLoading
    }
    expect(actions.userIsLoading(isLoading)).toEqual(expectedAction)
  })

  it('update User', () => {
    const user = {
      name: 'Diego Rios',
      email: 'diegosoriarios@gmail.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc nibh, blandit nec libero vitae, lobortis consequat dolor. Duis tincidunt molestie gravida. Duis egestas augue. ',
      avatar: 'https://api.adorable.io/avatars/285/diego.png'
    }
    const expectedAction = {
      type: MY_USER,
      myUser: user
    }
    expect(actions.myUserUpdate(user)).toEqual(expectedAction)
  })

  it('Fetch Users', () => {})

  it('Fetch Images', () => {})
})