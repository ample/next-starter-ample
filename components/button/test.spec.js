import React from 'react';
import renderer from 'react-test-renderer';

import { component as Button, fixtures } from '.';

describe('Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button {...fixtures.props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
