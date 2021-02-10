import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Episode from './Episode';

describe('Episode component', () => {
  afterEach(() => cleanup());
  it('renders Episode', () => {
    const { asFragment } = render(<Episode name="Arnold" url="http" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
