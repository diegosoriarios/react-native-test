import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { HomeScreen } from '../../src/screens'
import renderer from 'react-test-renderer';
import 'jest-styled-components/native'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('Home Renders Correctly', () => {

  const store = mockStore({
    usersReducer: {
      users: []
    }
  });

  const tree = renderer.create(
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});