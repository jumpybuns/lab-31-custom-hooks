import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EpisodeDetails from './EpisodeDetails';

describe('EpisodeDetails component', () => {
  afterEach(() => cleanup());
  it('renders EpisodeDetails', () => {
    const { asFragment } = render(
      <EpisodeDetails
        episodes={{
          id: 2,
          name: 'Lawnmower Dog',
          air_date: 'December 9, 2013',
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
