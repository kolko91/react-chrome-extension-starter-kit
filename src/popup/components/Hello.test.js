import React from 'react';
import renderer from 'react-test-renderer';

import Hello from './Hello';

it('renders footer correctly', () => {
  const tree = renderer.create(<Hello />).toJSON();
  expect(tree).toMatchSnapshot();
});
