import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ProfileScreen } from '../../src/screens'
import renderer from 'react-test-renderer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('react-native-vector-icons/FontAwesome');
jest.mock('@react-navigation/native');
test('Profile Renders Correctly', () => {

  const store = mockStore({
    usersReducer: {
      imageIsLoading: false
    }
  });

  jest.useFakeTimers()

  const route = {
    params: {
      user: {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "social": ["twitter"],
        "albums": [],
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
    }
  }

  const tree = renderer.create(
    <Provider store={store}>
      <ProfileScreen route={route} />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});