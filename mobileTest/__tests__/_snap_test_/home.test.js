import React from 'react';
import { HomeScreen } from '../../src/screens'

import renderer from 'react-test-renderer';

test('Home Renders Correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});