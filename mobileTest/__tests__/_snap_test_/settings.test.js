import React from 'react';
import { Settings } from '../../src/screens'

import renderer from 'react-test-renderer';

test('Settings Renders Correctly', () => {
  const tree = renderer.create(<Settings />).toJSON();
  expect(tree).toMatchSnapshot();
});