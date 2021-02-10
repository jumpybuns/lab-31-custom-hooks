import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EpisodeDetails from './EpisodeDetails';

describe('EpisodeDetails component', () => {
  afterEach(() => cleanup());
  it('renders EpisodeDetails', () => {
    const { asFragment } = render(<EpisodeDetails />);
    expect(asFragment()).toMatchSnapshot();
  });
});
