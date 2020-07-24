import React from 'react';
import { ProfileScreen } from '../../src/screens'

import renderer from 'react-test-renderer';

test('Profile Renders Correctly', () => {
  const tree = renderer.create(<ProfileScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});