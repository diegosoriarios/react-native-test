import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Form } from '../../src/screens'
import renderer from 'react-test-renderer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('@react-navigation/native');
test('Home Renders Correctly', () => {

  const store = mockStore({
    usersReducer: {
      myUser: {
        name: 'Diego',
        email: 'email',
        description: 'alskjfalsk'
      }
    }
  });

  const tree = renderer.create(
    <Provider store={store}>
      <Form />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});