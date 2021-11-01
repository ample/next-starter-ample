import React from 'react';
import renderer from 'react-test-renderer';

import Button from './';

describe('Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button url="/">testing</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
